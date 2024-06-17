import React from 'react'

const Nav = () => {
  return (
        <nav className='flex-between gap-x-1 w-full mb-2 mt-4 max-sm:gap-x-0 min-w-[360px]'>
        <Link href='/' className='flex gap-2 flex-center pl-1 max-sm:gap-0'>
    
      </Link>
      <Link href='/posts' className='black_btn'>All Posts</Link>

          <div><Link href='/about' className='black_btn'>
              About Me
            </Link></div>
        </nav>

  )
}
//*max-sm:hidden*//
export default Nav
