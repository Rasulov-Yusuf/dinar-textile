import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image src={logo} alt="logo image" loading="lazy"/>
      </Link>
    </>
  );
}
