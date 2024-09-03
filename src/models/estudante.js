const estudante_controller = require("../controllers/estudante.js")

let nextId = 1

const model = (body, id = nextId++) => {
    if  (
        body.nome != undefined &&
        body.nome != " " &&
        body.matricula != undefined &&
        body.matricula == Number &&
        body.curso != undefined &&
        body.ano != undefined &&
        body.ano == Number
    ) {
        return {
            id,
            nome : body.nome,
            matricula : body.matricula,
            curso : body.curso,
            ano : body.ano
        }
    }
}

module.exports = model