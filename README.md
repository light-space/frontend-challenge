# Workflow challenge

At Light, we want to implement the best in class approval workflow. One example of that is when our customers onboard a new vendor. Before the vendor can be used, it needs to go through a series of checks and approvals by different people in the organization.

To support that we want to build a UI that can help them create and visualize those workflows. 

For this challenge we are providing a design of what this workflow should look like and we want you to implement the code to display it.

![challenge design](/design.png)

*design.png*

## Challenge requirements

This is the list of things you should provide:

1. An HTTP API that returns the data necessary to render the provided design.
    - Don't worry about storing this data, just hardcoding the data and returning it via an API is fine.

2. The logic to fetch the data and render the workflow.
    - Please don't use any external libraries to render the workflow, we want to see how you would implement this part.
    - The three dots menu in the design (`...`) doesn't do anything, just rendering it there is fine.

Don't worry about making it pixel perfect or matching the icons and colours exacly. We know working against a png file is not ideal.

The icons you see in the image come from the lucide library. The `lucide-react` package is already installed in the project.

For any other consideration or thing you would do better/differently in a real world scenario, feel free to put it in the README, no need to implement it.

## Provided code

We provide a basic setup with NextJS, Typescript and tailwind. This is just a suggestion, feel free to use any framework and tools you like.

### How to build & run

```sh
npm install
npm run dev
```
