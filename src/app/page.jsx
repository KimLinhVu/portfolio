import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

export default function Home() {
  return (
		<div className="w-[100vw] h-[100vh] bg-white">
			<Header />
      <Intro />
      <Projects />
		</div>
	);
}
