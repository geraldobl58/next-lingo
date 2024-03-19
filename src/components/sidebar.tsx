import Link from "next/link";
import Image from "next/image";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Loader } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        `
        flex 
        h-full 
        lg:w-[256px] 
        lg:fixed
        left-0
        top-0
        px-4
        border-r-2
        flex-col
      `,
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="Mascot" width={40} height={40} src="/mascot.svg" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Next Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col flex-1 gap-y-2">
        <SidebarItem label="learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
