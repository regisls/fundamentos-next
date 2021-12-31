import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientePorCodigo() {
    // O useRouter vai procurar um parametro com o nome entre [], nesse caso, código
    const router = useRouter();

    return (
        <Layout titulo="Navegação dinâmica">
            <div>Filial - {router.query.filial}</div>
            <div>Codigo - {router.query.codigo}</div>
        </Layout>
    )
}