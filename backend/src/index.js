const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/v1/stories",require("./routes/stories"))

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})