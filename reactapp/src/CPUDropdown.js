import React, { useState } from "react";

const CPUDropdown = ({ cpuParts, onSelect }) => {
    const [selectedCpu, setSelectedCpu] = useState("");

    const handleCpuSelect = (value) => {
        const cpu = cpuParts.find(part => part.name === value);
        setSelectedCpu(value);
        if (cpu) {
            onSelect(cpu);
        } else {
            console.error(`No CPU found with the name: ${value}`);
        }
    }

    const selectedCpuDetails = cpuParts.find(part => part.name === selectedCpu);

    return (
        <div>
            <label htmlFor="cpuPartSelect">Select a CPU:</label>
            <input
                type="text"
                list="cpuList"
                id="cpuPartSelect"
                value={selectedCpu}
                onChange={(e) => handleCpuSelect(e.target.value)}
                placeholder="Search for a CPU..."
            />
            <datalist id="cpuList">
                {cpuParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

            {selectedCpuDetails && (
                <div className="cpu-details">
                    <h3>Selected CPU Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedCpuDetails.name}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Core Count:</strong> {selectedCpuDetails.core_count}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Core Clock (GHz):</strong> {selectedCpuDetails.core_clock}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Boost Clock (GHz):</strong> {selectedCpuDetails.boost_clock}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>TDP (W):</strong> {selectedCpuDetails.tdp}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Graphics:</strong> {selectedCpuDetails.graphics}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>SMT:</strong> {selectedCpuDetails.smt ? "Yes" : "No"}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Socket:</strong> {selectedCpuDetails.socket}</p>
                </div>
            )}
        </div>
    );
}

export default CPUDropdown;
