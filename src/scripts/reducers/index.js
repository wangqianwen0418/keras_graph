const initialState = {
  content: `from keras.models import Sequential
from keras.layers import Dense, Activation
model = Sequential([
            Dense(32, input_shape=(784,)),
            Activation('relu'),
            Dense(10),
            Activation('softmax'),
        ])`
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
