"use client"
import { useState, useEffect } from 'react';
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";  // Import Link from Next.js
import cat1 from "@/app/assets/cat.jpeg";
import cat2 from "@/app/assets/dcat.jpeg"; // Assuming you have another cat image
console.log('Clerk Publishable Key:', process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);

export default function Home() {
    const words: string[] = ["meet muffin & whiskers"];
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the fade-in effect on mount
    }, []);

    return (
        <div className="flex flex-col items-center space-y-8"> {/* Add space between child divs */}
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl">
                    <FlipWords words={words} />
                </h1>
            </div>

            {/* Fade-in effect container */}
            <div className={`flex flex-col items-center transition-opacity duration-9000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-3xl font-bold">Muffin does not abuse drugs <span style={{color: "red"}}>BUT</span> Whiskers does</h1>
                <p>choose to be <span style={{color: "lightblue"}}>Muffin</span> OR <span style={{color: "lightcoral"}}>Whiskers</span></p>
            </div>

            {/* Images Inline with Animation and Links */}
            <div className="flex justify-center space-x-8 mt-8">
                <Link href="/muffin"> {/* Add Link to Muffin's page */}
                    <div className="animate-pulse w-[400px] h-[400px] text-center">
                        <Image src={cat1} alt="Cat 1" className="object-cover rounded-md w-full h-full" />
                        <p className="mt-2">Muffin</p> {/* Text below the image */}
                    </div>
                </Link>
                
                <Link href="/whiskers"> {/* Add Link to Whiskers' page */}
                    <div className="animate-pulse w-[400px] h-[400px] text-center">
                        <Image src={cat2} alt="Cat 2" className="object-cover rounded-md w-full h-full" />
                        <p className="mt-2">Whiskers</p> {/* Text below the image */}
                    </div>
                </Link>
            </div>
        </div>
    );
}
