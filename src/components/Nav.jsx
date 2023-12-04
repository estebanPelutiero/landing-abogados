import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/svgs/logo.svg";

const NavList = () => {
  return (
    <ul className="z-10 mt-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="home"
          duration={1300}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="nosotros"
          duration={1300}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Sobre nosotros
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:px-4 py-3 border-b-[1px] border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="nosotros"
          duration={1300}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Areas de práctica
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex justify-end lg:pl-4 pt-3 pb-3 border-gray/30 lg:border-none"
      >
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to="contacto"
          duration={1300}
          className="cursor-pointer flex items-center font-poppins text-gray font-normal text-base transition-colors"
        >
          Contacto
        </Link>
      </Typography>
    </ul>
  );
};

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="z-50 px-4 py-2 fixed w-full bg-white/10 backdrop-blur-lg">
      <nav className="mx-auto shadow-none max-w-[1120px] lg:px-0 border-none">
        <div className="flex items-center justify-between py-2">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer"
          >
            <div>
              <Link
              to="home"
              smooth={true}
              offset={-80}
              className="cursor-pointer"
              duration={1300}
              >
                <img
                  className="w-12"
                  src={Logo}
                  loading="lazy"
                  alt="Bastión Jiu Jitsu"
                />
              </Link>
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-7 text-gray" strokeWidth={1.5} />
            ) : (
              <Bars3Icon className="w-7 text-gray" strokeWidth={1.5} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </nav>
    </div>
  );
};

export default Nav;



