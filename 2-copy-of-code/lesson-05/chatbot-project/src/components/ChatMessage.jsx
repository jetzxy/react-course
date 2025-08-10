import ROBOT_IMG from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import dayjs from 'dayjs';

const ChatMessage = ({ message, sender, time }) => {
  console.log(UserProfileImage);

  return (
    <div
      className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}
    >
      {sender === 'robot' && (
        <img src={ROBOT_IMG} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className="chat-message-time">{dayjs(time).format('h:mma')}</div>
        )}
      </div>

      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
};

export default ChatMessage;
