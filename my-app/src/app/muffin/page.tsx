"use client"
import Link from "next/link";
import Image from "next/image";
import muffinMorning from "@/app/assets/muffin1.jpeg"; // Replace with actual path to the morning image
import muffinAfternoon from "@/app/assets/muffin2.jpeg"; // Replace with actual path to the afternoon image
import muffinNight from "@/app/assets/muffin3.jpeg"; // Replace with actual path to the night image

export default function MuffinDay() {
    return (
        <div className="flex flex-col items-center space-y-16 py-12">
            {/* Morning Section */}
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-blue-500">Muffin in the Morning</h2>
                <div className="w-[300px] h-[300px] mt-4">
                    <Image src={muffinMorning} alt="Muffin in the morning" className="object-cover rounded-md w-full h-full" />
                </div>
                <p className="mt-4 text-xl">Muffin starts the day with a big stretch and a delicious breakfast!</p>
            </div>

            {/* Afternoon Section */}
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-yellow-500">Muffin in the Afternoon</h2>
                <div className="w-[300px] h-[300px] mt-4">
                    <Image src={muffinAfternoon} alt="Muffin in the afternoon" className="object-cover rounded-md w-full h-full" />
                </div>
                <p className="mt-4 text-xl">By afternoon, Muffin enjoys playing around and lounging in the sun.</p>
            </div>

            {/* Night Section */}
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-gray-500">Muffin at Night</h2>
                <div className="w-[300px] h-[300px] mt-4">
                    <Image src={muffinNight} alt="Muffin at night" className="object-cover rounded-md w-full h-full" />
                </div>
                <p className="mt-4 text-xl">As night falls, Muffin curls up and gets ready for a peaceful sleep.</p>
            </div>

            {/* Buttons Section: Display buttons side by side */}
            <div className="flex space-x-4">
                <Link href="/whiskers">
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Meet Whiskers
                    </button>
                </Link>

                <Link href="/">
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
