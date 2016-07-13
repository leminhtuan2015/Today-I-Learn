# Google Cloud

## Google Cloud SDK
- https://cloud.google.com/sdk/docs/
- **Google Cloud SDK** is a set of tools that you can use to manage resources and applications hosted on Google Cloud Platform.
- These tools include:
  - **gcloud** command-line tool
  - **gsutil**
  - **bq**

## gcloud
- gcloud is a part of the **Google Cloud SDK**
- **gcloud** is a tool that provides the primary command-line interface to Google Cloud Platform
- For example, you can use gcloud to create and manage:
  - **Google Compute Engine** virtual machine instances and other resources
  - **Google Cloud SQL instances**
  - **Google Cloud Deployment manager deployments** (use gcloud to **deploy App Engine applications** and perform other tasks).
  
##Setup gcloud at first time.
  ```sh
    # Login in the Google Cloud Account
    gcloud auth login
    
    # Setup Account, Project
    gcloud init
  ```
  
- Choose the account.
- Pick cloud project.
  
## gcloud CLI
 - https://cloud.google.com/sdk/gcloud/reference/
 
 - **gcloud config**
    ```sh
      # Show current account, project
      gcloud config list

      # Change current App engine project
      gcloud config set [project PROJECT_ID]
    ```
 
 - **gcloud app**: Manage your App Engine app. 
    ```sh
      gcloud app versions list
    ```
 - **gcloud compute**: Read and manipulate Google Compute Engine resources.
    ```sh
      gcloud compute instances list
    ```
 
 - **gcloud projects**: Manage your projects.
    ```sh
      gcloud projects list
    ```
 
 - **gcloud sql**: Manage Cloud SQL databases.

# Google Cloud SDK VS Google App Engine SDK (GAE)

##Google Cloud CLI:
  - gcloud
  - gsutil
  - bq
  
## Google App Engine CLI
  - dev_appserver.sh    //Run Jetty (Java Web Servlet Container ~ Tomcat) - run **war** folder
  - appcfg.sh           // Deploy **war** folder to **Google App Engile**
  - google_sql.sh
  - run_java
  - endpoints.sh

## gcloud VS appcfg.sh

### Get list of versions

- appcfg.sh: Manager one app at WEB-INF/appengine-web.xml
- gcloud : Manager one app at the its config.

  ```sh 
    gcloud config list
  ```

  ```sh
    cd path/to/GAE/project
    appcfg.sh -A [PROJECT_ID] list_versions war
    
    #=> return all version of this project
  ```
  
  ```sh
    gcloud app versions list
      
    #=>  return all version of curent project
  ```
