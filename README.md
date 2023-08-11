## Tasks:

### 1. Endpoint

Create Endpoint which collects all data from `/api/index.ts` (which can be external api, database etc.) and return it as single bundle `{data1: [...], data2: [...], data3: [...]}`

### 2. Unique string

Write a function that accepts three arguments: `data` (an array of some objects), `uniqueKey` (representing the key of an object whose value the developer needs to make unique), and `unificatorKey` (representing the key of an object that will be added to the value of `uniqueKey` to ensure uniqueness). The function should modify the data and return the modified version with unique names. If name is already unique it should not be edited.

Return for `data3` in `/api/index.ts` should look like this:
``[
  {
    id: 1,
    name: "John 1",
  },
  {
    id: 2,
    name: "Jack 2",
  },
  {
    id: 3,
    name: "John 3",
  },
  {
    id: 4,
    name: "John 4",
  },
  {
    id: 5,
    name: "Arnold",
  },
  {
    id: 50,
    name: "Pele 50",
  },
  {
    id: 70,
    name: "Pele 60",
  },
  {
    id: 88,
    name: "John 88",
  },
]``

## Workflow
1. Sign in to CodeSandbox and create a fork of this sandbox. When you edit any file, a fork will be automatically created. Alternatively, you can create a fork and work in your IDE.
2. Before beginning, estimate the time required for each task in `README_DEV.md`. After completing each task, update `README_DEV.md` with the actual time spent on that task.
3. To start the project in development mode, run the command `npm run dev` in the terminal.
4. If you make any modifications to the project, add new scripts, or introduce changes, make sure to mention them in the `README_DEV.md`.
5. After you have finished, please share the link to the CodeSandbox or GitHub repository.

## Evaluation Criteria:

1. Correct implementation of API endpoints with proper request handling and response formatting.
2. Proper usage of TypeScript and adherence to coding best practices.
4. Complexity of your code and execution/response time.

## Additional Notes:

- Best library choice for creating endpoints is Express.js
- You are encouraged to modularize your code and use best practices for maintainability and scalability.
- The focus should be on clean code, efficiency, and adherence to the provided requirements.

