## Deploy Web PHP

### Step 1: Create **app.yaml** file (`app.yaml` is the same `routing` file)

```yaml
    application: b3ful68
    version: cdxdnd-v1

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

### Step 4: Import SQL file to GOOGLE SQL

### Step 5: Connect PHP GAE with GOOGLE SQL 

