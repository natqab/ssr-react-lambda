import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import HelloWorld from '../components/HelloWorld';
import { Router, Request, Response, NextFunction } from 'express';
const MarkupHandler = Router();

MarkupHandler.get('/', function(request: Request, response: Response, next: NextFunction) {
  const html = renderToString(createElement(HelloWorld as any));
  request = request;
  response.send(html);
  next();
});

export { MarkupHandler };