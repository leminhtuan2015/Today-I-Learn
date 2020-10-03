### Flutter VS React Native

---------------------------------------------------------------------------

### Flutter VS React Native

#### Stateful Components and Stateless Components

* Widgets are same to components in React Native. 
* Flutter comes with a large number of ready-to-use widgets, most of which implement the material design concepts. 
* There are two types of widgets, **stateless widgets**, and **stateful widgets**, just like **functional components** and **class components** in React.
  * **stateless widgets** = **functional components**
  * **stateful widgets** = **class components**
  
#### **Stateful Components / Class Components**

*  Class Components focus on manage state and have life cycle methods like constructor(), render() , componentDidMount()

```js
class Main extends Component {
 constructor() {
   super()
   this.state = {
     books: []
   }
 }
 render() {
   <BooksList books={this.state.books} />
 }
}
```

#### **Stateless Components / Functional Components**

* Pure Functional components focus on rendering the UI rather than behaviour. They simply accept props and return valid JSX element.

```js
const BooksList = ({books}) => {
 return (
   <ul>
     {books.map(book => {
       return <li>book</li>
     })}
   </ul>
 )
}
```
