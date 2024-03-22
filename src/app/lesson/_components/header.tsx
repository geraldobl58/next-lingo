import Image from "next/image";

import { InfinityIcon, X } from "lucide-react";

import { Progress } from "@/components/ui/progress";

import { useExitModal } from "@/store/use-exit-modal";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const { open } = useExitModal();

  return (
    <header
      className="
        lg:pt-[50px]
        pt-[50px]
        px-10
        flex
        gap-x-7
        items-center
        justify-between
        max-w-[1140px]
        mx-auto
        w-full
      "
    >
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          alt="Heart"
          width={28}
          height={28}
          src="/heart.svg"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
