### React Native Flux
### Should I Use Flux?

--------------------------------------------------------------

### React Native Flux

* IOS native (Swift) use **MVC** design pattern
  * Model - User, Books, ... (Create by dev)
  * View - XML Storyboard file
  * Controller - UIViewController
  
* Android native (Java) use **MVC** design pattern
  * Model - User, Books, ... (Create by dev)
  * View - XML Layout files
  * Controller - Activity

#### FLUX architecture
* Flux is a concept of an architecture
* Each Mobile app framework have it own design, React Native Javascript application should use **FLUX** design pattern
* Flux is an **architecture** for creating **data layers (Model layer)** in JavaScript applications
* In React Native application we should apply **flux** design pattern
* Flux is a pattern for managing data flow in your application
* The **Flux application architecture** is the new paradigm for handling data within applications, developed as an alternative to traditional **Model-View-Controller (MVC)** architectures

#### REDUX library
* Redux is an implementation library for data handling in client applications that was inspired by Flux. 
* Redux implemented on the ideas of Flux
* Redux is one of the most common implementation of Flux

### FLUX

* Flux Parts
  * Dispatcher
  * Store
  * Action
  * View
  
### Should I Use Flux?

* If your application deals with **dynamic data** then yes, **you should probably use Flux**.

* If your application is just static views that don't share state, and you never save nor update data, **then no, Flux won't give you any benefit**.
