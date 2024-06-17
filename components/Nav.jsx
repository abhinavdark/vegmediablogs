import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href='/posts' className='black_btn'>
        All Posts
      </Link>
      <div>
        <a
          href='https://calendly.com/vegamediain/30min'
          target='_blank'
          rel='noopener noreferrer'
          className='black_btn'
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Nav;

