import React from "react";
import prisma from "../../utils/db";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

const prismaHandlers = async (content) => {
	"use server";
	await prisma.task.create({
		data: {
			content,
		},
	});

	const allTasks = await prisma.task.findMany({
		orderBy: {
			createAt: "desc",
		},
	});

	return allTasks;
};

const prismaDeleteHandler = async (id) => {
	"use server";
	await prisma.task.delete({
		where: {
			id,
		},
	});
};

const PrismaExamplePage = async () => {
	const tasks = await prismaHandlers("wake up");
	return (
		<div className="max-w-lg">
			<h1>PrismaExamplePage</h1>
			<TaskFormCustom prismaHandlers={prismaHandlers} />
			<TaskList tasks={tasks} deleteFunc={prismaDeleteHandler} />
		</div>
	);
};

export default PrismaExamplePage;
