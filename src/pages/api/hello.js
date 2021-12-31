// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Chamada API',
    metodo: req.method,
    nome: req.query.nome,
    idade: +req.query.idade // esse + convete pra numerico
  })
}
