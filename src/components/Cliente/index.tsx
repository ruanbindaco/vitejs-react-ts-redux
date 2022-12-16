import React from 'react';

import './styles.css';

export default function Cliente({ cliente }: any) {
	return (
		<div>
			<div className="card">
				<div>
					<h2>ID: {cliente.id} </h2>
					Username: {cliente.username} <br />
					Password: {cliente.password}</div>
			</div>
			<hr></hr>
		</div>
	);
}