"use client";
import { useState, useEffect } from "react";

export default function NewsTicker({ newsItems, direction = "horizontal", speed = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(newsItems);
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, speed);

        return () => clearInterval(interval);
    }, [newsItems, speed]);

    return (
        <div
            className={`relative overflow-hidden ${direction === "vertical" ? "h-12" : "w-full"
                } bg-[#111927] text-white p-2 rounded-md`}
        >
            <div
                className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"
                    } items-center`}
                style={{
                    transform:
                        direction === "vertical"
                            ? `translateY(+${currentIndex * 100}%)`
                            : `translateX(+${currentIndex * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                }}
            >
                {newsItems.map((item, index) => (
                    <div key={index} className={`${direction === "vertical" ? "h-12" : "w-full" } flex-shrink-0 flex items-center justify-center text-white px-4`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
