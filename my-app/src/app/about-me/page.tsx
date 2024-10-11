"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Cat from "@/app/assets/catto.jpeg";
import Cat1 from "@/app/assets/catto2.jpeg";
import Cat2 from "@/app/assets/catto3.jpeg";
import fc from "@/app/assets/fc.jpg";
import hnin from "@/app/assets/hnin.jpeg";
import nee from "@/app/assets/nee.jpg";
import pm from "@/app/assets/pm.jpg";
import nd from "@/app/assets/nicdyl.jpg";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-500">
            <Card className="w-[1200px] p-5 bg-white dark:bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-500 m-10">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                        Hello! I am Jia Xin and I love CATS
                    </CardTitle>
                </CardHeader>
                <CardContent className="mt-4 flex flex-row justify-center">
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={Cat}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={Cat1}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={Cat2}
                        alt="1"
                        width={200}
                        height={200}
                    />
                </CardContent>
                <CardDescription className="text-xl text-center mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-500">
                    this is me on a daily basis...
                </CardDescription>
            </Card>

            <Card className="w-[1200px] p-5 bg-white dark:bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-500">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
                        I joined a CSP called HeartCode organised by these amazing people
                    </CardTitle>
                </CardHeader>
                <CardContent className="mt-4 flex flex-row justify-center">
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={fc}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={hnin}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={nee}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={pm}
                        alt="1"
                        width={200}
                        height={200}
                    />
                    <Image
                        className="rounded-lg shadow-lg transform hover:rotate-6 hover:scale-110 transition-transform duration-700 m-5"
                        src={nd}
                        alt="1"
                        width={200}
                        height={200}
                    />
                </CardContent>
                <CardDescription className="text-xl text-center mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-500">
                    😍😍😍😍😍😍
                </CardDescription>
            </Card>
        </div>
    );
}

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative border-2 border-gray-300 dark:border-gray-500">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 transition-all duration-500">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
