import Image from "next/image";
import Link from "next/link";
import SpotifinderThumbnail from "../images/spotifinder.png"
import EcoPortalThumbnail from "../images/ecoportal.png"
import LandConThumbnail from "../images/landcon.png"
import ParstagramThumbnail from "../images/parstagram.png"
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
  const projects = [
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
			title: "Spotifinder",
			description:
				"A full stack web application where users can create profiles and receive Spotify playlist recommendations from other users based on location.",
			image: SpotifinderThumbnail,
			github: "https://github.com/KimLinhVu/Capstone-Project",
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
		<div className="flex flex-col py-20 px-[7rem] w-full">
			<h1 className="text-6xl text-black">Projects</h1>
			{/* Project Cards */}
			<div className="flex flex-wrap justify-between gap-y-10 mt-10">
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
		<div className="flex flex-col justify-between w-[450px] h-[450px] px-5 py-5 rounded-lg shadow-lg bg-slate-300">
			<div className="flex flex-col space-y-3">
				<div className="flex justify-between">
					<h2 className="text-4xl font-bold">{title}</h2>
					{github && (
						<Link href={github} rel="noopener noreferrer" target="_blank">
							<GitHubLogoIcon className="cursor-pointer w-10 h-10 hover:scale-[1.05] transition duration-300" />
						</Link>
					)}
				</div>
				<p className="text-xl">{description}</p>
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
