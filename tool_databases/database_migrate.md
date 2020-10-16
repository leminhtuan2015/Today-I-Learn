### Migrate Database

-------------

### Migrate Database

* **When migrate data (Transfer data) from Database Mysql to Database Postgre need to notice**

  * **Table structure** is diffrent between 2 database (if 2 database is the same structure => very easy to transfer data).
  * **Table Relationship** in old system and new system (Data of tables in old system will insert in which tables in new system)
  * **Encoded Fields** (for example: password field) in old database is **encoded** need to **decode** to raw data before move to new database => the decode process may take much time.
  * **ID auto increment**
    * When insert data from old db to new db, you must be define correct **ID field** the same in old system
    * But when you create new row in new system => current ID of that table is still start from 1
    * **EXAMPLE** : From old system table User [id=1, id=2, id=3, ....], you insert to new database is [id=1, id=2, id=3, ....], when you create new User in new system => the start id is not from 4, it start from 1
  * **NOT NULL FIELDS** : Old database ***allow NULL* but in new database required **NOT NULL** => for example the birthday_date => how to solve

