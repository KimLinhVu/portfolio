"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
  return (
		<div className="flex items-center justify-between bg-white bg-opacity-50 backdrop-blur-md fixed w-full px-[50px] py-5 z-10">
			<a href="" className="font-bold text-[22px]">
				Kim-Linh Vu
			</a>
			<div className="flex gap-x-10 text-[22px] font-medium cursor-pointer">
				<NavLink id="about" name="About" />
				<NavLink id="projects" name="Projects" />
			</div>
		</div>
	);
}

const NavLink = ({id, name}) => {
  const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash === `#${id}`) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		};

    handleHashChange();
		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [id]);

  return (
		<a href={`#${id}`} className={`hover:opacity-75 ${isActive ? 'text-[#66a6b8]' : 'text-black'}`}>
			{name}
		</a>
	);
}