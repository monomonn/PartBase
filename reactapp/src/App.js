import React, { useState, useEffect } from "react";
import CpuDropdown from "./CPUDropdown";
import GPUDropdown from "./GPUDropdown";
import MotherboardDropdown from "./MotherboardDropdown";
import PSUDropdown from "./PSUDropdown";
import MemoryDropdown from "./MemoryDropdown";
import CaseDropdown from "./CaseDropdown";
import Header from "./components/Header.tsx";
import SubHeader from "./components/SubHeader.tsx";
import "./App.css";
import "./styles.css";

function App() {
    const [cpuParts, setCpuParts] = useState([]);
    const [gpuParts, setGpuParts] = useState([]);
    const [motherboardParts, setMotherboardParts] = useState([]);
    const [psuParts, setPsuParts] = useState([]);
    const [memoryParts, setMemoryParts] = useState([]);
    const [caseParts, setCaseParts] = useState([]);
    const [error, setError] = useState(null);

    const [selectedCpu, setSelectedCpu] = useState(null);
    const [selectedMotherboard, setSelectedMotherboard] = useState(null);
    const [selectedMemory, setSelectedMemory] = useState(null);

    const [isIncompatible, setIsIncompatible] = useState(false);
    const [compatibilityChecker, setCompatibilityChecker] = useState(true);

    const checkCompatibility = () => {
        if (!compatibilityChecker) return false;

        if (selectedCpu && selectedMotherboard && selectedCpu.socket !== selectedMotherboard.socket) {
            return true;
        }
        if (selectedMotherboard && selectedMemory && selectedMotherboard.ram !== selectedMemory.ram) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        setIsIncompatible(checkCompatibility());
    }, [selectedCpu, selectedMotherboard, selectedMemory, compatibilityChecker]);

    const fetchData = async (endpoint, setterFunction) => {
        try {
            const response = await fetch(`https://localhost:7268/api/pcparts/${endpoint}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setterFunction(data);
        } catch (error) {
            console.error(`Error fetching ${endpoint} parts:`, error);
            setError(`Failed to fetch ${endpoint} parts.`);
        }
    };

    useEffect(() => {
        fetchData("cpu", setCpuParts);
        fetchData("gpu", setGpuParts);
        fetchData("motherboard", setMotherboardParts);
        fetchData("psu", setPsuParts);
        fetchData("memory", setMemoryParts);
        fetchData("case", setCaseParts);
    }, []);

    return (
        <div className="App">
            <Header />
            <SubHeader />
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    checked={compatibilityChecker}
                    onChange={(e) => setCompatibilityChecker(e.target.checked)}
                />
                <label>Compatibility Checker</label>
            </div>
            <div className={`warning-message ${isIncompatible ? 'show-warning' : ''}`}>
                Selection incompatible! </div>
            {error && <div className="error-message">{error}</div>}
            <div className="dropdown-container">
                <CpuDropdown cpuParts={cpuParts} onSelect={setSelectedCpu} />
                <GPUDropdown gpuParts={gpuParts} />
                <PSUDropdown psuParts={psuParts} />
                <MotherboardDropdown motherboardParts={motherboardParts} onSelect={setSelectedMotherboard} />
                <CaseDropdown caseParts={caseParts} />
                <MemoryDropdown memoryParts={memoryParts} onSelect={setSelectedMemory} />
            </div>
            
         </div>
       
    );
}

export default App;