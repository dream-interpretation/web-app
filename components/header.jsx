"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { MenuItem } from "./menu-item";
import { MobileMenu } from "./mobile-menu";

const MENU_ITEMS = [
  { href: "/blogs", label: "Blogs" },
  { href: "/dictionary", label: "Dictionary" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = React.useCallback(
    () => setIsMenuOpen((prev) => !prev),
    []
  );

  return (
    <header className="w-full border-b shadow-sm bg-white dark:bg-black">
      <div className="container mx-auto px-4 h-16">
        <div className="flex justify-between h-full items-center">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {MENU_ITEMS.map((item) => (
              <MenuItem key={item.href} {...item} />
            ))}
            <ThemeModeToggle />
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}
