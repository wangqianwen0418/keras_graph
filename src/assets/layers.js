export const COLORS = [
'#87f7cf',
'#f7f494',
'#72ccff',
'#f7c5a0',
'#fc97af',
'#d4a4eb',
'#d2f5a6',
'#76f2f2',
];
export const LAYERS = [
  "core",
  "convolutional",
  "pooling",
  "locally-connected",
  "recurrent",
  "embedding",
  "merge",
  "advanced_acti",
  "normalization",
  "noise",
  "own"
];

export const ALL_LAYERS = [
  'Input',
  'Output',
  'Dense',
  'Activation',
  'Dropout',
  'Faltten',
  'Reshape',
  'Permute',
  'RepeatVector',
  'Lambda',
  'ActivityRegularization',
  'Masking',
  'Conv1D',
  'Conv2D',
  'Conv3D',
  'MaxPooling2D',
  'Flatten',
  'Cropping1D',
  'Cropping2D',
  'Cropping3D',
  'LocallyConnected1D',
  'LocallyConnected2D',
  'Recurrent',
  'SimpleRNN',
  'GRU',
  'Embedding'
]; //not finished yet, it is so boring!!!!!
export const getLayerColor = layer => {
  let index = ALL_LAYERS.indexOf(layer)%COLORS.length;
  return COLORS[index];
};
