"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
	return (
		<div className="flex flex-row items-center py-10 px-[7rem] bg-white h-[65%]">
			<div className="flex flex-col gap-y-8">
				<div className="flex flex-col text-[85px] leading-tight text-black font-black">
					<h1>Hi, I am</h1>
					<h1 className="text-[#167EB8]">Kim-Linh.</h1>
				</div>
				<p className="flex gap-x-2.5 text-[30px] font-semibold tracking-wide text-black">
					I am a
					<span className="text-blue-800">
						<Typewriter
							words={["CS Student.", " Software Engineer.", " Full Stack Developer.", " Mobile Developer."]}
							loop={false}
							cursor
							cursorStyle="_"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</p>
			</div>
		</div>
	);
}
