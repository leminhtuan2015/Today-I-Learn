### Export Mysql Database
### Import Mysql Database

------------------------------------------------

### Export Mysql Database

* -u : Username
* -h : Host
* -p : Path (Database Name)
* --no-data : Export without data

```sh
mysqldump -u binarysimulation -h binarysimulation.wecsy.ex-cloud.biz -p  binarysimulation > ~/Desktop/data_schema.sql
```

```sh
mysqldump -u binarysimulation -h binarysimulation.wecsy.ex-cloud.biz -p  --no-data --column-statistics=0 binarysimulation > ~/Desktop/no_data_schema.sql
```


### Import Mysql Database
