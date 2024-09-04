const express = require ("express")
const estudante_controller = require("../controllers/estudante.js")
const router = express.Router()

router.get("/", (req,res) => {
    res.json(estudante_controller.index())
    
})

router.get("/:id",(req,res)=> {
    const estudante = estudante_controller.show(req.params.id)
    if (estudante) {
        res.status(200).json(estudante)
    } else {
        res.status(404).send("Estudante não encontrado")
    }
})

router.post ("/",(req,res) => {
    const code = estudante_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("Estudante registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o estudante, tente novamente")
    }
})

router.put("/:id",(req,res)=>{
    const code = estudante_controller.update(req.body, req.params.id)
    if (code === 200){
        res.status(200).send("Estudante atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o estudante, tente novamente")
    }
})

router.delete("/:id", (req, res) => {
    const code = estudante_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("Registro de estudante excluido com sucesso")
    } else {
        res.status(400).send("Erro ao excluir o estudante, tente novamente")
    }
})

module.exports = router