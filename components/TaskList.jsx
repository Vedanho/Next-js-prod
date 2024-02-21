import React from "react";
import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "../utils/actions.js";

const TaskList = async () => {
	const tasks = await getAllTasks();

	if (!tasks.length) return <h2 className="mt-8 font-medium text-lg">There no tasks -_-</h2>;

	return (
		<ul className="mt-8 ">
			{tasks.map((task) => (
				<li
					key={task.id}
					className="flex justify-between items-center px-6 py-4 mb-4 border-base-300 rounded-lg shadow-lg bg-slate-500"
				>
					<h2 className={`text-lg capitalize ${task.completed ? "line-through" : ""}`}>{task.content}</h2>
					<div className="flex gap-6 item-center">
						<Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
							Edit
						</Link>
						<DeleteForm id={task.id} />
					</div>
				</li>
			))}
		</ul>
	);
};

export default TaskList;
