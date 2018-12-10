const express = require("express")


const app = express()


app.get("/", (req, res) => {

    const date = new Date()
    res.send("Unix time:" + date.getTime() + "\nutc:" + date.toUTCString())

})

app.get("/:id", (req, res) => {

    const date = new Date(req.params.id)
    res.send("Unix time:" + date.getTime() + "\nutc:" + date.toUTCString())

})

app.listen(3000, () => {
    console.log("server is listening at port 3000")
})