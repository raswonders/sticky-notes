# Contributing to Sticky Notes 

This file works as source of information for devs with contributor role on this repo. 

## Table of Contents

1. [Development Setup](#development-setup)
2. [How to Contribute](#how-to-contribute-explained)
3. [Coding Guidelines](#coding-guidelines)
4. [License](#license)

## Development Setup

Sticky Notes is developed with HTML/CSS/JS. It uses Vite building tool, ESLINT as linter and prettify as its formatter. To setup development environment follow:
1. clone repo
```bash
git clone https://github.com/raswonders/sticky-notes.git
```
2. install npm packages
```bash
cd sticky-notes
npm install
``` 
3. start development live server
```bash
npm run dev
```

## How to Contribute explained 

### Project Planning 

Project planning is done via [Sticky Notes project board](https://github.com/users/raswonders/projects/1) on github and every contributor to the repo should have write privileges to this dashboard. Some important facts about this system:
- currently we have only one view and that's Kanban board
- Kanban has three columns: Todo, In Progress and Done
- Tasks which are available for grasp are placed in Todo column
- There are 3 types of tasks (Task, GigaTask and Bug)
- Task represents atomic unit of work done to project 
- Every type of task starts first as an Issue on repo
- It turns to task in project dashboard only after it's explicitly assigned to project  
- GigaTask represent bigger piece of Work, it consist of list of smaller Tasks
- Bug is specialized Task focused on problems in app

To create task we must create Issue in github repo first and assign it to Sticky Notes project.

### Project Implementation

To implement any change there are some actions required for tracking & planning.

Actions required in Kanban:
- before we start making changes, we have to make sure there is a Task in Kanban for it 
- after we pick a Task, we should make ourselfs assignee, and move Task to In progress column of Kanban
- when we are finished with the task and our Pull Request is merged, task should be autocompleted
- in case you want to create Task, GigaTask, Bug or Pull Request please use templates as their body (from .github/templates/)

Actions required in git
1. Before we start working on Task we create brand new branch for it:
```bash
git checkout -b "feature/something-new-is-coming"
```
2. We Keep implementing Task and commiting to our branch
3. Once we are done implementing the change we run linter to check for problems
```bash
npm run lint
```
4. If there are no issues we format the code last
```bash
npm run format
```
5. When we are ready we push our branch upstream
```bash
git push --set-upstream origin feature/something-new-is-coming
```
6. Once branch is upstream we login to github and create Pull Request in our repo
7. There should be PR review from sb now but due lack of time we merge ourselfs
8. Once branch is merged we click to delete it in github
9. We delete also our local one
```bash
git branch -d "feature/something-new-is-coming"
```

## Coding Guidelines

No guidelines really just make sure you run linter and formatter before every pull request.

## License

Sticky Notes is released under the Creative Commons License. By contributing to this project, you agree to abide by the terms of this license.