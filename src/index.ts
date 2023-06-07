import { AppDataSource } from "./databases/connections/data-source"
AppDataSource.initialize()
import rotas from "./routes/routes"

const express = require("express")
const app = express()
app.use(express.json())
app.use()

app.get("/", (request, response) => {
  return response.json("E ai, suave?")
})

app.listen(3333, () => console.log("O server esta ON na porta 3333."))
