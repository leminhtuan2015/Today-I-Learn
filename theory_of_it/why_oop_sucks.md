### Object Oriented Programming is Inherently Harmful
### Why OO sucks

----------------------------------

### Object Oriented Programming is Inherently Harmful

  - "Object-oriented programming is an exceptionally bad idea which could only have originated in California." – Edsger Dijkstra

  - "object-oriented design is the roman numerals of computing." – Rob Pike

  - "The phrase "object-oriented" means a lot of things. Half are obvious, and the other half are mistakes." – Paul Graham

  - "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function." – John Carmack

  - "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle." – Joe Armstrong

  - "I used to be enamored of object-oriented programming. I’m now finding myself leaning toward believing that it is a plot designed to destroy joy." – Eric Allman

  - Object-orientation suggest that each object is responsible for itself. However, objects often have many references to 
other objects around them, and these references need to be kept consistent. Sometimes this results in some serious management 
problems when it is not clear which objects can or may manipulate the state of another object. Also the creation and destruction 
of objects always falls under the responsibility of other objects. It is especially hard to define consistent semantics in
manipulating complex object structures.

### Why OO sucks

##### Objection 1 - Data structure and functions should not be bound together
  - Objects bind functions and data structures together in indivisible units. I think this is a fundamental error since functions and data structures belong in totally different worlds. Why is this?
    - Functions do things. They have inputs and outputs. The inputs and outputs are data structures, which get changed by the functions
    - Data structures just are. They don’t do anything. They are intrinsically declarative. “Understanding” a data structure is a lot easier than “understanding” a function.
    
##### Objection 2 - Everything has to be an object

 - Consider “time”. In an OO language “time” has to be an object. But in a non OO language a “time” is a instance of a data type. For example, in Erlang there are lots of different varieties of time, these can be clearly and unambiguously specified using type declarations, as follows:

-deftype day() = 1..31.
-deftype month() = 1..12.
-deftype year() = int().
-deftype hour() = 1..24.
-deftype minute() = 1..60.
-deftype second() = 1..60.
-deftype abstime() = {abstime, year(), month(), day(), hour(), min(), sec()}.
-deftype hms() = {hms, hour(), min(), sec()}.
...
 - Note that these definitions do not belong to any particular object. they are ubiquitous and data structures representing times can be manipulated by any function in the system.

 - There are no associated methods.
 
 
 ##### Objection 3 - Objects have private state
   - State is the root of all evil. In particular functions with **side effects** should be avoided
   - **Pure declarative languages** say that there is no state.
   - The "hide the state from the programmer" option chosen by OOPLs is the worse possible choice. Instead of revealing the state and trying to find ways to minimise the nuisance of state, they hide it away.
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
