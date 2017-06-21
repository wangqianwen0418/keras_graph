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
export const ALL_LAYERS = {
  Dense: 0,
  Activation: 1,
  Dropout: 2,
  Faltten: 2,
  Reshape: 0,
  Permute: 0,
  RepeatVector: 0,
  Lambda: 0,
  ActivityRegularization: 0,
  Masking: 0,
  Conv1D: 1,
  Conv2D: 1,
  Conv3D: 1,
  Cropping1D: 1,
  Cropping2D: 1,
  Cropping3D: 1,
  LocallyConnected1D: 2,
  LocallyConnected2D: 2,
  Recurrent: 3,
  SimpleRNN: 3,
  GRU: 3,
  Embedding: 4,
}; //continue later, it is so boring!!!!!

export const getLayerColor = layer => {
  let index = ALL_LAYERS[layer];
  return COLORS[index];
};
