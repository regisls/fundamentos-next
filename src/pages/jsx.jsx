export default function() {
    const titulo = <h1>JSX é um conceito central</h1>
    const a = 4;
    const b = 3;

    function subtitulo() {
        return <h2>{"subtitulo".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}
            {a * b}
        </div>
    )
}