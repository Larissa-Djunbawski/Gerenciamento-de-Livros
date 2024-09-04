const express = require ("express")
const aluguel_controller = require("../controllers/aluguel.js")

const router = express.Router()

router.get("/", (req,res) => {
    res.json(aluguel_controller.index())
})

router.get("/:id",(req,res)=> {
    const aluguel = aluguel_controller.show(req.params.id)
    if (aluguel) {
        res.status(200).json(aluguel)
    } else {
        res.status(404).send("Aluguel não registrado")
    }
})

router.post ("/",(req,res) => {
    const code = aluguel_controller.store(req.body)
    if (code == 201) {
        res.status(201).send("Locação registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar de locação")
    }
})

router.put("/:id",(req,res)=>{
    const code = aluguel_controller.update(req.body, req.params.id)
    if (code == 200){
        res.status(200).send("Aluguel atualizado")
    } else {
        res.status(400).send("Erro ao atualizar registro de aluguel")
    }
})

router.delete("/:id", (req, res) => {
    const code = aluguel_controller.destroy(req.params.id)
    if (code == 200){
        res.status(200).send("Registro de aluguel excluido")
    } else {
        res.status(400).send("Erro ao excluir aluguel")
    }
})

module.exports = router