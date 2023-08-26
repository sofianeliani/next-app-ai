"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { faArrowRight, faCode, faComment, faGlobe, faImage, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chat",
    icon: faComment,
    href: "/chat",
    color: "text-violet-400",
    bgColor: "text-violet-700/10"
  },
  {
    label: "Music Generation",
    icon: faMusic,
    href: "/musics",
    color: "text-emerald-300",
    bgColor: "text-emerald-700/10"
  },
  {
    label: "Image Generation",
    icon: faImage,
    href: "/images",
    color: "text-red-400",
    bgColor: "text-red-700/10"
  },
  {
    label: "Video Generation",
    icon: faVideo,
    href: "/videos",
    color: "text-pink-700",
    bgColor: "text-pink-700/10"
  },
  {
    label: "Code Generation",
    icon: faCode,
    href: "/code",
    color: "text-zinc-700",
    bgColor: "text-zinc-700/10"
  },
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore my API 
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat and test my api with the smartest AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
          onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center 
            justify-between hover:shadow-md 
            transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <FontAwesomeIcon
                  icon={tool.icon}
                  className={cn("fontawesome-i w-8 h-8", tool.color)}
                />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
          </Card>          
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
