import { allPlaylists, songs as allSongs } from "@/lib/data"
export async function GET({ params, request }) {
  // Get the id from the  url search params
  const { url } = request
  const [, querySting] = url.split("?")
  const searchParams = new URLSearchParams(querySting)
  const id = searchParams.get("id")
  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}