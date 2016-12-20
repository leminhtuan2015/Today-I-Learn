### Here-Document

### Here-Document

- https://en.wikipedia.org/wiki/Here_document

- **here document** (here-document, here-text, heredoc, hereis, here-string or here-script) is a file literal or input stream literal.
- Since here documents are not available in all shells.
- **here document** is a block of code
- Here documents originate in the Unix shell, and are found in sh, csh, ksh, Bash and zsh.

#### Example

##### **here document** in terminal

```sh
tr a-z A-Z << leminhtuan
hello
leminhtuan

=> hello
```

NOTICE: **leminhtuan** is the keyword to mark the begin and the end the block of code.

##### **here document** in shell script file.

- Make a script file with bellow content.

```sh
tr a-z A-Z << leminhtuan
hello
leminhtuan
```
