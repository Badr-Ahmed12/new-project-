import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Me
        </Link>
      </li>
      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>
    </ul>
  );
}
