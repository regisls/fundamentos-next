import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {
    const[codigo, setCodigo] = useState(0);
    const[cliente, setCliente] = useState({});

    // Usando promisses ou usando async/await da no mesmo
    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCliente(dados);
        
        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        // .then(resp => resp.json())
        // .then(dados => setCliente(dados))
    }
    
    
    return (
        <Layout titulo="Integração com API">
            <div>
                <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Codigo: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}