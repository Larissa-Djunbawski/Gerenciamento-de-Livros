let nextId = 1

const model = (body, id = nextId++) => {
    if  (
        body.nome !== "" &&
        body.nome != undefined &&
        body.matricula != " " &&
        body.matricula != undefined &&
        body.curso && body.curso.trim() !== "" &&
        body.ano != undefined &&
        !isNaN(Number(body.ano)) &&
        !isNaN(Number(body.matricula)) 

    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model