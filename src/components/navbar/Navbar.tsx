import React from "react";
import Link from "next/link";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
	weight: "700", // 400 weight
	style: "italic", // italic face
	subsets: ["latin"],
});

export const Navbar = () => {
	return (
		<div className='flex p-4 items-center justify-between bg-amber-50 '>
			<p className={` ${ubuntu.className} text-black text-lg`}>fam Recipes</p>
			<div className='flex flex-row gap-x-3 '>
				<Link
					href='/Login'
					className='text-black bg-amber-600 py-2 px-4 rounded-md '
				>
					Login
				</Link>

				<Link
					href='/AboutMe'
					className='text-black bg-amber-600 py-2 px-4 rounded-md'
				>
					Sign Up
				</Link>
			</div>
		</div>
	);
};
