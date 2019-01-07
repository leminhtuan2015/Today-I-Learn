

### Recursive Serialization is not supported

```sh
Recursive Serialization is not supported. You can't dereference a PPtr while loading. (Constructors of C# classes may not load objects either. See stacktrace.)
UnityEngine.GUIUtility:ProcessEvent(Int32, IntPtr)

Error building Player: Recursive Serialization is not supported. You can't dereference a PPtr while loading. (Constructors of C# classes may not load objects either. See stacktrace.)

```

* This error when in you script have

```c#
[System.Serializable]
public class Choice {
    public int identification;
    public int lineId;
    public int score;
    public string content;

    public List<Line> lines; // Contain Line
}

[System.Serializable]
public class Line {
    public string _id;
    public int identification;
    public int episodeId;
    public int storyId;

    public List<Choice> choices; // Contain Choice
}

//Class Choice contain Serializable Line and class Line contain Serializable choice

```

* To resolve this issue => You have to remove  `[System.Serializable]` at one class









