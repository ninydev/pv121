/**
 * Configure microservice
 */
const SERVER_NAME = process.env.SERVER_NAME || 'Doc';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import { parse as parseYaml } from 'yaml';

const app = express();

const authYaml = parseYaml(fs.readFileSync('./apis/auth.yaml', 'utf8'));
app.use('/docs/auth', swaggerUi.serve, swaggerUi.setup(authYaml));

// const postYaml = parseYaml(fs.readFileSync('./apis/post.yaml', 'utf8'));
// app.use('/docs/post', swaggerUi.serve, swaggerUi.setup(postYaml));


app.listen(SERVER_PORT, () => {
    console.log(`Document server ${SERVER_PORT}`)
});
