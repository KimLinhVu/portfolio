import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
		<div className="w-[100vw] h-[100vh] bg-white">
			<Header />
      <Projects />
		</div>
	);
}
