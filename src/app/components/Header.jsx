"use client";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
	return (
		<div className="flex items-center py-10 px-[7rem] bg-white h-[65%]">
			<div className="flex flex-col gap-y-8">
				<div className="flex flex-col text-[80px] leading-tight text-black font-black">
					<h1>Hi, I am</h1>
					<h1 className="text-blue-800">Kim-Linh.</h1>
				</div>
				<div className="flex gap-x-7 items-center">
					<button className="font-semibold text-white text-[20px] bg-black rounded-[15px] transform transition-transform hover:scale-105 py-3 px-4">
						My Resume
					</button>
					<Link
						href="https://github.com/KimLinhVu"
						rel="noopener noreferrer"
						target="_blank"
					>
						<GitHubLogoIcon className="cursor-pointer w-10 h-10 hover:scale-[1.10] transition duration-300" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/kim-linh-vu-a97816197/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<LinkedInLogoIcon className="cursor-pointer w-10 h-10 hover:scale-[1.10] transition duration-300" />
					</Link>
				</div>
				<p className="flex gap-x-2.5 text-[30px] font-semibold tracking-wide text-black">
					I am a
					<span className="text-blue-800">
						<Typewriter
							words={[
								"CS Student.",
								" Software Engineer.",
								" Full Stack Developer.",
								" Mobile Developer.",
							]}
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
