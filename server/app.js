const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan'); 
const cors = require('cors');

const PORT = process.env.PORT

const DB =  require('./DB/connection');
const router = require('./routers/productsRouter');
// const Product = require('./models/productsModel');
// const fs = require('fs');

// const importData = async () => {
//     const dataProducts = await JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
//     const data = await Product.insertMany(dataProducts);
//     console.log(data)
//     console.log('done');
// }

// importData()



//middlewears
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api', router)




app.listen(PORT, () => {
    console.log(`app is listening on PORT ${PORT} ...`);
})