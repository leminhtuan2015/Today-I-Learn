### Connect Mysql Database
### Export Mysql Database
### Import Mysql Database

------------------------------------------------

### Connect Mysql Database

* -u : Username
* -h : Host
* -p : Path (Database Name)

```sh
mysql -u binarysimulation -h binarysimulation.wecsy.ex-cloud.biz -p  binarysimulation
```

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

```sh
mysql -u quicktrade -h quicktrade.wecsy.ex-cloud.biz -p quicktrade  < ~/Desktop/data_schema.sql
```
