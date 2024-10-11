"use client"
import Link from "next/link";
import Image from "next/image";
import whiskersMorning from "@/app/assets/dcat.jpeg"; // Replace with actual path to the morning image
import whiskersAfternoon from "@/app/assets/dcat1.jpeg"; // Replace with actual path to the afternoon image
import whiskersNight from "@/app/assets/dcat2.jpeg"; // Replace with actual path to the night image

export default function WhiskersPage() {
    return (
        <div className="py-12 flex flex-col items-center space-y-16">
            {/* Cards Container: Flexbox for side by side layout */}
            <div className="flex justify-center space-x-8">
                {/* Morning Card */}
                <div className="flex flex-col items-center max-w-sm w-full p-6 border border-gray-200 rounded-lg shadow-lg">
                    <Image 
                        src={whiskersMorning} 
                        alt="Whiskers in the morning" 
                        className="w-full h-[300px] object-cover rounded-md" 
                    />
                    <h2 className="mt-4 text-2xl font-bold text-blue-500">Whiskers in the Morning</h2>
                    <p className="mt-2 text-xl text-white-700">
                        Whiskers starts taking drugs
                    </p>
                </div>

                {/* Afternoon Card */}
                <div className="flex flex-col items-center max-w-sm w-full p-6 border border-gray-200 rounded-lg shadow-lg">
                    <Image 
                        src={whiskersAfternoon} 
                        alt="Whiskers in the afternoon" 
                        className="w-full h-[300px] object-cover rounded-md" 
                    />
                    <h2 className="mt-4 text-2xl font-bold text-yellow-500">Whiskers in the Afternoon</h2>
                    <p className="mt-2 text-xl text-white-700">
                        By afternoon, Whiskers continues taking drugs
                    </p>
                </div>

                {/* Night Card */}
                <div className="flex flex-col items-center max-w-sm w-full p-6 border border-gray-200 rounded-lg shadow-lg">
                    <Image 
                        src={whiskersNight} 
                        alt="Whiskers at night" 
                        className="w-full h-[300px] object-cover rounded-md" 
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-500">Whiskers at Night</h2>
                    <p className="mt-2 text-xl text-white-700">
                        As night falls, Whiskers is still taking drugs
                    </p>
                </div>
            </div>

            <div className="flex space-x-4">
                <Link href="/muffin">
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Meet Muffin
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
