import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", height: "100vh"}}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="#2d3" />
            <Navegador destino="/jsx" texto="JSX" />
            <Navegador destino="/navegacao" texto="Navegacação #01" cor="#FF7F3F" />
            <Navegador destino="/cliente/rs/123" texto="Navegacação dinâmica filial/cliente" cor="#95CD41" />
            <Navegador destino="/estado" texto="Componente com estado" cor="#00F" />
            <Navegador destino="/integracao_1" texto="Integracao com API #01" />
            <Navegador destino="/estatico" texto="Conteúdo estático" />
        </div>
    )
}