import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';


const app = express();

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

export default app;
