## HEAD
  - HEAD is a reference to the `last commit` in the currently checked-out branch.
  - HEAD = ID of last commit (HEAD = last commit)
  - HEAD = 973b50d
  - Example:
 

#### Show the HEAD
```sh
    git show HEAD
```

#### Show HEAD logs

```sh
  git reflog
```

#### HEAD = 973b50d
```sh
    973b50d Merged in nguyenhongquan/loxo-language/fix_bug_diction_ongame (pull request #562)
    93d9c0a Fix some bug dictionary on game
    bcb4ac7 Merged in nguyenhongquan/loxo-language/add_dictionary_to_some_game (pull request #561)
    b50a4a6 Add dictionary to some game
    aa08b74 Merged in local_push_lotification_click (pull request #557)
```
## reset

  - git reset --soft
  - git reset --hard

## checkout

#### Show files changed

```sh
    git checkout --
    
    // = git status
```

#### Undo changed files

```sh
  git checkout -- path/to/file
```

#### Undo deleted files

```sh
  git checkout HEAD -- path/to/file
```

## Undo "git commit --amend --no-edit"

```sh
//STEP 1: Show HEAD log
git reflog

//STEP 2: reset
git reset --soft HEAD@{n}  // n = the number of commit
```
