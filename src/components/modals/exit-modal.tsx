"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();

  const { isOpen, close } = useExitModal();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image alt="Mascot" width={80} height={80} src="/mascot_sad.svg" />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait, dont&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              onClick={close}
              size="lg"
              variant="primary"
              className="w-full"
            >
              Keep learning
            </Button>
            <Button
              onClick={() => {
                close();
                router.push("/learn");
              }}
              size="lg"
              variant="dangerOutline"
              className="w-full"
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
