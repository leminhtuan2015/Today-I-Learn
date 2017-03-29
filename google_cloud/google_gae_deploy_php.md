## Deploy Web PHP

### Step 1: Create **app.yaml** file (`app.yaml` is the same `routing` file)

```yaml
    runtime: php55
    api_version: 1

    handlers:
    # Serve images as static resources.
    - url: /(.+\.(gif|png|jpg|js|css))$
      static_files: \1
      upload: .+\.(gif|png|jpg)$
      application_readable: true

    - url: /
      script: index.php

    - url: /admin/
      script: admin/index.php

    - url: /admin/control_panel.php
      script: admin/control_panel.php


    - url: /admin/index.php
      script: admin/index.php
```

### Step 2: Run project on Local

```sh
  #/usr/local/bin/dev_appserver.py
  
  dev_appserver.py app.yaml
```
### Step 3: Deploy PHP source to GAE

```sh
    cd PROJECT_SOURCE # Place contain app.yaml file
    
    gcloud app deploy [app.yaml] --project [PROJECT_ID] -v [YOUR_VERSION_ID]
    
    #gcloud app deploy cdxdnd/app.yaml --project b3ful68 -v v1
```

### Step 4: Import SQL file to GOOGLE SQL

### Step 5: Connect PHP GAE with GOOGLE SQL
  - Create Google SQL Instance
  - Connect To GOOGLE SQl
  
```php
  $link = mysql_connect(':/cloudsql/b3ful68:us-central1:ksmysql', 'root', '');
```
  - **NOTICE**: Althought you password of your MYSQ Server is `root` but ypu dont need to fill password in `mysql_connect` function
  - http://stackoverflow.com/questions/19980298/could-not-connect-to-google-cloud-sql-using-php-google-sdk
  - https://groups.google.com/forum/#!topic/google-appengine-stackoverflow/j-L8y38NbnQ

## BUGS
#### Python Crash
  - If python keep crash when deploy to GAE:
  - https://code.google.com/p/google-cloud-sdk/issues/detail?id=1168
  
  ```sh
    gcloud config set app/num_file_upload_processes 1
  ```

