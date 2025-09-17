"use client";

import { useEffect, useState } from "react";
import { CountingNumber } from "../ui/counting-number";

const Introduction = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Format time
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(time);
  return (
    <section className="min-h-screen flex flex-col px-6 md:p-16  text-white">
      {/* Location and time */}
      <p className="text-sm font-medium text-gray-200 mb-2">Dhaka Bangladesh, {formattedTime}</p>

      {/* Section title */}
      <p className="text-gray-500 font-medium mb-4">• Introduction</p>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Professional web developer focused <br />
        On your project success.
      </h1>

      <div className="space-y-6">
        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mb-8">"I am a passionate MERN Stack Developer with hands-on experience in building full-stack applications. Skilled in JavaScript, React, Node.js, Express.js, and database design using MySQL and MongoDB. I love solving problems, learning new technologies, and developing solutions that make a real impact."</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {["Branding", "Art Direction", "UI Design", "Webflow Development"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-gray-900 text-gray-200 text-sm hover:bg-gray-800 transition">
              {tag}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mb-8">হ্যালো, আমি Md Ferdous Alam। ছোটবেলা থেকেই টেকনোলজির প্রতি ভীষণ আগ্রহ ছিল। কোডিংয়ের মাধ্যমে সমস্যা সমাধান করতে আর নতুন কিছু তৈরি করতে ভীষণ ভালো লাগে। বর্তমানে আমি একজন MERN Stack ডেভেলপার হিসেবে কাজ করছি। ফ্রন্টএন্ডে React/Next.js এবং ব্যাকএন্ডে Node.js, Express ও ডাটাবেস (MySQL/MongoDB) ব্যবহার করি। আমার লক্ষ্য হচ্ছে এমন অ্যাপ্লিকেশন তৈরি করা, যা ব্যবহারকারীদের জীবনকে সহজ এবং কার্যকর করে তুলবে।</p>
      </div>

      <div className=" p-6 border border-muted rounded-lg mt-8 max-w-xs backdrop-blur-lg bg-black/30">
        <p className="text-sm text-gray-100  font-medium mb-4">• Success Rate of satisfied clients</p>
        <div className="flex justify-end items-center gap-2">
          <div className="flex items-center justify-center">
            <CountingNumber from={0} to={98} duration={3} className="text-5xl font-bold" />
          </div>
          <span className=" text-3xl">%</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
