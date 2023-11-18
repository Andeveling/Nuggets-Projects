import "./style.css"
import { Scene, Game, WEBGL } from "phaser"

const canvas = document.getElementById("game") as HTMLCanvasElement
const sizes = {
  width: 500,
  height: 500,
}

const speedDown = 100

const gameStartDiv = document.getElementById("gameStartDiv")
const gameStatBtn = document.getElementById("gameStartBtn")
const gameEndDiv = document.getElementById("gameEndDiv")
const gameWinLoseSpan = document.getElementById("gameWinLoseSpan")
const gameEndScoreSpan = document.getElementById("gameEndScoreSpan")

class GameScene extends Scene {
  player?: any
  cursor?: any
  playerSpeed: number = speedDown + 50
  target?: any
  points: number = 0
  textScore?: any
  timeEvent?: any
  textTime?: any
  emitter?: any
  remainingTime?: any
  coinMusic?: any
  bgMusic?: any

  constructor() {
    super("scene-game")
  }

  preload() {
    this.load.image("bg", "/assets/bg.png")
    this.load.image("basket", "/assets/basket.png")
    this.load.image("apple", "/assets/apple.png")
    this.load.image("money", "/assets/money.png")
    this.load.audio("coin", "/assets/coin.mp3")
    this.load.audio("bgMusic", "/assets/bgMusic.mp3")
  }

  create() {

    this.scene.pause("scene-game")
    this.coinMusic = this.sound.add("coin")
    this.bgMusic = this.sound.add("bgMusic").play({ loop: true, volume: 0.5 })

    this.add.image(0, 0, "bg").setOrigin(0)
    this.player = this.physics.add.image(0, sizes.height - 100, "basket").setOrigin(0, 0)
    this.player.setImmovable(true)
    this.player.body.allowGravity = false
    this.player.body.setCollideWorldBounds(true)
    this.player
      .setSize(this.player.width - this.player.width / 5, this.player.height / 6)
      .setOffset(this.player.width / 10, this.player.height - this.player.height / 10)

    this.target = this.physics.add.image(0, 0, "apple").setOrigin(0)
    this.target.setMaxVelocity(0, speedDown)

    this.physics.add.overlap(this.player, this.target, this.targetHit, undefined, this)

    this.cursor = this.input.keyboard?.createCursorKeys()

    this.textScore = this.add.text(20, 20, `Score: ${this.points}`, {
      fontSize: "25px Arial",
      color: "#fff",
    })

    this.textTime = this.add.text(sizes.width - 120, 20, `Time: ${this.time}`, {
      fontSize: "25px Arial",
      color: "#fff",
    })

    this.timeEvent = this.time.delayedCall(30000, this.gameOver, [], this)

    this.emitter = this.add.particles(0, 0, "money", {
      speed: 100,
      gravityY: speedDown - 200,
      scale: 0.04,
      duration: 100,
      emitting: false,
    })
  }

  update(time: number, delta: number) {
    this.remainingTime = this.timeEvent.getRemainingSeconds()
    this.textTime.setText(`Time: ${Math.round(this.remainingTime).toString()}`)
    if (this.target.y >= sizes.height) {
      this.target.setY(0)
      this.target.setX(this.getRandomX())
    }

    const { left, right } = this.cursor
    if (left?.isDown) {
      this.player.setVelocityX(-this.playerSpeed)
    } else if (right?.isDown) {
      this.player.setVelocityX(this.playerSpeed)
    } else {
      this.player.setVelocityX(0)
    }
  }

  getRandomX() {
    return Math.floor(Math.random() * (sizes.width - 100))
  }

  targetHit() {
    this.coinMusic.play({ volume: 0.5 })
    this.emitter.start()
    this.target.setY(0)
    this.target.setX(this.getRandomX())
    this.points++
    this.textScore.setText(`Score: ${this.points}`)
  }
  gameOver() {
    this.sys.game.destroy(true)
    if(this.points > 10) {
      gameWinLoseSpan!.innerHTML = "WIN"
    } else {
      gameWinLoseSpan!.innerHTML = "LOSE"
    }
    gameEndScoreSpan!.innerHTML = this.points.toString()
    gameEndDiv!.style.display = "flex"
  }
}

const config = {
  type: WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
}

const game = new Game(config)

gameStatBtn!.addEventListener("click", () => {
  gameStartDiv!.style.display = "none"
  game.scene.resume("scene-game")
})