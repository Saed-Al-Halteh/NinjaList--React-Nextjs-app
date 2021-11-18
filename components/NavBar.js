import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="logo" height="77px" width="128px" />
      </div>
      <Link href="/">
        <a> Home </a>
      </Link>
      <Link href="/about">
        <a> About </a>
      </Link>
      <Link href="/ninjas">
        <a> Ninja Listing</a>
      </Link>
    </nav>
  );
}

export default NavBar;
