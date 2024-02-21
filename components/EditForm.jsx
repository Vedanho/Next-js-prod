import React from "react";
import { updateTask } from "../utils/actions";

const EditForm = ({ task }) => {
	const { id, content, completed } = task;

	return (
		<form action={updateTask} className="max-w-sm p-12 border-base-300 rounded-lg">
			<div>
				<input type="hidden" name="id" value={id} />
				<input
					type="text"
					name="content"
					required
					defaultValue={content}
					className="input input-bordered w-full"
				/>
				<div className="form-control my-4">
					<label htmlFor="completed" className="label cursor-pointer">
						<span className="label-text">Completed</span>
						<input
							type="checkbox"
							name="completed"
							id="completed"
							defaultChecked={completed}
							className="checkbox checkbox-primary checkbox-sm"
						/>
					</label>
				</div>
				<button type="submit" className="btn btn-primary btn-block btn-sm">
					Update tusk
				</button>
			</div>
		</form>
	);
};

export default EditForm;
