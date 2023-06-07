import {  Router, response } from "express"
import CursoController from "../controllers/controllerCurso"
import UnidadeControler from "../controllers/controllerUnidade"
import TurmaController from "../controllers/controllerTurmas"

const rotas = Router()

//Rotas principais
rotas.get("/", (request, response) => {
    return response.json("Home Page")
})


rotas.post("/curso", new CursoController().create)
rotas.post("/curso", new CursoController().readAll)
rotas.post("/curso/:id", new CursoController().readOne)
rotas.post("/curso/:id", new CursoController().update)
rotas.post("/curso/:id", new CursoController().delete)

rotas.post("/unidade", new UnidadeControler().create)
rotas.post("/unidade", new UnidadeControler().readAll)
rotas.post("/unidade/:id", new UnidadeControler().readOne)
rotas.post("/unidade/:id", new UnidadeControler().update)
rotas.post("/unidade/:id", new UnidadeControler().delete)

rotas.post("/turmas", new TurmaController().create)
rotas.post("/turmas", new TurmaController().readAll)
rotas.post("/turmas/:id", new TurmaController().readOne)
rotas.post("/turmas/:id", new TurmaController().update)
rotas.post("/turmas/:id", new TurmaController().delete)

export default rotas