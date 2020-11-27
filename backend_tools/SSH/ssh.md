### Connect to SSH server
### Copy file from host to local

---------------------------------------------------------------
### Connect to SSH server

```
ssh -i "aws_key.pem" ubuntu@ec2-12-34-56-78.us-west-1.compute.amazonaws.com
```

### Copy file from remote host to local

```sh
scp root@125.212.233.99:/root/Remote_File ./Desktop/Local_Dir

scp -i aws_key.pem ec2-user@12.34.56.78:/home/ec2-user/Remote_File ./Desktop/Local_Dir
```
