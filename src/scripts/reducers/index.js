const initialState = {
  content: `from keras.models import Sequential

model = Sequential()

from keras.layers import Dense, Activation
model = Sequential([
    Dense(32, input_shape=(784,)),
    Activation('relu'),
    Dense(10),
    Activation('softmax'),
])
model.add(Dense(units=64, input_dim=100))
model.add(Activation('relu'))
model.add(Dense(units=10))
model.add(Activation('softmax'))

model.compile(loss='categorical_crossentropy',
              optimizer='sgd',
              metrics=['accuracy'])

model.train_on_batch(x_batch, y_batch)`
}

initialState.layers = getLayers(initialState.content)


const codeApp = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_GRAPH":
      return {content: action.content};
    case "CHANGE_CODE":
      return  {
        content: action.content,
        layers: getLayers(action.content)
      };
    case "MOVE_LAYERS":
      return  {
        content: state.content,
        layers: reOrder(action.from, action.to, state.layers)
      };

    default:
      return state;
  }
};

function getLayers (content) {
  let addReg = /model\.add\(([^)]+)\)\)/g;
  let seqReg = /Sequential\(\[(^}\]+)\]\)/;
  let arr;
  let result = [];
  if((arr = seqReg.exec(content))!== null){
    let layers = arr[0]
  } 
  // let index = 0
  while ((arr = addReg.exec(content)) !== null) {
    // result.push(content[arr.index]);
    let layer = arr[0].split('add')[1]
    let name = layer.split('(')[1]
    let pars = layer.split('(')[2]
    result.push({name, pars})
    // index+=1
  }

  return result

};
function reOrder(from, to, layers) {
    let len = layers.length
    to = Math.max(0, (to>=len)?len-1:to)
    let newLayers = layers.splice(0)
    let temp = newLayers[to]
    newLayers[to] = newLayers[from]
    newLayers[from] = temp
    console.info(from, to, newLayers)
    return newLayers
}
export default codeApp;
