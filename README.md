# Building Reliable Background Jobs with Inngest and endpts Functions

This repository contains a sample demonstrating how to integrate Inngest with endpts Functions to build reliable background jobs.

The complete guide on how to run the project locally and deploy it can be found here: [Building Reliable Background Jobs with Inngest and endpts Functions](https://endpts.io/blog/building-reliable-background-jobs-with-inngest-and-endpts-functions).

## Local Development

To get started locally, rename `.env.sample` to `.env`:

```bash
mv .env.sample .env
```

> **NOTE:** Node 18.x or greater is required

Install the dependencies and start the endpts dev server which will serve our API:

```bash
npm install && npm run dev
```

With the API dev server running, we can now start the inngest dev server which will allow us to view, test, and debug oour background jobs:

```bash
npx inngest-cli@latest dev --no-discovery -u http://localhost:3000/api/inngest
```

You're now ready to start running background jobs locally.

To trigger a job, we can call the `/signup` endpoint which will emit a `dashboard/account.created` event that will trigger the email verification flow:

```bash
curl -X POST -d '{ "email": "hello@example.com" }' http://localhost:3000/signup
```

## Deploying to endpts.io

Deploy your project to the cloud with [endpts.io](https://dashboard.endpts.io) ([Deployment documentation](https://endpts.io/docs/core-concepts/deployments)).
