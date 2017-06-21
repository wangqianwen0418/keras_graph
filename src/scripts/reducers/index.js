const initialState = {
  content: `from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation
from keras.optimizers import SGD

# Generate dummy data
import numpy as np
x_train = np.random.random((1000, 20))
y_train = keras.utils.to_categorical(np.random.randint(10, size=(1000, 1)), num_classes=10)
x_test = np.random.random((100, 20))
y_test = keras.utils.to_categorical(np.random.randint(10, size=(100, 1)), num_classes=10)

model = Sequential()
# Dense(64) is a fully-connected layer with 64 hidden units.
# in the first layer, you must specify the expected input data shape:
# here, 20-dimensional vectors.
model.add(Dense(64, activation='relu', input_dim=20))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(10, activation='softmax'))

sgd = SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
model.compile(loss='categorical_crossentropy',
              optimizer=sgd,
              metrics=['accuracy'])

model.fit(x_train, y_train,
          epochs=20,
          batch_size=128)
score = model.evaluate(x_test, y_test, batch_size=128)`
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
    let pars = layer.split('(')[2].replace(/\)/g,'')
    result.push({name, pars})
    // index+=1
  }

  return result

};
function reOrder(from, to, layers) {
    if (from==to) return layers
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
