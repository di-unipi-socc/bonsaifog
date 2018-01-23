![Bonsai](./img/logo.png)

BonsaiFog is an _active learning_ activity to introduce Fog computing to CS students. To design it, we took inspiration from the following use case:

_A bonsai greenhouse company planning to employ a software solution to monitor and visualise soil moisture of their cultivation._

The activity is a two-hours hands-on session designed to 

* _reinforce learning_ on Fog computing, showing the difference between IoT+Edge, IoT+Cloud and Fog deployment models for IoT apps, in a positive and supportive teaching environment (exploiting constructivist
teaching methods),
* have a _quick learning curve_, only requiring students familiarity with high-level programming languages, and
* feature _limited cost_ (i.e., hundreds of euro), possibly being cross-platform with respect to students' operating systems.

To achieve these goals, we created a lifelike scenario that can be incremented step-by-step to show all different deployment models (viz., IoT+Edge, IoT+Cloud and Fog). 


To set up the experimental IoT testbed capable of monitoring moisture of the plants growing in the greenhouse, we employed [micro:bits](http://microbit.org), cheap and easy-to-use embedded systems that can be programmed in JavaScript. JavaScript has also been used for implementing a gateway module.

# Testbed

Below we show the testbed we implemented for the purposes of the _active learning_ practical.

![testbed](./img/testbed.png)