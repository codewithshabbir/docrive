import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 bg-white py-5 shadow">
      <div className="flex justify-center items-center gap-0.5">
        <FaUserDoctor className="text-4xl text-secondary"/> <span className="font-extrabold text-2xl text-primary">Docrive</span>
      </div>
      <div className="flex items-center gap-6">
        <NavLink/>
        <Button text="Book Appointment" link={'/'}/>
      </div>
    </div>
  );
};

export default Navbar;
