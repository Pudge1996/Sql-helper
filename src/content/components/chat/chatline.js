const ChatLine = ({ role, message }) => {
  const GPTRoleStryleMap = {
    user: 'bubble-right',
    system: 'bubble-center',
    assistant: 'bubble-left',
  }
  const bubbleClass = GPTRoleStryleMap[role];
  return (
    <div className={`bubble ${bubbleClass}`}>
      <p className={`bubble-name ${role !== 'assistant' ? 'hidden' : ''} `}>SQL-Helper</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatLine;
