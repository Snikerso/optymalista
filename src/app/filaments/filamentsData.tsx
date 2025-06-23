interface PrintStudioOption {
  name: PrintStudioOptionName;
  category: PrintStudioCategory;
  description: string;
  value: string;
}

enum PrintStudioCategory {
  Print = "Print",
  Support = "Support",
  Adhesion = "Adhesion",
  Wall = "Wall",
}

enum PrintStudioOptionName {
  LayerHeight = "Layer Height",
  InfillDensity = "Infill Density",
  PrintTemperature = "Print Temperature",
  BedTemperature = "Bed Temperature",
  PrintSpeed = "Print Speed",
  Support = "Support",
  AdhesionType = "Adhesion Type",
  WallLineCount = "Wall Line Count",
  TopBottomLayers = "Top/Bottom Layers",
  FanSpeed = "Fan Speed",
}

export const bambuStudioOptions: PrintStudioOption[] = [
  {
    name: PrintStudioOptionName.LayerHeight,
    description: "Wysokość warstwy druku. Wpływa na jakość i czas druku.",
    value: "0.2mm",
    category: PrintStudioCategory.Print,
  },
  {
    name: PrintStudioOptionName.InfillDensity,
    description: "Procent wypełnienia wewnętrznego modelu.",
    value: "15%",
    category: PrintStudioCategory.Print,
  },
  {
    name: PrintStudioOptionName.PrintTemperature,
    description: "Temperatura dyszy podczas druku.",
    value: "200°C",
    category: PrintStudioCategory.Print,
  },
  {
    name: PrintStudioOptionName.BedTemperature,
    description: "Temperatura stołu grzewczego.",
    value: "60°C",
    category: PrintStudioCategory.Print,
  },
  {
    name: PrintStudioOptionName.PrintSpeed,
    description: "Prędkość drukowania.",
    value: "60mm/s",
    category: PrintStudioCategory.Print,
  },
  {
    name: PrintStudioOptionName.Support,
    description: "Typ podpór dla przewieszonych elementów.",
    value: "None",
    category: PrintStudioCategory.Support,
  },
  {
    name: PrintStudioOptionName.AdhesionType,
    description: "Typ przyczepności do stołu (brim, raft, skirt).",
    value: "Skirt",
    category: PrintStudioCategory.Adhesion,
  },
  {
    name: PrintStudioOptionName.WallLineCount,
    description: "Liczba linii ścian zewnętrznych.",
    value: "3",
    category: PrintStudioCategory.Wall,
  },
  {
    name: PrintStudioOptionName.TopBottomLayers,
    description: "Liczba warstw górnych i dolnych.",
    value: "6",
    category: PrintStudioCategory.Wall,
  },
  {
    name: PrintStudioOptionName.FanSpeed,
    description: "Prędkość wentylatora chłodzącego.",
    value: "100%",
    category: PrintStudioCategory.Print,
  },
];
