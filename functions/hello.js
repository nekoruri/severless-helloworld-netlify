'use strict';

exports.handler = async function (event, context) {
  const body = event.body ? JSON.parse(event.body) : {};
  const name = event.queryStringParameters.name || body.name || '';
  return {
    statusCode: 200,
    body: JSON.stringify({message: `Hello ${name}!`}),
  };
};