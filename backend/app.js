const express = require("express")
const app = express()
const cors = require("cors")
const mensagemRoutes = require("./routes/mensagem")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

//rotas
app.use("/mensagem", mensagemRoutes)

require("./db/conn")



const port = 3000;


app.listen(port, () => {
    console.log(`O servidor iniciou na porta: ${port}`)
})