import { useState, useEffect } from 'react';

import Message from './Message';
import api from '../api/chats';
import '../static/Container.css';

const Container = () => {
	const [chats, setChats] = useState([]);
	useEffect(() => {
		async function fetchChats() {
			const resp = await api.getChats();
			setChats(resp);
		}
		fetchChats();
	},[setChats])
	return (
		<div className="container">
			{
				chats.map((chat) => {
					return (
						<Message 
							key={chat.id} 
							name={chat.name}
							message={chat.message}
						/>
					)
				})
			}
		</div>
	)
}
export default Container;
