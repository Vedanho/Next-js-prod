import React from "react";
import prisma from "../../utils/db";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import TaskFormCustom from "../../components/TaskFormCustom";

const prismaHandlers = async (content) => {
	"use server";
	// await prisma.task.create({
	// 	data: {
	// 		content,
	// 	},
	// });

	const allTasks = await prisma.task.findMany({
		orderBy: {
			createAt: "desc",
		},
	});

	return allTasks;
};

const PrismaExamplePage = async () => {
	const tasks = await prismaHandlers("wake up");
	return (
		<div className="max-w-lg">
			<h1>PrismaExamplePage</h1>
			{/* <TaskFormCustom prismaHandlers={prismaHandlers} /> */}
			<ul className="mt-8 ">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="flex justify-between items-center px-6 py-4 mb-4 border-base-300 rounded-lg shadow-lg bg-slate-500"
					>
						<h2 className={`text-lg capitalize ${task.completed ? "line-through" : ""}`}>{task.content}</h2>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PrismaExamplePage;
