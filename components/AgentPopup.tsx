import React from 'react';

interface AgentPopupProps {
    agent: {
        id: number;
        name: string;
        status: 'thinking' | 'working' | 'inactive';
    };
    onClose: () => void;
    // Placeholder for additional props like updating agent details
}

const AgentPopup: React.FC<AgentPopupProps> = ({ agent, onClose }) => {
    return (
        <div className="agent-popup">
            <div className="popup-content">
                <h2>{agent.name}</h2>
                
                {/* Placeholder: Role Editing */}
                <div className="popup-section">
                    <label htmlFor="role">Role:</label>
                    <input
                        id="role"
                        type="text"
                        defaultValue={agent.name}
                        className="popup-input"
                    />
                    {/* Placeholder comment: Integrate functionality to save the role */}
                </div>

                {/* Placeholder: Status Display */}
                <div className="popup-section">
                    <p>Status: {agent.status}</p>
                    {/* Placeholder comment: Add controls to change status */}
                </div>

                {/* Placeholder: Instructions or Data Editing */}
                <div className="popup-section">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        id="instructions"
                        rows={4}
                        className="popup-textarea"
                        placeholder="Enter instructions for this agent..."
                    />
                    {/* Placeholder comment: Save functionality for instructions */}
                </div>

                <button onClick={onClose} className="close-popup-button">
                    Close
                </button>
            </div>
        </div>
    );
};

export default AgentPopup;
