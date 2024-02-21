"use client";
import React, { useEffect } from "react";
import { createTaskCustom } from "../utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
	message: null,
};

const RenderBtn = () => {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="btn btn-primary join-item" disabled={pending}>
			{pending ? "please wait" : "create task"}
		</button>
	);
};

const TaskFormCustom = () => {
	const [state, formAction] = useFormState(createTaskCustom, initialState);

	useEffect(() => {
		if (state.message == "error") toast.error(state.message);

		if (state.message == "success") toast.success("task created");
	}, [state]);

	return (
		<form action={formAction}>
			{/* {state.message ? <p>{state.message}</p> : null} */}
			<div className="join w-full">
				<input
					type="text"
					className="input input-bordered join-item w-full"
					placeholder="type here"
					name="content"
					required
				/>
				<RenderBtn />
			</div>
		</form>
	);
};

export default TaskFormCustom;
