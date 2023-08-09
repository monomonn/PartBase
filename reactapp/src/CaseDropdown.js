import React, { useState } from "react";

const CaseDropdown = ({ caseParts }) => {
    const [selectedCase, setSelectedCase] = useState("");
    const selectedCaseDetails = caseParts.find(part => part.name === selectedCase);

    return (
        <div>
            <label htmlFor="casePartSelect">Select a Case:</label>
            <input
                type="text"
                list="caseList"
                id="casePartSelect"
                value={selectedCase}
                onChange={(e) => setSelectedCase(e.target.value)}
                placeholder="Search for a Case..."
            />
            <datalist id="caseList">
                {caseParts.map((part) => (
                    <option key={part.name} value={part.name} />
                ))}
            </datalist>

           
            {selectedCaseDetails && (
                <div className="case-details">
                    <h3>Selected Case Details:</h3>
                    <p style={{ fontSize: "0.9em" }}><strong>Name:</strong> {selectedCaseDetails.name}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Price:</strong> ${selectedCaseDetails.price}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Type:</strong> {selectedCaseDetails.type}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Color:</strong> {selectedCaseDetails.color}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>PSU Included:</strong> {selectedCaseDetails.psu ? selectedCaseDetails.psu : "None"}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Side Panel:</strong> {selectedCaseDetails.side_panel}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>External 5.25" Bays:</strong> {selectedCaseDetails.external_525_bays}</p>
                    <p style={{ fontSize: "0.9em" }}><strong>Internal 3.5" Bays:</strong> {selectedCaseDetails.internal_35_bays}</p>
                </div>
            )}
        </div>
    );
};

export default CaseDropdown;