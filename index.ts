import * as e from 'express';
import { Application } from 'express';
import * as ServerlessExpress from 'aws-serverless-express';
import { MarkupHandler } from './src/handlers/MarkupHandler';

let express: any = (<any>e).default || e;
const app: Application = express()

app.use('/', MarkupHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000:')
});

const server = ServerlessExpress.createServer(app)

exports.handler = (event: any, context: any) => {
  ServerlessExpress.proxy(server, event, context);
}