import React, { useState } from "react";

const PSUDropdown = ({ psuParts }) => {
    const [selectedPSU, setSelectedPSU] = useState("");

    
    const selectedPSUDetails = psuParts.find(part => part.name === selectedPSU);

    return (
        <div>
            <label htmlFor="psuPartSelect">Select a PSU:</label>
            <input
                type="text"
                list="psuList"
                id="psuPartSelect"
                value={selectedPSU}
                onChange={(e) => setSelectedPSU(e.target.value)}
                placeholder="Search for a PSU..."
            />
            <datalist id="psuList">
                {psuParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

            
            {selectedPSUDetails && (
                <div className="psu-details">
                    <h3>Selected PSU Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedPSUDetails.name}</p>
                    
                    <p style={{ fontSize: "0.9em" }}><strong>Type:</strong> {selectedPSUDetails.type}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Efficiency:</strong> {selectedPSUDetails.efficiency}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Wattage:</strong> {selectedPSUDetails.wattage}W</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Modular:</strong> {selectedPSUDetails.modular}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Color:</strong> {selectedPSUDetails.color}</p>
                </div>
            )}
        </div>
    );
};

export default PSUDropdown;