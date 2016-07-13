# GAE SDK
GAE give us some tool to interact with server Google
  - appcfg.sh
  - dev_appserver.sh
  - endpoints.sh
  - google_sql.sh
  - run_java
  
## appcfg.sh

- https://cloud.google.com/appengine/docs/java/tools/appcfg-arguments
- List cli:

  ```sh
  appcfg.sh -A APP_ID list_versions war
  ```
  
  ```sh
  appcfg.sh -A audio18-68 -V web --enable_jar_splitting update war
  ```
  
  ```
  appcfg.sh -A audio18-68 -V web --enable_jar_splitting set_default_version war
  ```

## dev_appserver.sh
- https://cloud.google.com/appengine/docs/java/tools/devserver
- Run Jetty(the same Tomcat server) server container.

  ```sh
  cd path/to/gae/project
  dev_appserver.sh -p 9999 war
  ```
