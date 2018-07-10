### Mac install software from anywhere


-----------------------

### Mac install software from anywhere

* From mac 10.12 we CAN NOT install software from anywhere
* System Preferences > Security & Privacy :  **Anywhere** option is hide
* To turn on **install from anywhere** : 

```sh
sudo spctl --master-disable

spctl --status

```

* * To turn off **install from anywhere** : 

```sh
sudo spctl --master-enable

spctl --status
```
