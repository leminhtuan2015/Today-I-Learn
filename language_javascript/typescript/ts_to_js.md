### Convert TypeScript into JavaScript

--------------------------------------------------

### Convert TypeScript into JavaScript

* Step 1: ```npm install -g typescript```
* Step 2: Create one file `person.ts`

```js
class Person {
    age: number

    constructor(age: number) {
        this.age = age;
      }
    
    say(message: string) {
        console.log(message)
    }
}

let x = new Person(30)

x.say("Hello, I am a person!, and I am " + x.age)
```

* Convert .ts file to .js

```
tsc person.ts
```

* Run .js file

```
node person.js
```
