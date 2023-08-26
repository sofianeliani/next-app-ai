"use client";

import { cn } from "@/lib/utils";
import {
  faCode,
  faComment,
  faGlobe,
  faImage,
  faMusic,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: faGlobe,
    href: "/dashboard",
    color: "text-sky-400",
  },
  {
    label: "chat",
    icon: faComment,
    href: "/chat",
    color: "text-violet-400",
  },
  {
    label: "Music Generation",
    icon: faMusic,
    href: "/musics",
    color: "text-emerald-300",
  },
  {
    label: "Image Generation",
    icon: faImage,
    href: "/images",
    color: "text-red-400",
  },
  {
    label: "Video Generation",
    icon: faVideo,
    href: "/videos",
    color: "text-pink-400",
  },
  {
    label: "Code Generation",
    icon: faCode,
    href: "/code",
    color: "text-zinc-400",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full space-y-4 py-4 flex flex-col bg-[#111827] text-white">
      <div className="px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-1xl font-bold", montserrat.className)}>
            LSCreative App
          </h1>
        </Link>
      </div>
      <div className="mt-0 space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <FontAwesomeIcon
                icon={route.icon}
                className={cn("fontawesome-i h-5 w-5 mr-3", route.color)}
              />

              <span className={cn("text-1xl", montserrat.className)}>
                {route.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
