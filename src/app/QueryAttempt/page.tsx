import { db } from "@/db";
import { recipes } from "@/db/schema";
import React from "react";

const RandomComponent = async () => {
	const data = await db.select().from(recipes);
	console.log(data, "first query");
	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<p className='text-white'>some stuff </p>
		</>
	);
};

export default RandomComponent;
