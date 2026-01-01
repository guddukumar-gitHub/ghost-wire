"use client";

import { Separator } from "@radix-ui/react-separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">About GhostWire</h1>

        <p className="mb-4 text-muted-foreground">
          GhostWire is an anonymous messaging platform built to let people speak
          freely without revealing their identity. In a digital world where
          every message is tied to a profile, GhostWire removes the name and
          keeps the words.
        </p>

        <p className="mb-6 text-muted-foreground">
          Our mission is to create a safe, privacy-first space where honest
          thoughts, feedback, and conversations can exist without fear of
          judgment or exposure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why GhostWire Exists</h2>

        <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
          <li>To encourage honest and open communication</li>
          <li>To remove social pressure from conversations</li>
          <li>To protect user privacy by design</li>
          <li>To let words matter more than identity</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Built With Purpose</h2>

        <p className="text-muted-foreground">
          GhostWire is built using modern web technologies with a strong focus
          on performance, security, and simplicity. Every feature is designed to
          keep the experience fast, intuitive, and respectful of user privacy.
        </p>
      </div>

      <Separator />

      <AspectRatio
        ratio={16 / 9}
        className="bg-muted rounded-lg flex items-center justify-center"
      >
        <div className="text-center px-6">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            GhostWire
          </h3>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Messages that travel without identity. Speak freely. Stay unseen.
          </p>
        </div>
      </AspectRatio>
    </main>
  );
};

export default AboutPage;
