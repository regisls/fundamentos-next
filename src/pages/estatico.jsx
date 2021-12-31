import Layout from '../components/Layout';

// Pra geração de conteúdo estático somente do lado do servidor. Essa função gera os dados uma única vez
// e devolve o HTML já pré renderizado
export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

// Usando este método o HTML é pré renderizado do lado do servidor mas é gerado a cada requisição
// export async function getServerSideProps() {
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

export default function Estatico(props) {
    return (
        <Layout titulo="Conteudo estático">
            <div>{props.numero}</div>
        </Layout>
    )
}