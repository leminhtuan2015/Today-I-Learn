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
  
  
## gcloud CLI
 - https://cloud.google.com/sdk/gcloud/reference/
 
 - **gcloud config**
     ```sh
       gcloud config list
       gcloud config set project example.com:my-project
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


