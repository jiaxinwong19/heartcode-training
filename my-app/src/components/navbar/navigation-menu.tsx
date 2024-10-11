
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "@/app/about-me/page";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export function NavigationBar() {
    return (
        <NavigationMenu className="list-none min-w-full h-16 sticky top-0 flex flex-row justify-between p-5">
            <div className="flex flex-row">
                <NavigationMenuItem>
                    <Link href="/cat" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-me" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
            <div className="flex flex-row">
                <div className="mr-5">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <div >
                    <ModeToggle />
                </div>
            </div>
        </NavigationMenu>
    )
}
