import Image from "next/image";
import Link from "next/link";
import SpotifinderThumbnail from "../images/spotifinder.png"
import EcoPortalThumbnail from "../images/ecoportal.png"
import LandConThumbnail from "../images/landcon.png"
import ParstagramThumbnail from "../images/parstagram.png"
import BrokeBlessingsThumbnail from "../images/brokeblessings.png"
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
  const projects = [
		{
			title: "Broke Blessings",
			description:
				"An online website that allows users to manage and list free items, claim free items, and discover items through a feed and filter options.",
			image: BrokeBlessingsThumbnail,
			github: "https://github.com/vilinh/free-stuff",
		},
		{
			title: "Spotifinder",
			description:
				"A full stack web application where users can create profiles and receive Spotify playlist recommendations from other users based on location.",
			image: SpotifinderThumbnail,
			github: "https://github.com/KimLinhVu/Capstone-Project",
		},
		{
			title: "Ecologistics Portal",
			description:
				"A web portal that manages and streamlines transactions for non-profits under Ecologistics.",
			image: EcoPortalThumbnail,
			github: "https://github.com/hack4impact-calpoly/ecologistics-portal",
		},
		{
			title: "Land Conservancy",
			description:
				"A web volunteer management system for logging and rewarding volunteer contributions for helping local ecosystems.",
			image: LandConThumbnail,
			github: "https://github.com/hack4impact-calpoly/the-land-conservancy",
		},
		{
			title: "Parstagram",
			description:
				"An Instagram clone with a custom Parse backend that allows a user to post photos, view a global photos feed, and add comments.",
			image: ParstagramThumbnail,
			github: "https://github.com/KimLinhVu/ios-parstagram",
		},
	];

	return (
		<div id="projects" className="flex flex-col py-20 pl-[7rem] w-full">
			<h1 className="text-[60px] text-black font-black">Projects.</h1>
			{/* Project Cards */}
			<div className="flex flex-wrap gap-x-10 gap-y-10 mt-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
			</div>
		</div>
	);
}

const ProjectCard = ({ title, description, image, github }) => {
  return (
		<div className="flex flex-col justify-between w-[410px] h-[460px] px-5 py-5 rounded-lg shadow-lg bg-white">
			<div className="flex flex-col space-y-3">
				<div className="flex justify-between">
					<h2 className="text-[28px] uppercase tracking-[0.05em] font-bold">{title}</h2>
					{github && (
						<Link href={github} rel="noopener noreferrer" target="_blank">
							<GitHubLogoIcon className="cursor-pointer w-10 h-10 hover:scale-[1.05] transition duration-300" />
						</Link>
					)}
				</div>
				<p className="text-[1.2rem]">{description}</p>
			</div>

			<Image
				src={image}
				alt="Screenshot of project"
				className="rounded-md h-[225px]"
				width={500}
			/>
		</div>
	);
}
