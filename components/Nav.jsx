jsx
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/about' className='black_btn'>
            Let's Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
};
