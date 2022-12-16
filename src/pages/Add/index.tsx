import React, { useState } from 'react';
// import { addCliente } from '../../store/clientes'
import { useDispatch } from 'react-redux'

export default function Add() {

	const dispatch = useDispatch()

	const [form, setForm] = useState({ username: '', password: ''})

	function formChange(e:any){
		setForm({...form, [e.target.name]: e.target.value })
	}

	function onSubmit(e: any) {
		e.preventDefault();

		// dispatch(addCliente(form))

		setForm({username: '', password: ''})
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Username</label>
				<input type="text" onChange={formChange} name="username" className="form-control" value={form.username} />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" onChange={formChange} name="password" className="form-control" value={form.password} />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}