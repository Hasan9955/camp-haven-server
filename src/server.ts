import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
 
const port = config.port;
let server: Server;

async function main () {
    try { 
        await mongoose.connect(config.mongodb_url as string);
        
        server = app.listen(port, () => {
            console.log(`Camp Haven is listening on port ${port}`)
          }) 
    } catch (error) {
        console.log("An error is going on server");
        console.log(error);
    }
}


main();

