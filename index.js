const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

const PORT = 8080;

app.get ('/', (req, res) => {
    res.send("Hello world!")
});

app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
