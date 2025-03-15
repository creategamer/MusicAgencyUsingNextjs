"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
        title: "Collaborative Music Creation",
        description:
            "Join hands with fellow musicians to create masterpieces in real time. Our platform allows seamless collaboration, enabling you to work on compositions, share ideas, and perfect your craft together. Enhance your musical journey with teamwork that hits all the right notes.",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-semibold">
                Collaborative Music Creation
            </div>
        ),
    },
    {
        title: "Real-Time Performance",
        description:
            "Experience the thrill of real-time changes as you perform. Our platform captures every note, every beat, and every adjustment instantly. Keep your music fresh and engaging with live updates that reflect your creative process.",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-cyan-200 to-emerald-700 flex items-center justify-center text-white text-2xl font-semibold">
                Real-Time Performance
            </div>
        ),
    },
    {
        title: "Music Version Control",
        description:
            "Never lose track of your musical creations. With our version control, every change is recorded, so you can revisit previous versions or keep evolving your tracks. Stay organized and focus on what you do best—making music.",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-2xl font-semibold">
                Music Version Control
            </div>
        ),
    },
    {
        title: "Limitless Creativity",
        description:
            "Your creativity knows no bounds. Our platform ensures that you never run out of space or inspiration to create. With limitless possibilities, keep exploring new horizons and pushing the boundaries of your musical talent.",
        content: (
            <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-semibold">
                Limitless Creativity
            </div>
        ),
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}

export default WhyChooseUs
