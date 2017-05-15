## Threading

- Swift have 2 kind of thread
  - 1: Main thread (for UI, for tasks...)
  - 2: Background thread (for tasks, longtime tasks, can NOT for UI)
  
- You just only update UI at **MAIN** thread, You can NOT update UI at the **BACKGROUND** thread

- When you use **MAIN** thread for a longtime-task (read, wite file, query, request server) => UI will be not active (đơ máy)

## Coding
```swift

  DispatchQueue.global(qos: .background).async {
    // Create a background thread and execute longtime-tasks // 
      self.copyDatabaseFiles()
      self.createTables()
      self.unzipDatabase()

      DispatchQueue.main.async {
      // After done all tasks at background thread => come back to main thread
          Drop.upAll()
          if self.activityIndicatorView != nil {
              Indicator.stop(activityIndicatorView: self.activityIndicatorView!)
          }
      }
  }

 // Other way (with libs) ----------------------------------------------------
      
  Async.background {
  // Create a background thread and execute longtime-tasks // 
      self.copyDatabaseFiles()
      self.createTables()
      self.unzipDatabase()

  }.main {
  // After done all tasks at background thread => come back to main thread
      progressView.remove()
      Drop.upAll()
      Indicator.stop(activityIndicatorView: activityIndicatorView)
  }

```
