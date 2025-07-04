"use client";

import { useState } from "react";

interface FilamentProfile {
  name: string;
  brand: string;
  color?: string;
  material: string;
  settings: {
    layerHeight: string;
    infillDensity: string;
    printTemperature: string;
    bedTemperature: string;
    printSpeed: string;
    support: string;
    adhesionType: string;
    wallLineCount: string;
    topBottomLayers: string;
    fanSpeed: string;
  };
  notes?: string;
}

const myFilaments: FilamentProfile[] = [
  {
    name: "Protoplasta Iron",
    brand: "Protoplasta",
    color: "Metallic Gray",
    material: "PLA with Iron Particles",
    settings: {
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
    notes: "Heavy filament with metallic finish. Can be post-processed with magnets. Requires slower print speeds."
  }
];

const MyFilaments = () => {
  const [selectedFilament, setSelectedFilament] = useState<FilamentProfile | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detailed'>('list');

  return (
    <div className="w-full p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Filaments</h1>
        <p className="text-gray-600">Manage your 3D printing filament collection and settings</p>
      </div>

      <div className="mb-6 flex gap-4 items-center">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'list' 
                ? 'bg-white shadow-sm text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'detailed' 
                ? 'bg-white shadow-sm text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Detailed View
          </button>
        </div>
        
        <div className="ml-auto text-sm text-gray-500">
          {myFilaments.length} filament{myFilaments.length !== 1 ? 's' : ''} in collection
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myFilaments.map((filament, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{filament.name}</h3>
                  <p className="text-gray-600">{filament.brand}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {filament.material}
                </span>
              </div>
              
              {filament.color && (
                <div className="mb-3">
                  <span className="text-sm text-gray-500">Color: </span>
                  <span className="text-sm font-medium">{filament.color}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500">Print Temp:</span>
                  <span className="ml-1 font-mono">{filament.settings.printTemperature}</span>
                </div>
                <div>
                  <span className="text-gray-500">Bed Temp:</span>
                  <span className="ml-1 font-mono">{filament.settings.bedTemperature}</span>
                </div>
                <div>
                  <span className="text-gray-500">Layer Height:</span>
                  <span className="ml-1 font-mono">{filament.settings.layerHeight}</span>
                </div>
                <div>
                  <span className="text-gray-500">Speed:</span>
                  <span className="ml-1 font-mono">{filament.settings.printSpeed}</span>
                </div>
              </div>

              {filament.notes && (
                <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-700">
                  <strong>Notes:</strong> {filament.notes}
                </div>
              )}

              <button
                onClick={() => setSelectedFilament(filament)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View All Settings
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {myFilaments.map((filament, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{filament.name}</h3>
                  <p className="text-gray-600 text-lg">{filament.brand}</p>
                  {filament.color && (
                    <p className="text-sm text-gray-500 mt-1">Color: {filament.color}</p>
                  )}
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {filament.material}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(filament.settings).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-1">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <span className="text-lg font-mono text-gray-900">{value}</span>
                  </div>
                ))}
              </div>

              {filament.notes && (
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800 mb-2">Notes</h4>
                  <p className="text-yellow-700">{filament.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selectedFilament && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold">{selectedFilament.name}</h3>
                <p className="text-gray-600">{selectedFilament.brand}</p>
              </div>
              <button
                onClick={() => setSelectedFilament(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(selectedFilament.settings).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-3 rounded">
                  <h4 className="font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h4>
                  <span className="text-lg font-mono">{value}</span>
                </div>
              ))}
            </div>

            {selectedFilament.notes && (
              <div className="mt-4 p-4 bg-yellow-50 rounded">
                <h4 className="font-medium text-yellow-800 mb-2">Notes</h4>
                <p className="text-yellow-700">{selectedFilament.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFilaments;
