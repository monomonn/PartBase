import React, { useState } from "react";

const MotherboardDropdown = ({ motherboardParts, onSelect }) => {
    const [selectedMotherboard, setSelectedMotherboard] = useState("");

    const handleMotherboardSelect = (value) => {
        const mb = motherboardParts.find(part => part.name === value);
        setSelectedMotherboard(value);
        if (mb) {
            onSelect(mb);  // Updated to pass the entire motherboard object, not just the RAM type
        }
    }

    const selectedMotherboardDetails = motherboardParts.find(part => part.name === selectedMotherboard);

    return (
        <div>
            <label htmlFor="motherboardPartSelect">Select a Motherboard:</label>
            <input
                type="text"
                list="motherboardList"
                id="motherboardPartSelect"
                value={selectedMotherboard}
                onChange={(e) => {
                    setSelectedMotherboard(e.target.value);
                    handleMotherboardSelect(e.target.value);
                }}
                placeholder="Search for a Motherboard..."
            />
            <datalist id="motherboardList">
                {motherboardParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

            
            {selectedMotherboardDetails && (
                <div className="motherboard-details">
                    <h3>Selected Motherboard Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedMotherboardDetails.name}</p>
                    
                    <p style={{ fontSize: "0.9em" }}><strong>Socket:</strong> {selectedMotherboardDetails.socket}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Form Factor:</strong> {selectedMotherboardDetails.form_factor}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Max Memory (GB):</strong> {selectedMotherboardDetails.max_memory}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Memory Slots:</strong> {selectedMotherboardDetails.memory_slots}</p>
                    <p style={{fontSize: "0.9em"}}><strong>Color:</strong> {selectedMotherboardDetails.color}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>RAM Type:</strong> {selectedMotherboardDetails.ram}</p>
                </div>
            )}
        </div>
    );
};

export default MotherboardDropdown;