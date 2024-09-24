import Image from "next/image";

export default function Projects() {
	return (
		<div className="flex flex-col py-20 px-20 h-[65%] w-full">
			<h1 className="text-6xl text-black">Projects</h1>
			{/* Project Cards */}
			<div className="flex flex-wrap gap-x-4 mt-10">
				<div className="w-[500px] h-[450px] p-4 bg-slate-400">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
						iste minus ab placeat ex, eligendi veritatis reiciendis quisquam
						ratione laborum esse accusantium nihil dicta vel debitis laboriosam
						necessitatibus unde est.
					</p>

					<Image
						src="/images/my-image.jpg" // Path to your image (stored in the 'public' folder)
						alt="A description of the image"
						width={500} // Set width
						height={300} // Set height
					/>
				</div>
			</div>
		</div>
	);
}
