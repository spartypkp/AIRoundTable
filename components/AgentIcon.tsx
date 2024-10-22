import React from 'react';

interface AgentIconProps {
    agent: {
        id: number;
        name: string;
        status: 'thinking' | 'working' | 'inactive';
    };
    isSelected: boolean;
    onClick: () => void;
}

const AgentIcon: React.FC<AgentIconProps> = ({ agent, isSelected, onClick }) => {
    // Placeholder for status-based classes/styles
    const statusClass = agent.status === 'thinking' ? 'agent-thinking' :
                        agent.status === 'working' ? 'agent-working' : 'agent-inactive';

    return (
        <div className={`agent-icon ${statusClass} ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div className="agent-details">
                <h3>{agent.name}</h3>
                {/* Placeholder comment: Add status indicators like animated dots */}
            </div>
            {/* Placeholder comment: Add hover effects here */}
        </div>
    );
};

export default AgentIcon;
