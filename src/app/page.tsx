import Image from "next/image";
import RandomComponent from "./QueryAttempt/page";
import { LandingPage } from "@/LandingPage/page";

export default function Home() {
	return (
		<div className='font-[family-name:var(--font-geist-sans)]'>
			{/* <RandomComponent /> */}
			<LandingPage />
		</div>
	);
}
