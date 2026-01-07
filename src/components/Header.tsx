"use client";

import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CircleUserRound } from "lucide-react";
import { User } from "next-auth";

export function Header() {
  const isMobile = useIsMobile();
  const { data: session, status } = useSession();
  // console.log(status);

  // if (status === "loading") return null;

  // const username = (session?.user as User)?.username;

  return (
    <>
      <nav className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div>
          <Link href="/" className="font-bold text-xl">
            GhostWire
          </Link>
        </div>
        <div>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  {session ? (
                    <Link href="/dashboard">
                      <CircleUserRound />
                    </Link>
                  ) : (
                    <Link href="/sign-in">Get Started</Link>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </>
  );
}

export default Header;
