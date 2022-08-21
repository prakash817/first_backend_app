const express = require("express")

require('dotenv').config()

const connection = require("./config/db")
const DataModel = require("./models/Data.model")


const app = express();

app.use(express.json())


app.get("/", async (req, res) => {
    let {name} = req.query
    let data = new DataModel({
        name
    })

    await data.save()
    res.send("home page")
})






app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("db connnected")
    }
    catch(err){
        console.log("error connecting to db")
        console.log(err)
    }
    console.log(`listening on port ${process.env.PORT}`)
})

