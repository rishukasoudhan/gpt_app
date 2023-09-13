const express= require("express")
const morgan= require("morgan")
const cors= require("cors")
const colors= require("colors")
const bodyParser= require("body-parser")
const dotenv= require("dotenv")
const connectDB = require("./config/db")

//dotenv
dotenv.config()
// rest obj


// db connection
connectDB();

const app= express();


// midddle wares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))






const PORT= process.env.PORT || 8080

app.listen(PORT, ()=>{
  console.log(` server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
});
