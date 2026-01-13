import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3 text-primary", className)}>
      <Image
        src="https://i.imgur.com/BaLTIZV.png"
        alt="ECCAF Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="font-headline text-3xl font-bold">ECCAF</span>
    </div>
  );
};

export default Logo;
