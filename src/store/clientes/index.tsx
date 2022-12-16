const INITIAL_STATE = [
	{	
	id: 1,
	username: 'Admin',
	password: '123'
},
{
	id: 2,
	username: 'Admin2',
	password: '123'
},
{
	id: 3,
	username: 'Admin3',
	password: '123'
}
]

export default function reducer(state = INITIAL_STATE, action: any) {

if(action.type === 'ADD_CLIENTE'){
	return [...state, action.clientes ]
}

return state
}

// export const addCliente = (cliente: any) => {
// 	return (
// 		type: "ADD_CLIENTE",
// 		cliente
// 	)
// }