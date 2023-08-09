import React, { useState } from "react";

const MemoryDropdown = ({ memoryParts, onSelect }) => {  // Consider adding onSelect if needed in future
    const [selectedMemory, setSelectedMemory] = useState("");

    const handleMemorySelect = (value) => {
        const memory = memoryParts.find(part => part.name === value);
        setSelectedMemory(value);
        if (memory && typeof onSelect === 'function') {
            onSelect(memory);  // Passing entire memory object
        }
    }

    const selectedMemoryDetails = memoryParts.find(part => part.name === selectedMemory);

    return (
        <div>
            <label htmlFor="memoryPartSelect">Select Memory:</label>
            <input
                type="text"
                list="memoryList"
                id="memoryPartSelect"
                value={selectedMemory}
                onChange={(e) => setSelectedMemory(e.target.value)}
                placeholder="Search for a Memory..."
            />
            <datalist id="memoryList">
                {memoryParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

          
            {selectedMemoryDetails && (
                <div className="memory-details">
                    <h3>Selected Memory Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedMemoryDetails.name}</p>
                    
                    <p style={{ fontSize: "0.9em" }}><strong>Speed:</strong> DDR{selectedMemoryDetails.speed[1]} (PC{selectedMemoryDetails.speed[0]}-{selectedMemoryDetails.speed[1]})</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Modules:</strong> {selectedMemoryDetails.modules[0]} x {selectedMemoryDetails.modules[1]}GB</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Price Per GB:</strong> ${selectedMemoryDetails.price_per_gb}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Color:</strong> {selectedMemoryDetails.color}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>First Word Latency:</strong> {selectedMemoryDetails.first_word_latency}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>CAS Latency:</strong> {selectedMemoryDetails.cas_latency}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Type:</strong> {selectedMemoryDetails.ram}</p>
                </div>
            )}
        </div>
    );
};

export default MemoryDropdown;