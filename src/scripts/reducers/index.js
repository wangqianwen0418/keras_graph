const initialState = {
  content: `from keras.models import Sequential

model = Sequential()

from keras.layers import Dense, Activation

model.add(Dense(units=64, input_dim=100))
model.add(Activation('relu'))
model.add(Dense(units=10))
model.add(Activation('softmax'))

model.compile(loss='categorical_crossentropy',
              optimizer='sgd',
              metrics=['accuracy'])

model.train_on_batch(x_batch, y_batch)`
}
const codeApp = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_GRAPH":
      return {content: action.content};
    case "CHANGE_CODE":
      return  {content: action.content};

    default:
      return state;
  }
};

export default codeApp;
