import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
	weight: "400", // 400 weight
	style: "italic", // italic face
	subsets: ["latin"],
});

export const LandingPage = () => {
	return (
		<div className='flex relative justify-center  h-screen w-full items-center'>
			<div className='absolute z-[-1] top-[-206px]  bg-[url(https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] transform rotate-90 bg-center bg-no-repeat bg-cover w-[900px] h-dvh' />
			<div className='flex flex-col '>
				<p className={`${ubuntu.className}  text-black text-8xl leading-5`}>
					Fam
				</p>
				<p className={`${ubuntu.className}  text-black text-8xl pl-[11px]`}>
					Recipes
				</p>
			</div>
		</div>
	);
};
