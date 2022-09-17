function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.seguir}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>

    )
}

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" seguir="Segue você" />
            <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart" seguir="Segue você" />
            <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" seguir="Novo no Instagram" />
            <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals" seguir="Segue você" />
            <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats" seguir="Segue você" />
        </div>
    )
}