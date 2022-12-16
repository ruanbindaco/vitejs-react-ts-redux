import React from 'react';
import Cliente from '../../components/Cliente';
import { useSelector } from 'react-redux'


export default function List() {
	const clientes: any = useSelector(state => state.clientes)
	console.log(clientes)
	return (
		<div>
			<div className="row">{clientes.map((cliente: any, index: any) => <Cliente key={index} cliente={cliente} />)}</div>
		</div>
	);
}