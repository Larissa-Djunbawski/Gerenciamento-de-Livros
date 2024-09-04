let nextId = 1

const model = (body, id = nextId++) => {
    if (
        body.titulo && body.titulo.trim() !== "" &&
        body.autor && body.autor.trim() !== "" &&
        body.ano > 0 &&
        body.genero && body.genero.trim() !== ""
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        };
    }

    return null;
}

module.exports = model