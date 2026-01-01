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
import { usePathname } from "next/navigation";
import { todo } from "node:test";

export function Header() {
  const isMobile = useIsMobile();
  const { data: session } = useSession();
  const pathname = usePathname();

  if (!session || !session.user) {
    return <div></div>;
  }

  const { username } = session.user as User;
  console.log(session);

  return (
    <>
      <div className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div>
          <Link href="/" className="font-bold text-xl">
            GhostWire
          </Link>
        </div>
        <div>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem >
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
                  {username ? (
                    <Link href="/sign-in"><CircleUserRound /></Link>
                  ) : (
                    <Link href="/sign-up">Get Started</Link>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default Header;
