'use strict';

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: `Hello ${req.query.name || req.body.name || ''}!`}),
  };
};