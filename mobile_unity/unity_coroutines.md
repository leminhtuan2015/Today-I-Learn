### Introduction
### What is Coroutine?
### Syntax
### How to Start and Stop Coroutine ?
### Optimization Coroutine


--------------------------------------------------------------------------------------

### Introduction
* http://www.unitygeek.com/coroutines-in-unity3d/

* Before jumping to Coroutines, let’s discuss why it is required ? and what makes it a powerful feature that can do wonder in unity.

* **Unity is frame based**
* Unity does things each frame.
* Many processes in games take place over the course of multiple frames
* Sometimes we got a dense process that takes a long time to finish, so during this time your game will run at low FPS(frames per second).
* So we have to find a way so that this process will not impact our game fps. One way is run this process on **another thread**, instead on the main thread.

* **But Unity is single threaded**
* Unity is single threaded. There is one main loop of Unity and all those functions that you write are being called by the same main thread in order. we can verify this by placing a while(true); in any of the game functions. It will freeze the whole thing, even the Unity editor.
* Another way is to break the work up into chunks that can be run one-per-frame, this is where Coroutines come very handy. Coroutines give us full control how we want to finish this task.

### What is Coroutine?

* **A Coroutine is a function** that allows pausing its own execution and resuming from the exact same point after a condition is met.

* This is the main difference between standard c# functions and Coroutine functions

* Typical function can return any type,whereas coroutines **must return an IEnumerator**, and we must use **“yield”** before **“return”**.

* Coroutines can be used for two reasons: asynchronous code and code that needs to compute over several frames.

* So basically coroutines help us to break work into multiple frames, you might be thinking this we can do using Update function. You are right, but we do not have any control over the Update function, whereas Coroutine code can be executed on demand or at a different frequency (eg. every 5 seconds instead of every frame).

* Coroutine is a function that allows pausing its own execution and resuming from the exact same point after a condition is met.
* It helps us to **divide the complex work to multiple frames** (eg. if we want to instantiate 100 of enemy prefab, it is better to do this in Coroutine)
* StartCoroutine() is used to start new Coroutine.
* StopCoroutine() is used to Stop Coroutine.
* Use yield return null instead of yield return 0.
* Always use IEnumerator based method to Start and Stop Coroutine.

### Syntax

* Whenever yield is reached,the execution is stoped and resumed later, depending on “yield” used


```c#
IEnumerator MyCoroutine()
{
  Debug.Log("Hello world");
  yield return null; //'yield' must be used before any "return";
}

yield return null – Resumes execution after All Update functions have been called, on the next frame

yield return new WaitForSeconds(t) – Resumes execution after (Approximately) t seconds

yield return new WaitForEndOfFrame() – Resumes execution after all cameras and GUI were rendered

yield return new WaitForFixedUpdate() – Resumes execution after all FixedUpdates have been called on all scripts

yield return new WWW(url) – Resumes execution after the web resource at URL was downloaded or failed.

```

### How to Start and Stop Coroutine ?

#### Start Coroutine
* There are two ways to start Coroutine, both using the StartCoroutine() function.

  * String Based : 
    * StartCoroutine(string nameoffunction) 
    * eg. StartCoroutine(“myCoroutine”)
    * String based are prone to error and this only works for coroutines that have no input parameters.
  * IEnumerator Based : 
    * StartCoroutine(IEnumerator e) 
    * eg. StartCoroutine(myCoroutine()) 
    * (IEnumerator based is recommended.)

#### Stop Coroutine

```c#
// declaring Coroutine variable
private IEnumerator myCO;
 
// Here we will start Coroutine
void Start()
{
   // saving the Coroutine reference
   myCO = MyCoroutine();
   StartCoroutine(myCO);
}
 
// Method to Stop Coroutine
void StopMyCoroutine()
{
 
 StopCoroutine(myCO);
 
}
```

### Optimization Coroutine

```c#
IEnumerator WaitCoroutine()
 
{
 
yield return new WaitForSeconds(0.5f);
 
// Call your Method here
 
}
````

* But every time you call this method “new WaitForSeconds(0.5f)” will allocate memory for the new object, which is not good.

* Instead, we should save its reference in Start, and use it when it is required, In this way, we will not allocate memory on every call.

```c#
WaitForSeconds wait;
 
void Start()
{
  wait = new WaitForSeconds(0.5f);
}
  
IEnumerator WaitCoroutine()
{
 
    yield return wait;
 
// Call your Method here
 
}
```






























