"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import messages from "@/message.json";
import Autoplay from "embla-carousel-autoplay";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center md:px-24 py-8">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Speak Freely. Stay Anonymous.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Send and receive messages without sharing who you are.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          GhostWire gives you a safe space to express thoughts, feedback, and
          confessions—without fear or filters.
        </p>
      </section>
      <Carousel
        className="w-full max-w-xs"
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {messages.map((message, index) => (
            <CarouselItem key={index} className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>{message.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                  <Mail className="flex-shrink-0" />
                  <div>
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground">
                      {message.received}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Separator className="my-12 w-full max-w-xs" />
      <section className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Join GhostWire Today!
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Experience the freedom of anonymous communication. Sign up now and
          start sending messages without revealing your identity.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Sign up now and start sending messages without revealing your
          identity.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A safe and private space for honest conversations—no identity, no
          pressure.
        </p>
        <a
          href="/sign-up"
          className="inline-block bg-gray-700 text-white px-5 py-3 rounded-md text-lg md:text-xl hover:bg-slate-600 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
