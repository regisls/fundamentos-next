import Layout from '../components/Layout';

export default function() {
    const titulo = <h1>JSX é um conceito central</h1>
    const a = 4;
    const b = 3;

    function subtitulo() {
        return <h2>{"subtitulo".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Página JSX">
            {titulo}
            {subtitulo()}
            {a * b}
        </Layout>
    )
}