import Search from "./Search"

export const Header = ({ pokemons }: { pokemons: number }) => {
  return (
    <header>
      <div className='navbar bg-base-100'>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <label className='btn btn-circle swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' />

              {/* hamburger icon */}
              <svg
                className='fill-current swap-off'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'>
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>

              {/* close icon */}
              <svg
                className='fill-current swap-on'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'>
                <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
              </svg>
            </label>
          </button>
        </div>
        <div className='flex-1'>
          <a className='text-xl normal-case btn btn-ghost'>Pokemons {pokemons}</a>
        </div>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'></path>
            </svg>
          </button>
        </div>
      </div>
      <Search />
    </header>
  )
}
