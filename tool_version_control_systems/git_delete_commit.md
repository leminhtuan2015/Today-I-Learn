### Delete a pushed commit on local and remote

------------------------------------

### Delete a pushed commit on local and remote


```
| * 5a612f2 - THIS IS A "WRONG COMMIT"
| * d2089a1 - done_edit_text_all (2 days ago) <tuan.le>
| * 53f4622 - done_ed_commitee (2 days ago) <tuan.le>
| * 3dfef1e - done_ed_ar (2 days ago) <tuan.le>
| * 7aa3b1e - media_e (2 days ago) <tuan.le>
| * e9ccecc - go_or_stay (3 days ago) <tuan.le>
```

* How to delete 5a612f2 commit on both local + remote

  * Step 1: gco master
  * Step 2: git reset --hard d2089a1  // Delete commit 5a612f2 on local
  * Step 3: git push origin -f  // Delete commit 5a612f2 on remote
  
