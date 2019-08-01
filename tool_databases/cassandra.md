* http://cassandra.apache.org/doc/latest/getting_started/index.html
* https://github.com/apache/cassandra
* https://nghethuatcoding.com/2019/05/26/tat-tan-tat-ve-apache-cassandra/
* https://topdev.vn/blog/discord-da-luu-tru-hang-ti-messages-moi-ngay-nhu-the-nao/?fbclid=IwAR0YmcsGNi7jZl-jNt0_V_AsPBt0OScMNojsXEau6445G-Z4pLU4g8dHjLA


### Cassandra

* Cassandra là NoSQL, được phát triển bởi Facebook vào năm 2007. Sau đó nó được tặng cho quỹ Apache vào 2/2010 và nâng cấp lên thành dự án hàng đầu của Apache.

* Cassandra là hệ cơ sở dữ liệu phân tán, dữ liệu được lưu trữ trên nhiều node của nhiều máy khác nhau, theo cơ chế P2P. Hiệu năng xử lý của hệ thống cũng tăng theo số node (nếu càng nhiều node thì càng xử lý được nhiều request).

* Về hiệu năng thì Netflix cũng đã thực hiện đo benchmark, kết quả ngoài mong đợi. Với 288 nodes, Casandra đã đạt được throughput lên đến 1 triệu write/s. Khá kinh khủng.

* Là NoSQL
* Dữ liệu được phân tán trên nhiều node khác nhau.
* Node càng nhiều thì throughput của nó càng tăng.
* Write throughput luôn luôn cao hơn read throughput.
* Tính chịu lỗi khá cao, cho dù node bị chết đi chăng nữa thì khi truy vấn sẽ được chuyển hướng đến node khác.
* Backup, restore dữ liệu 1 cách đơn giản.
* Tốc độ truy vấn cao
