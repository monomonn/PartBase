import React, { useState } from "react";

const GPUDropdown = ({ gpuParts }) => {
    const [selectedGpu, setSelectedGpu] = useState("");

   
    const selectedGpuDetails = gpuParts.find(part => part.name === selectedGpu);

    return (
        <div>
            <label htmlFor="gpuPartSelect">Select a GPU:</label>
            <input
                type="text"
                list="gpuList"
                id="gpuPartSelect"
                value={selectedGpu}
                onChange={(e) => setSelectedGpu(e.target.value)}
                placeholder="Search for a GPU..."
            />
            <datalist id="gpuList">
                {gpuParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

           
            {selectedGpuDetails && (
                <div className="gpu-details">
                    <h3>Selected GPU Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedGpuDetails.name}</p>
                    
                    <p style={{ fontSize: "0.9em" }}><strong>Chipset:</strong> {selectedGpuDetails.chipset}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Memory (GB):</strong> {selectedGpuDetails.memory}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Core Clock (MHz):</strong> {selectedGpuDetails.core_clock}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Boost Clock (MHz):</strong> {selectedGpuDetails.boost_clock}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Color:</strong> {selectedGpuDetails.color}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Length (mm):</strong> {selectedGpuDetails.length}</p>
                </div>
            )}
        </div>
    );
};

export default GPUDropdown;