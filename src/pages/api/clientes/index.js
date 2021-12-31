export default function handler(req, res) {
    
    // Enviar uma resposta só com status
    // res.status(200)
    //     .send();

    if (req.method === "GET") {
        handleGet(req, res);
    } else {
        res.status(405).send();
    }
}

function handleGet(req, res) {
    // Enviar um JSON
    res.status(200)
        .json({
            id: 3,
            nome: 'Regis',
            inteligente: true
        })
}