// make bluebird default Promise
import { port, env } from './config/vars.js';
import app from './config/express.js';

// listen to requests
app.listen(port, () => console.log(`Server started on port ${port} (${env})`));