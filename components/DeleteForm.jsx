"use client"
import React from "react";
import { deleteTask } from "../utils/actions";
import { useFormStatus } from "react-dom";

const SubmitHandler = () => {
	const { pending } = useFormStatus();

	return (
		<button className="btn btn-xs btn-error" disabled={pending}>
			{pending ? "please wait" : "delete"}
		</button>
	);
};

const DeleteForm = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type="hidden" name="id" value={id} />
			<SubmitHandler />
		</form>
	);
};

export default DeleteForm;