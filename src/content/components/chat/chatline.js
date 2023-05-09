const ChatGPTAgent = ['user', 'system', 'assistant'];

const ChatLine = ({ role, message }) => {
  let bubbleClass = '';
  switch (role) {
    case 'user':
      bubbleClass = 'bubble-right';
      break;
    case 'system':
      bubbleClass = 'bubble-center';
      break;
    case 'assistant':
      bubbleClass = '';
      break;
  }
  return (
    <div className={`bubble ${bubbleClass}`}>
      <p className={`bubble-name ${role != 'assistant' ? 'hidden' : ''} `}>SQL-Helper</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatLine;
