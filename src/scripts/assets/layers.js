export const COLORS = [
'#1f78b4',
'#b2df8a',
'#33a02c',
'#fb9a99',
'#e31a1c',
'#fdbf6f',
'#ff7f00',
'#cab2d6',
'#6a3d9a',
'#ffff99'
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
  Activation: 0,
  Dropout: 0,
  Faltten: 0,
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
