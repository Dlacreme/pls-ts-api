import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const envPath = process.env.NODE_ENV === 'production' ?
  './environments/prod.env' : './environments/dev.env';
dotenv.config({path: envPath});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`PLS running on ${PORT}`));
