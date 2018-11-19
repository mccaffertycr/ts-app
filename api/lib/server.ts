import app from "./app";
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3001;

const httpsOptions = {
  key: fs.readFileSync('./config/key.pem'),
  cert: fs.readFileSync('./config/cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`express api server listening on port: ${PORT}`);
})