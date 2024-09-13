import Link from "next/link";
import { cn } from "@/lib/utils";

export const MenuItem = ({ href, label, isMobile }) => (
  <Link
    href={href}
    className={cn("text-base", isMobile ? "block py-2" : "inline-block")}
  >
    {label}
  </Link>
);
