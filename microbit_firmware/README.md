The [moisture_basic_fw.js](https://github.com/di-unipi-socc/bonsaifog/blob/master/microbit_firmware/moisture_basic_fw.js) file contains the basic micro:bit firmware to read soil moisture on device. 

The [moisture_radio_serial_fw.js](https://github.com/di-unipi-socc/bonsaifog/blob/master/microbit_firmware/moisture_radio_serial_fw.js) file contains the firmware extended with radio transmission and serial writing of the sensed moisture.

Those files correspond to _Listing 1_ and _Listing 2_ of:

> [Antonio Brogi](http://pages.di.unipi.it/brogi), [Stefano Forti](http://pages.di.unipi.it/forti), [Ahmad Ibrahim](http://pages.di.unipi.it/ibrahim), [Luca Rinaldi](http://lucar.in) <br>
> **[Bonsai in the Fog: an Active Learning Lab with Fog Computing](http://pages.di.unipi.it/forti/pdf/conferences/2018/fmec18.pdf)** <br>
> in Proceedings of [3rd IEEE International Conference on Fog and Mobile Edge Computing (FMEC 2018)](http://emergingtechnet.org/FMEC2018/), <br>
> Barcelona, Spain, 2018.

The [dashboard_fw.js](https://github.com/di-unipi-socc/bonsaifog/blob/master/microbit_firmware/dashboard_fw.js) contains the code to run on the instructor's micro:bit, suitably extended with serial writing of the radio-received values.
