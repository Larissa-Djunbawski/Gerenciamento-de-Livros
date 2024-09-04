const livro_controller = require ("../controllers/livro.js")
const estudante_controller = require ("../controllers/estudante.js")

let nextId = 1

const model = (body, id = nextId++) => {
    const haLivro = livro_controller.show(body.idLivro)
    const HaEstudante = estudante_controller.show(body.idEstudante)

    if (
        haLivro && HaEstudante &&
        body.dataAluguel &&
        (body.dataDevolucao === undefined || body.dataDevolucao)
    ){
        return {
            id,
            idLivro: body.idLivro,
            idEstudante : body.idEstudante,
            dataAluguel : body.dataAluguel,
            dataDevolucao : body.dataDevolucao
        }
    }
}

module.exports =  model
