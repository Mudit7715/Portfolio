"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-6">
            <Logo />
          </div>

          <p className="text-center text-secondary mb-8 font-[var(--font-body)] text-base max-w-2xl">
            AI Engineer & Data Science Student - Building Tomorrow's Intelligent Systems
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <div className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <Link 
                href="mailto:gupta101mudit@gmail.com"
                className="font-[var(--font-body)] text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                gupta101mudit@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Phone className="h-4 w-4" />
              <span className="font-[var(--font-body)]">+91 9205137011</span>
            </div>
          </div>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0 font-[var(--font-body)]">
            &copy; 2024 Mudit Gupta. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Mudit7715" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/mudit-gupta-92a8891b3" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <span className="font-[var(--font-display)] font-semibold text-2xl text-primary dark:text-white">
        Mudit Gupta
      </span>
    </Link>
  );
};