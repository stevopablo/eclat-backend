import express from 'express';
import routes from './src/routes/inventarioRoutes.js';

const app = express();
const port = 3000;

app.use(express.json()); 

routes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});