### React Native Flux
### Should I Use Flux?
### Flux vs Redux
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
* Flux = **MVVM** design pattern
* Flux is a concept of an architecture
* Each Mobile app framework have it own design, React Native Javascript application should use **FLUX** design pattern
* Flux is an **architecture** for creating **data layers (Model layer)** in JavaScript applications
* In React Native application we should apply **flux** design pattern
* Flux is a pattern for managing data flow in your application
* The **Flux application architecture** is the new paradigm for handling data within applications, developed as an alternative to traditional **Model-View-Controller (MVC)** architectures

#### FLUX Parts
* Dispatcher
* Store
* Action
* View

#### REDUX library
* Redux is an implementation library for data handling in client applications that was inspired by Flux. 
* Redux implemented on the ideas of Flux
* Redux is one of the most common implementation of Flux


### Should I Use Flux?
* First of all, it is totally possible to write apps with React without Flux.

* If your application deals with **dynamic data** then yes, **you should probably use Flux**.

* If your application is just static views that don't share state, and you never save nor update data, **then no, Flux won't give you any benefit**.

* How do you passing data from this screen to other screen? In **IOS native/Android native**, you are easy to pass object between **ViewController/Activity** but in React Native we have to use **Flux** to pass data (state) between screens.


### Flux vs Redux
*  Redux does not have a dispatcher.It relies on pure functions called reducers. It does not need a dispatcher. Each actions are handled by one or more reducers to update the single store. Since data is immutable, reducers returns a new updated state that updates the store


