import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="logo"
        className="dark:hidden"
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="logo"
        className="hidden dark:block"
        style={{ width: 'auto', height: 'auto' }}
      />
      <p className={cn("font-semibold", font.className)}>Zotion</p>
    </div>
  );
};
