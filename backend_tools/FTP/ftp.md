### Mac OS FTP

-------------------------------------------------------

### Mac OS FTP

* Install FTP client on Mac OS

```
brew install inetutils
```

* Connect to FTP server

```
ftp [HOST/IP]
=> Enter username
=> Enter password

ls

```

```
mput * 
- Push all file in folder
```

```
put filename 
- Upload a file to the server

get filename 
- Download a file from the server

mput filename 
- Put multiple files on the server

mget filename 
- Get multiple files on the server

ls 
- Get a list of files in the current directory

cd 
- Change directory

quit 
- Ends your ftp session
```
