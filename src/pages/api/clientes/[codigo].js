export default function handler(req, res) {
    res.status(200)
        .json({
            id: req.query.codigo,
            nome: 'Regis',
            inteligente: true,
            email: 'regisls@regisls.net'
        })
}