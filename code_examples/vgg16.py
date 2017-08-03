from __future__ import print_function
import keras
import numpy as np
from keras.applications.vgg16 import VGG16
from keras.models import Model
from keras import backend as K

model = VGG16(weights='imagenet', include_top=True)
# inp = model.input                                           # input placeholder
# outputs = [layer.output for layer in model.layers]          # all layer outputs
# functors = [K.function([inp]+ [K.learning_phase()], [out]) for out in outputs]  # evaluation functions

# # Testing
# test = np.random.random(input_shape)[np.newaxis,...]
# layer_outs = [func([test, 1.]) for func in functors]
# print(layer_outs)

for layer in model.layers:
    print(layer.get_weights())