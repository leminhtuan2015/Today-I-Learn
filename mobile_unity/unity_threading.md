### Threading in Unity

---------------------------------------------------------------

### Threading in Unity

* https://answers.unity.com/questions/180243/threading-in-unity.html

* Unity is **`NOT` support multiple thread**

* Unity's Api is NOT thread safe so it can't be used from another thread. Unity have also implemented a thread-check to prevent you from trying to use it from another thread

* The scripting environment is just plain and simple .NET / Mono so if you really want to start a new thread, read into the C# docs.

* You can use your own threads for calculating something in the background or communicate with a native code plugin but not to interact with Unity.

* Coroutines implement an cooperative multitasking system and they aren't invented by Unity. Unity uses .NET / Mono Generators to implement them. If you're interested in how they work see this post.

* As already mentioned Instantiate is an atomic operation (can't be divided into smaller parts) so it runs until it's done. If it loads a really huge thing there's no way to speed it up.

* If you have Unity pro you could place the stuff you need into a seperate scene and load this with Unity's own background loading thread by using Application.LoadLevelAdditiveAsync. This allows you to load it in the background, but it's much slower than the straight-forward functions because it's designed to keep the framerate at an acceptable level.
