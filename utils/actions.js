"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
	return await prisma.task.findMany({
		orderBy: {
			createAt: "desc",
		},
	});
};

export const createTask = async (formData) => {
	const content = formData.get("content");

	await prisma.task.create({
		data: {
			content,
		},
	});
	revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	const content = formData.get("content");
	const Task = z.object({
		content: z.string().min(5),
	});

	try {
		Task.parse({ content });
		await prisma.task.create({
			data: {
				content,
			},
		});
		revalidatePath("/tasks");

		return { message: "success" };
	} catch (error) {
		console.log(error);
		return { message: "error" };
	}
};

export const deleteTask = async (formData) => {
	const id = formData.get("id");

	await prisma.task.delete({
		where: { id },
	});

	revalidatePath("/tasks");
};

export const getTask = async (id) => {
	return await prisma.task.findUnique({
		where: {
			id,
		},
	});
};

export const updateTask = async (formData) => {
	const content = formData.get("content");
	const id = formData.get("id");
	const completed = formData.get("completed");
	const isCompleted = completed === "on" ? true : false;

	await prisma.task.update({
		where: {
			id,
		},
		data: { content, completed: isCompleted },
	});

	redirect("/tasks");
};
