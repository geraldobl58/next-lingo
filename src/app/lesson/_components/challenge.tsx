import { challengeOptions, challenges } from "@/db/schema";

import { Card } from "./card";

import { cn } from "@/lib/utils";

interface ChallengeProps {
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectdOption?: number;
  disabled: boolean;
  type: (typeof challenges.$inferSelect)["type"];
}

export const Challenge = ({
  options,
  onSelect,
  status,
  selectdOption,
  disabled,
  type,
}: ChallengeProps) => {
  return (
    <div
      className={cn(
        `grid gap-2`,
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
      )}
    >
      {options.map((option, index) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc}
          shortcut={`${index + 1}`}
          selected={selectdOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  );
};
