import React from "react";

type ButtonProps = {
	title: string;
	onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
	const { title, onClick } = props;
	return (
		<div onClick={onClick} className='flex justify-center items-center p-4'>
			{title}
		</div>
	);
};
