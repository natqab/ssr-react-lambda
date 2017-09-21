# ssr-react-lambda
A basic example of how to render React components server-side using AWS Lambda and API Gateway

First, run `npm install`.
For local development, run `npm start`. For the app, go to `localhost:3000`.

Before creating a Lambda in the AWS Console, run `npm run build` so that a zip file is created, containing your transpiled React app.

At this point, you have a zip file that's ready to be uploaded to a Lambda function of your choice.