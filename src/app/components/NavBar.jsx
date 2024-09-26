
export default function NavBar() {
  return (
		<div className="flex items-center justify-between bg-white bg-opacity-50 backdrop-blur-md fixed w-full px-[50px] py-5 z-10">
			<a href="" className="font-bold text-[18px]">Kim-Linh Vu</a>
			<div className="flex gap-x-10 text-[18px] font-medium cursor-pointer">
				<a href="#about" className="hover:opacity-75">
					About
				</a>
				<a href="#projects" className="hover:opacity-75">
					Projects
				</a>
			</div>
		</div>
	);
}