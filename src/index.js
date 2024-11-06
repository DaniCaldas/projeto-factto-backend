import express from 'express';
import cors from 'cors';
import {router} from './routes/routes.js'

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ['*'],
        credentials: true,
        allowedHeaders: ['Origin', 'Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
    }
));
app.use(router);

app.listen(process.env.PORT || 8000, () => console.log('rodando!'));
