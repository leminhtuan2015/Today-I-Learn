### Migrate Database

-------------

### Migrate Database

* **When migrate data (Transfer data) from Database Mysql to Database Postgre need to notice**

  * Table structure is diffrent between 2 database (if 2 database is the same structure => very easy to transfer data).
  * Fields (for example: password field) in old database is **encoded** need to **decode** to raw data before move to new database => the decode process may take much time.
  * Relationship between table in old system and new system (Data of tables in old system will insert in which tables in new system)
