## How to import file mysql.spl to Google SQL?

### Step 1:
  - Goto Google SQL
  - Create an instance
  - Config Authorized networks (To make you can conect to Google SQL from Mysql on your local machine)
    - Check your IP (https://www.whatismyip.com/)
    - Add your IP to make you can access from your local machine
    
### Step 2:
  - Get the IPv4 of your Google SQL instance (in Properties of your instance)

### Step 3
  - Connect to your Google SQL instance from your Local machine
  
```sh
  mysql -h [GOOGLE_SQL_INSTANCE_IP] -u root
  
  mysql -h 104.199.162.25 -u root
```

### Step 4
  - Import file .sql
  
```
mysql -h 104.199.162.25 -u root
show databases;
create database [DATABASE_NAME];

mysql -h 104.199.162.25 -u root [DATABASE_NAME] < path/to/file.sql
```

## Gcloud SQL

### Get info of SQL instance

```sh
  gcloud sql instances describe [INSTANCE_NAME]
```

### Authorize Connect From **local machine** to **Google cloud SQL**
  - https://cloud.google.com/sql/docs/mysql-client
  - Make your local machine can access to **Google cloud SQl**
  - GO TO THE CLOUD SQL INSTANCES PAGE > Access control > Authorization >  Authorized networks > click Add network 
  
```
  define('DB_HOST', '146.148.88.114' );  // 146.148.88.114 is IP of Google cloud SQL Instance
  define('DB_NAME', 'b3ful');
  define('DB_USER', 'root');
  define('DB_PASSWORD', '');
```

### Authorize Connect From **Google App Engine** to **Google cloud SQL**
  - https://cloud.google.com/sql/docs/app-engine-connect
  - Make your **Google App Engine** can access **Google cloud SQL**
  
```
  gcloud sql instances patch [SQL_INSTANCE_NAME] --authorized-gae-apps [GAE_APP_ID]

```
