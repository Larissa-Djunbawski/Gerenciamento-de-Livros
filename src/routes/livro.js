const express = require("express")
const livro_controller = require("../controllers/livro.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(livro_controller.index())
})

router.get("/:id", (req, res) => {
    const livro = livro_controller.show(req.params.id);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).send("Livro não encontrado")
    }
})

router.post("/", (req, res) => {
    const code = livro_controller.store(req.body)
    if (code === 201) {
        res.status(201).send("Livro registrado com sucesso")
    } else {
        res.status(400).send("Erro ao registrar o livro")
    }
})

router.put("/:id", (req, res) => {
    const code = livro_controller.update(req.body, req.params.id)
    if (code === 200) {
        res.status(200).send("Livro atualizado com sucesso")
    } else {
        res.status(400).send("Erro ao atualizar o livro")
    }
});

router.delete('/:id', (req, res) => {
    const code = livro_controller.destroy(req.params.id)
    if (code === 200) {
        res.status(200).send("Livro deletado com sucesso")
    } else {
        res.status(400).send("Erro ao deletar o livro")
    }
})

module.exports = router;
