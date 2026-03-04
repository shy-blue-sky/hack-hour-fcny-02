# Hack Hour: Data Structures & Algorithms

## Overview

The challenges in this repository are designed to exercise your problem-solving skills through writing TypeScript implementations for a variety of common algorithms.

Make sure you read through and understand the challenge, then work through your approach. Often, the first attempt will be a brute force solution. Examine that solution to see if there's some time or space complexity that could be saved using a different approach. Other times, you may not get to the solution at all. It is still valuable time spent making the effort. Even if you don't solve the problem, you will benefit from the exercise. Just keep building that muscle so it's there when you need it!

## Getting Started

- [ ] Fork and clone this repository. If you need a refresher, just follow the instructions found in the [dev environment setup guide](https://github.com/CodesmithLLC/dev-environment-setup/blob/main/fork-clone.md)!

Next, follow these steps in order to link the cloned repository in your local dev environment with the original repository on CodesmithLLC's GitHub.

- [ ] On GitHub, navigate back to the codesmith-prep version of this repo, click the green `Code` button, and copy the URL in the dropdown.
- [ ] In your terminal, type `git remote add upstream <codesmith-prep github URL>`.
- [ ] Verify that you have aliases for origin and upstream set by typing `git remote -v`. These aliases should look something like this:

  ```bash
  origin    git@github.com:USERNAME/hack-hour-campus-01.git (fetch)
  origin    git@github.com:USERNAME/hack-hour-campus-01.git (push)
  upstream  git@github.com:codesmith-prep/hack-hour-campus-01.git (fetch)
  upstream  git@github.com:codesmith-prep/hack-hour-campus-01.git (push)
  ```

- [ ] Set your configuration for this repo by running `git config pull.rebase false`.

## How do I get new Hack Hours every week?

New challenges are released periodically throughout the cohort. When new challenges are released, follow these steps to update your local repository.

- [ ] In your terminal, navigate to your hack hour directory.
- [ ] Make sure you have added and committed your changes from previous hack hours. (If you're unsure, type `git status` to check!)
- [ ] Then run:

```bash
git pull upstream main
```

This will pull down any newly released challenges.

To keep your fork on GitHub to stay updated as well run:

```bash
git push origin main
```

NOTE: You shouldn't ever need to create additional challenge files manually. New challenges will be added through updates from the upstream repository.

- [ ] Run `npm install` to install any dependencies

## Daily Workflow

Each week you may see multiple new challenges appear in the challenges folder.

Your instructors will tell you which challenge to work on each day.

Typical workflow:

1. Open the assigned challenge file inside the challenges folder.

2. Implement your solution.

3. Run the test for that challenge.

4. Commit and push your work to your fork.

Example:

```bash
npm test pow
```

Then commit your work:

```bash
git add .
git commit -m "Complete pow challenge"
git push origin main
```

## Testing

Testing for all hack hour algorithms are handled through Vitest, which provides both an assertion library and test runner built on top of Vite.

- To test all files in the `challenges` folder, run:

 ```bash
npm test
```

To test a specific file, run the test script followed by the filename.

Example:

- To test `challenges/merge-sort.ts`:

 ```bash
npm test merge-sort
```

NOTE: It's a great idea to keep Vitest running in the background while you're working on a particular challenge, ensuring that you get immediate feedback as you work towards a solution.

## Type Checking

A tsconfig.json file has been included in order to configure the TypeScript compiler for type checking. You should be able to monitor for type errors through your IDE without needing to explicitly run the compiler, but if you'd like to see the output in your terminal, run `npm run check`. If you'd like to type check a specific file, run `npm run check:file [FILEPATH]` passing in the filepath to the file you'd like to check.
