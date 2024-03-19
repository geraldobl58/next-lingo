interface FeedWarpperProps {
  children: React.ReactNode;
}

export const FeedWarpper = ({ children }: FeedWarpperProps) => {
  return <div className="flex-1 relative top-0 pb-10">{children}</div>;
};
