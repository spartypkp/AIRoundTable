import React, { useState } from 'react';
import AgentIcon from './components/AgentIcon';
import CenterChatButton from './components/CenterChatButton';
import AgentPopup from './components/AgentPopup';

const App: React.FC = () => {
    // Placeholder state for agents, could expand with more details like role, status, etc.
    const [agents, setAgents] = useState([
        { id: 1, name: 'Agent A', status: 'thinking' },
        { id: 2, name: 'Agent B', status: 'inactive' },
        { id: 3, name: 'Agent C', status: 'working' },
    ]);

    // State to manage the selected agent for showing popups
    const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

    // Handler for adding a new agent (to be implemented)
    const addNewAgent = () => {
        // Placeholder function for adding a new agent
        // setAgents([...agents, { id: agents.length + 1, name: `Agent ${agents.length + 1}`, status: 'inactive' }]);
    };

    return (
        <div className="app-container">
            <div className="table-container">
                {/* Map over agents to display them around the "table" */}
                {agents.map(agent => (
                    <AgentIcon
                        key={agent.id}
                        agent={agent}
                        isSelected={selectedAgent === agent.id}
                        onClick={() => setSelectedAgent(agent.id)}
                    />
                ))}

                {/* Central chat button */}
                <CenterChatButton />

                {/* Placeholder for adding new agent feature */}
                {/* <button onClick={addNewAgent} className="add-agent-button">
                    + Add New Agent
                </button> */}

                {/* Conditional rendering for agent popups */}
                {selectedAgent && (
    <div className="popup-overlay">
        <AgentPopup 
            agent={agents.find(a => a.id === selectedAgent)!} 
            onClose={() => setSelectedAgent(null)} 
        />
    </div>
)}
            </div>
        </div>
    );
};

export default App;
