import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" data-aos="fade-down">
        <h1 className="font-bold text-xl hover:opacity-70">
          Travel<span className="text-green-50">lio.</span>
        </h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            data-aos="fade-down"
            data-aos-delay={link.delay}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div
        className="lg:flexCenter hidden"
        data-aos="fade-down"
        data-aos-delay="900"
      >
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
