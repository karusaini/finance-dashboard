"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: "Dashboard", href: "/" },
    { title: "Transactions", href: "/transactions" },
    { title: "Insights", href: "/insights" },
  ];

  return (
    <nav className="border-b dark:border-gray-700 p-4">
      <div className="flex justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-lg font-bold">Finance Dashboard</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Button key={link.title} variant="ghost">
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}

          <ThemeToggle />
          <RoleSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <RoleSwitcher />

          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-2 mt-2 md:hidden">
          {navLinks.map((link) => (
            <Button
              key={link.title}
              variant="ghost"
              className="w-full text-left"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}
