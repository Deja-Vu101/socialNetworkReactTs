import { ChatMessageType } from "../../types/types";

interface OwnProps{
	message: ChatMessageType
}

const Message: React.FC<OwnProps> = ({message : {message, photo, userId, userName}}) => {
	return ( 
		<>
		<div>
			<img src={photo} alt="photo" />
			{userName}
		</div>
		<div>{message}</div>
		</>
	 );
}
 
export default Message;