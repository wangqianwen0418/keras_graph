from __future__ import print_function
import keras
from keras import layers
from keras.datasets import mnist
from keras.models import Model
from keras import backend as K

def main():
    '''
    a cnn with no specified input shape (None, None, 1, )
    use GlobalAveragePooling1D as sudo-flatten layer
    '''
    batch_size = 128
    num_classes = 10
    # input image dimensions
    img_rows, img_cols = 28, 28
    # the data, shuffled and split between train and test sets
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train = x_train.reshape(x_train.shape[0] ,28,28,1)
    x_test = x_test.reshape(x_test.shape[0] ,28,28,1)
    x_train = x_train.astype('float32')/255
    x_test = x_test.astype('float32')/255
    y_train = keras.utils.to_categorical(y_train, 10)
    y_test = keras.utils.to_categorical(y_test, 10)
    print('x_train shape:', x_train.shape)
    print(x_train.shape[0], 'train samples')
    print(x_test.shape[0], 'test samples')

    # convert class vectors to binary class matrices
    Input_0_0 = layers.Input(
        shape=(None, None, 1, ), dtype="float32",  name='Input_0_0')
    Conv2D_1_0 = layers.Conv2D(filters=32, kernel_size=(
        3, 3),  name='Conv2D_1_0')(Input_0_0)
    Conv2D_2_0 = layers.Conv2D(filters=64, kernel_size=(
        3, 3),  name='Conv2D_2_0')(Conv2D_1_0)
    MaxPooling2D_3_0 = layers.MaxPooling2D(
        pool_size=(2, 2),  name='MaxPooling2D_3_0')(Conv2D_2_0)
    # Flatten_4_0 = layers.Flatten(name='Flatten_4_0')(MaxPooling2D_3_0)
    MaxPooling2D_3_0 = layers.GlobalAveragePooling2D()(MaxPooling2D_3_0)  
    Dropout_5_0 = layers.Dropout(rate=0.25,  name='Dropout_5_0')(MaxPooling2D_3_0)
    Dense_6_0 = layers.Dense(units=128, activation="relu",
                            name='Dense_6_0')(Dropout_5_0)
    Dropout_7_0 = layers.Dropout(rate=0.5,  name='Dropout_7_0')(Dense_6_0)
    Dense_8_0 = layers.Dense(units= 10, activation="softmax",
                            name='Dense_8_0')(Dropout_7_0)
    model = Model(inputs=[Input_0_0], outputs=[Dense_8_0])
    model.compile(optimizer=keras.optimizers.Adadelta(),
                loss=keras.losses.categorical_crossentropy,
                metrics=['accuracy'],
                loss_weights=None,
                sample_weight_mode=None, )
    for layer in model.layers:
        print(layer.name, layer.output_shape)
    model.fit(x_train, y_train,
            batch_size=batch_size,
            epochs=epochs,
            verbose=1,
            validation_data=(x_test, y_test))

    # score = model.evaluate(x_test, y_test, verbose=0)
    # print('Test loss:', score[0])
    # print('Test accuracy:', score[1])

if __name__=="__main__":
    main()
