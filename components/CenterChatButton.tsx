import React from 'react';

const CenterChatButton: React.FC = () => {
    const handleChatClick = () => {
        // Placeholder for opening the chat window
        console.log('Chat button clicked');
    };

    return (
        <button className="center-chat-button" onClick={handleChatClick}>
            Start Chat
        </button>
    );
};

export default CenterChatButton;
