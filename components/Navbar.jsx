import Link from "next/link";
import React from "react";

const links = [
	{
		href: "/client",
		label: "client",
	},
	{
		href: "/drinks",
		label: "drinks",
	},
	{
		href: "/tasks",
		label: "tasks",
	},
	{
		href: "/query",
		label: "query",
	},
];

const Navbar = () => {
	return (
		<nav className="bg-base-300 py-4">
			<div className="nav px-8 max-w-6xl mx-auto flex-col sm:flex-row">
				<Link href="/" className="btn btn-primary">
					Next.js
				</Link>
				<ul className="menu menu-horizontal md:ml-8">
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link href={href} className="capitalize">{label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
