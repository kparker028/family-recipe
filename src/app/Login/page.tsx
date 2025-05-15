const Login = async ({ params }: { params: { slug: string } }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				padding: "24px 36px",
				rowGap: "12px",
			}}
		>
			<p className='text-white'>this will be a login</p>
		</div>
	);
};

export default Login;
