import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useAutoScroll(chatMessages);

  function useAutoScroll(dependecies) {
    const containerRef = useRef(null);

    useEffect(() => {
      const containerElem = containerRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, [dependecies]);

    return containerRef;
  }

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ id, message, sender, time }) => {
        return (
          <ChatMessage message={message} sender={sender} key={id} time={time} />
        );
      })}
    </div>
  );
};

export default ChatMessages;
