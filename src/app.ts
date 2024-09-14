import express from 'express';
import cors from 'cors';
import { applicationRoutes } from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app = express();

//parsers
app.use(express.json());
app.use(cors())


//application routes 
app.use('/api/v1', applicationRoutes)  
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Camp Haven server is running successfully!'
    })
})

app.use(globalErrorHandler)
app.use(notFound)


export default app;
