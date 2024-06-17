import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/posts' className='black_btn'>
            All Posts
          </Link>
        </li>
        <li>
          <Link href='https://calendly.com/vegamediain/30min' className='black_btn'>
            Let's Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

