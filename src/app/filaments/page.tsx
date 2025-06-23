"use client";

import { useState } from "react";
import { bambuStudioOptions } from "./filamentsData";

const filamentPresets = {
  "BambuLab PLA Basic": {
    layerHeight: "0.2mm",
    infillDensity: "15%",
    printTemperature: "200°C",
    bedTemperature: "60°C",
    printSpeed: "60mm/s",
    support: "None",
    adhesionType: "Skirt",
    wallLineCount: "3",
    topBottomLayers: "6",
    fanSpeed: "100%",
  },
  "Protoplasta Iron": {
    layerHeight: "0.15mm",
    infillDensity: "20%",
    printTemperature: "210°C",
    bedTemperature: "65°C",
    printSpeed: "50mm/s",
    support: "Tree",
    adhesionType: "Brim",
    wallLineCount: "4",
    topBottomLayers: "8",
    fanSpeed: "80%",
  },
};

const PrinterOptions = () => {
  const [selectedPreset1, setSelectedPreset1] = useState("BambuLab PLA Basic");
  const [selectedPreset2, setSelectedPreset2] = useState("Protoplasta Iron");

  const getPresetValue = (preset: string, optionName: string) => {
    const presetData = filamentPresets[preset as keyof typeof filamentPresets];
    return presetData[optionName as keyof typeof presetData] || "N/A";
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-6">
        Porównanie ustawień filamentów
      </h2>

      <div className="mb-6 flex gap-4">
        <select
          className="p-2 border rounded"
          value={selectedPreset1}
          onChange={(e) => setSelectedPreset1(e.target.value)}
        >
          {Object.keys(filamentPresets).map((preset) => (
            <option key={preset} value={preset}>
              {preset}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={selectedPreset2}
          onChange={(e) => setSelectedPreset2(e.target.value)}
        >
          {Object.keys(filamentPresets).map((preset) => (
            <option key={preset} value={preset}>
              {preset}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bambuStudioOptions.map((option, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{option.name}</h3>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {option.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">{option.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">{selectedPreset1}</p>
                <span className="font-mono text-lg">
                  {getPresetValue(
                    selectedPreset1,
                    option.name.toLowerCase().replace(/\s+/g, "")
                  )}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{selectedPreset2}</p>
                <span className="font-mono text-lg">
                  {getPresetValue(
                    selectedPreset2,
                    option.name.toLowerCase().replace(/\s+/g, "")
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinterOptions;
