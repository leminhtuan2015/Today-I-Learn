
### Github FLOW

* Branching is a core concept in Git, and the entire GitHub flow is based upon it. 
There's only one rule: **anything in the master branch is always deployable**.

* THE GITHUB FLOW
  * STEP 1: CREATE A BRANCH : Create a branch in your project where you can safely experiment and make changes.
  * STEP 2: OPEN A PULL REQUEST : Use a pull request to get feedback on your changes from people down the hall or ten time zones away.
  * STEP 3: MERGE AND DEPLOY Merge your changes into your master branch and deploy your code.
  
  
### GIT FLOW

* What is Git Flow? Git flow have 2 part
  * Part 1: Concept, all project should have 5 branchs when developing
  * Part 2: Tool, it have a command line tool for manage branchs 

* GIT Flow command line tool to manage branchs 

```sh
brew install git-flow-avh

port install git-flow-avh

apt-get install git-flow
```
* GIT Flow base branchs

    * Master : Anything in the master branch is always deployable
      * Checkout to develop branch
      * Checkout to hotfix branch
      * Merged from release
      * Merged from hotfix

    * Develop : Develop branch serves as an integration branch for features branch
      * Checkout from master branch
      * Merged into release branch
      
    * Feature: 
      * Never interact directly with master
      * Checkout from develop branch
      * Merged back into develop
      
    * Release
      * Checkout from develop branch
      * Merged into master and develop
      
    * Hotfix
      * Checkout from master branch
      * Merged into master and develop
    
 * Branch naming convention:release-*, or hotfix-*, feature-*
 
 
 
