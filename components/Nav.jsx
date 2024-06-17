import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href='/posts' className='black_btn'>
        All Posts
      </Link>
      <div>
        <Link href='/about' className='black_btn'>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
