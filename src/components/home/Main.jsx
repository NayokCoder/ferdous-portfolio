"use client";
import { useRef } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Scrollspy } from "@/components/ui/scrollspy/Scrollspy";

import { IoIosHome, IoIosMail } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import { FiMessageSquare } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { LucideLayoutDashboard } from "lucide-react";
import Introduction from "./Introduction";
import { ThemeToggle } from "../ThemeToggle";
const Main = () => {
  const parentRef = useRef(null);
  const nav = [
    {
      id: "section-1",
      label: "Section 1",
      icon: <IoIosHome />,
      component: <Introduction />,
    },
    {
      id: "section-2",
      label: "Section 2",
      icon: <FaNetworkWired />,
    },
    {
      id: "section-3",
      label: "Section 3",
      icon: <GrServices />,
    },
    {
      id: "section-4",
      label: "Section 4",
      icon: <GiAchievement />,
    },
    {
      id: "section-5",
      label: "Section 5",
      icon: <FiMessageSquare />,
    },
    {
      id: "section-6",
      label: "Section 6",
      icon: <IoIosMail />,
    },
    {
      id: "section-7",
      label: "Section 7",
      icon: <ImBlog />,
    },
  ];

  const dash = [
    {
      id: "section-7",
      label: "Section 7",
      icon: <LucideLayoutDashboard />,
    },
  ];
  return (
    <div className="flex grow gap-5 flex-row-reverse rounded-2xl">
      {/* Sidebar */}
      <div className="flex items-center backdrop-blur-xl">
        <div className="px-2 py-4 bg-card border border-border h-fit rounded-full shadow-lg">
          <div className="mb-5">
            {/* <ThemToggle /> */}
            <ThemeToggle />
          </div>
          <button className="border border-border hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg mb-5">
            <span className="text-2xl mx-auto text-muted-foreground  flex items-center justify-center">{dash[0].icon}</span>
          </button>

          <Scrollspy offset={50} targetRef={parentRef} className="flex flex-col items-center gap-5 ">
            {nav.map((item) => (
              <button key={item.id} variant="outline" data-scrollspy-anchor={item.id} className="data-[active=true]:bg-secondary-foreground data-[active=true]:text-secondary rounded-full w-12 h-12 border border-border hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
                {item.icon && <span className="text-2xl mx-auto data-[active=true]:text-accent-foreground flex items-center justify-center">{item.icon}</span>}
              </button>
            ))}
          </Scrollspy>
        </div>
      </div>

      {/* Content */}
      <div className="grow">
        <ScrollArea className="h-[calc(100vh-5rem)] grow pe-5 -me-5" viewportRef={parentRef}>
          <div className="space-y-8">
            {nav.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm">{item.component}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Main;
