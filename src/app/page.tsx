"use client";

import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  const test = () => {
    console.log("test");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Button
          variant="secondary"
          size="large"
          tooltip="A cool button"
          tooltipPosition="right"
          onClick={test}
        >
          Custom Button
        </Button>
      </main>
    </div>
  );
}
