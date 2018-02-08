### Blockchain : Fork

--------------------------------------------------------

### Blockchain : Fork

* What happend if more than one miner find the valid hash of block and add that block to blockchain together.

* **Forks** are a natural occurrence during mining (occurrence when finding nonce to get a valid háh of block)

* If there are more than one (exmple two) miner (following the same consensus rules) found the nonce and found the valid hash of block => both of that blocks will be add to the chain but we just can add one block and not other block => The blockchain resolve this problem by : after valid block added if which chain of blockhain is longger => that longger blockchain is keep and update that new chain for all node in blockchain network.

* Khi nhiều miner cùng tạo ra được 1 valid hash của block => ta chỉ có thể giữ 1 valid block để add vào blockchain (bỏ đi những valid block khác) Cách xử lý như ví dụ bên dưới:

  * Ví dụ ở ViệtNam có 1 miner tìm được valid hash của block => Block này sẽ được gửi tới các node lân cận như ở VN, Singapo, China ..., Ở Mỹ cũng có 1 miner tìm ra đc valid hash cuar block vaf block đó cũng được add vào các node kế cận nó n hư ở Canada, Mexico, Cuba, ... vậy vấn đề này gọi là **Fork** và cách xư lý là, Sau khi add nếu chuỗi block nào có độ dài lớn hơn thì sẽ ưu tiên chuổi đó, xoá chuỗi ngắn đi và cập nhật chuỗi còn lại cho cả mạng
