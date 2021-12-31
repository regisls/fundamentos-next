import { useState } from 'react';
import Layout from '../components/Layout'

export default function Estado() {
    
    const [numero, setNumero] = useState(0);

    function incrementaNumero() {
        setNumero(numero+1);
    }

    return (
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementaNumero}>Incrementa</button>
        </Layout>
    )
}