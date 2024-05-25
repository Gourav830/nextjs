"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="courses">
          <div className="flex flex-col space-y-4 text-sm">
            {" "}
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music</HoveredLink>
            <HoveredLink href="/courses">Advanced</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>{" "}
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
// export default Navbar;