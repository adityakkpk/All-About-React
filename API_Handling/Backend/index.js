import express from 'express';
import { products } from './data.js'

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {

    if(req.query.search) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search));
        res.send(filteredProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
});