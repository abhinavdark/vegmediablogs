import Link from 'next/link';

function Nav() {
  return (
    <div>
      <Link href='/posts' className='black_btn'>
        All Posts
      </Link>
      <div>
        <Link href='/about' className='black_btn'>
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
