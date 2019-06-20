## 測試Sequelize有無使用increment的差別

#### 1. 安裝步驟

> $ npm install
> 
> $ ./node_modules/.bin/sequelize db:create
> 
> $ ./node_modules/.bin/sequelize db:migrate
> 
> $ node app.js


#### 2. 開啟另外一個terminal 跑個兩次test-api.js

> $ node test-api.js
> 
> $ node test-api.js


#### 3. 觀察結果

```
mysql> select * from Count;
+----+-------------+-------+
| id | name        | count |
+----+-------------+-------+
|  1 | test        |     2 |
|  4 | testWithInc |     6 |
+----+-------------+-------+
2 rows in set (0.00 sec)
```