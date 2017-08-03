from __future__ import print_function
import keras
from keras import layers
from keras.datasets import mnist
from keras.models import Model
from keras import backend as K


def main():
    '''
    a cnn with no specified input shape (None, None, 1, )
    use GlobalPooling2D as sudo-flatten layer
    but of course, pooling has worse performance than flatten 
    '''
    batch_size = 128
    num_classes = 10
    # input image dimensions
    img_rows, img_cols = 28, 28
    # the data, shuffled and split between train and test sets
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train = x_train.reshape(x_train.shape[0], 28, 28, 1)
    x_test = x_test.reshape(x_test.shape[0], 28, 28, 1)
    x_train = x_train.astype('float32') / 255
    x_test = x_test.astype('float32') / 255
    y_train = keras.utils.to_categorical(y_train, 10)
    y_test = keras.utils.to_categorical(y_test, 10)
    print('x_train shape:', x_train.shape)
    print(x_train.shape[0], 'train samples')
    print(x_test.shape[0], 'test samples')

    # convert class vectors to binary class matrices
    in_layer = layers.Input(shape=(None, None,1))
    x = layers.Conv2D(32,(3,3), activation = 'relu')(in_layer)  
    x = layers.Conv2D(64,(3,3), activation = 'relu')(x)     
    x = layers.MaxPooling2D((2,2))(x) 
    x = layers.Dropout(0.25)(x) 
    # pseudo-dense 128 layer 
    x = layers.Conv2D(128,(3,3), activation = 'relu')(in_layer)  
    x = layers.Conv2D(256,(3,3), activation = 'relu')(x)     
    x = layers.MaxPooling2D((2,2))(x) 
    x = layers.Dropout(0.25)(x) 

    x = layers.GlobalMaxPooling2D()(x)  
    x = layers.Dropout(0.5)(x)
    output_layer = layers.Dense(10, activation = "softmax")(x) # softmax output
    model = Model(inputs = in_layer, outputs=output_layer)
    model.compile(optimizer=keras.optimizers.Adadelta(),
                loss=keras.losses.categorical_crossentropy,
                metrics=['accuracy'],
                loss_weights=None,
                sample_weight_mode=None, )
    for layer in model.layers:
        print(layer.name, layer.output_shape)
    model.fit(x_train, y_train,
            batch_size=batch_size,
            epochs=1,
            verbose=1,
            validation_data=(x_test, y_test))

    # score = model.evaluate(x_test, y_test, verbose=0)
    # print('Test loss:', score[0])
    # print('Test accuracy:', score[1])

if __name__=="__main__":
    main()
