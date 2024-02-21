import React, { Fragment } from "react";
import { getTask } from "../../../utils/actions";
import EditForm from "../../../components/EditForm";
import Link from "next/link";

const TaskPage = async ({ params: { id } }) => {
	const task = await getTask(id);

	return (
		<Fragment>
			<div className="mb-16">
				<Link href="/tasks" className="btn btn-accent">
					Back to tasks
				</Link>
			</div>
			<EditForm task={task} />
		</Fragment>
	);
};

export default TaskPage;
