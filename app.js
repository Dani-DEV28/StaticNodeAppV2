// Express is our web framework
import express from 'express'

// Instaciate an express object called app
const app = express();

// Tell the app to find static content in the 'public' folder
app.use(express.static('public'));

// Define a "defualt root"
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
});