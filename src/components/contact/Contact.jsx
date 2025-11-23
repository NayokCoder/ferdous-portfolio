import React from "react";
import { ExpandableScreen, ExpandableScreenContent, ExpandableScreenTrigger } from "@/components/ui/expandable-screen";

const Contact = () => {
  return (
    <ExpandableScreen layoutId="cta-card" triggerRadius="100px" contentRadius="24px">
      <div className="relative flex min-h-screen items-center justify-center">
        <ExpandableScreenTrigger>
          <button className="bg-primary px-6 py-3 text-primary-foreground">Open Screen</button>
        </ExpandableScreenTrigger>
      </div>

      <ExpandableScreenContent className="bg-primary">
        <div className="flex h-full items-center justify-center p-8">
          <h2 className="text-4xl text-primary-foreground">Full Screen Content</h2>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default Contact;
