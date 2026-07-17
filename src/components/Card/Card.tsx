import { cn } from "../../lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function Card({
  children,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;