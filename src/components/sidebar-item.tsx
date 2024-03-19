"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
}

export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          alt={label}
          width={32}
          height={32}
          src={iconSrc}
          className="mr-5"
        />
        {label}
      </Link>
    </Button>
  );
};
