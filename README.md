# Interview process

## Explain the exercise

- We play bowling so explain how to compute the score
  ![bowlingRules](BowlingRules.png)

- We use TDD (Test Driven Development) so explain the 3 steps

  - We write a new test that fails
  - We implement the feature so that all tests succeed
  - We refactor

- We use Pair-Programming so explain what pair programing is

  - We work on the same computer
  - There is a timer (otherwise only 1 person in focus, the other is sleeping)
  - We do this in 2 cases

    - To teach: 1 dev knows how to do it, the other one learns by doing himself under the teacher's vision while being productive
    - To accelerate: Sometimes 2 brains are more than twice as productive (e.g.: on very complex problems, bugs that requires both knowledges)

## Start the exercise

```bash
git clone git@github.com:Samox/pair-prog-ts.git
cd pair-prog-ts
yarn
yarn test
```
