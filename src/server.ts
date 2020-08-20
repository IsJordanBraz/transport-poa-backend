import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);