# 8 Queens

Simple javascript doodle to find solutions to the
[Eight queens Puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle) .

Requires Nodejs 18+.

## Usage

Run using the CLI:

```bash
./run
```

## Project structure

Linting and formatting via npm modules Prettier and Eslint

```bash
npm install
npm run lint
npm run format
```

## Output

Executing `./run` results in this ouput: 

```
1: 1 solutions
2: 0 solutions
3: 0 solutions
4: 2 solutions
5: 10 solutions
6: 4 solutions
7: 40 solutions
8: 92 solutions
9: 352 solutions
10: 724 solutions
11: 2680 solutions
12: 14200 solutions
13: 73712 solutions
14: 365596 solutions
_____________
|_|Q|_|_|_|_|
|_|_|_|Q|_|_|
|_|_|_|_|_|Q|
|Q|_|_|_|_|_|
|_|_|Q|_|_|_|
|_|_|_|_|Q|_|
‾‾‾‾‾‾‾‾‾‾‾‾‾

_____________
|_|_|Q|_|_|_|
|_|_|_|_|_|Q|
|_|Q|_|_|_|_|
|_|_|_|_|Q|_|
|Q|_|_|_|_|_|
|_|_|_|Q|_|_|
‾‾‾‾‾‾‾‾‾‾‾‾‾

_____________
|_|_|_|Q|_|_|
|Q|_|_|_|_|_|
|_|_|_|_|Q|_|
|_|Q|_|_|_|_|
|_|_|_|_|_|Q|
|_|_|Q|_|_|_|
‾‾‾‾‾‾‾‾‾‾‾‾‾

_____________
|_|_|_|_|Q|_|
|_|_|Q|_|_|_|
|Q|_|_|_|_|_|
|_|_|_|_|_|Q|
|_|_|_|Q|_|_|
|_|Q|_|_|_|_|
‾‾‾‾‾‾‾‾‾‾‾‾‾

Found 4 solutions
```
