import express from 'express';

const app = express();
const port = 5432;

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})