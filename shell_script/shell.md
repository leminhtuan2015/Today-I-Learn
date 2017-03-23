**Command line input**
  - Command line input is the options and parameters that pass for a shell scroipt

**Options :**
  - Short options (like `-a`)
  - Long options (like `--some-option`)
  - Non-option parameters (like `/home/bahman/reports.txt`)
  - Short and long options can accept arguments (like `-a /home/bahman/Temp` or `--some-option 'A commit comment'`).
  
  
**Short option**
- A short option is composed of a `-` (dash character) followed by a single letter, for example `-a` or `-A`, and it may expect an argument.

- Without argument:
  - like `-a` or `-H`
- With argument:
  - With required arguments: like `-a bahman` or `-Hreports`
  - With optional arguments: like `-abahman`. Note that there can't be any spaces between the option (-a) and the argument (bahman).
  
**Long option**
- A long option is composed of a `--` (two consequent dash characters) 
  followed by any number of alpha-numeric characters (like `--option-a`) and it may expect an argument.

- Without argument like `--option-a` or `--more-2-go`
- With arguments
  - With required arguments like `--file-to-process reports` or `--package-name-prefix='com.bahmanm'`
  - With optional arguments like `--package-name-prefix='com.bahmanm'`. Note that the argument can be passed only using `=`.
  
**Arguments**
- An option may be have **required** or **optional** argrument
- EX:

```
ls -l          // List files in folder

ls -l *.java   // List files end with .java,  *.java is the argrument of option l
```

- Option   : `-l`
- Argrument: `*.java` 


**getopts**


- http://www.bahmanm.com/blogs/command-line-options-how-to-parse-in-bash-using-getopt
