import '../static/Message.css';

const Message = ({name, message}) => {
	return (
		<div className="message">
			<span>{name}: </span>
			<p>{message}</p>
		</div>
	)
}

export default Message;
