import {Handler} from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      message: 'Method not allowed',
    };
  }

  return {
    statusCode: 200,
    message: JSON.stringify({message: 'Hello World'}),
  };
};
