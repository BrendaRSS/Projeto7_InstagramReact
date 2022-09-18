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
    let listaSugestao = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", seguir: "Segue você" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", seguir: "Segue você" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", seguir: "Novo no Instagram" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", seguir: "Segue você" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", seguir: "Segue você" }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {listaSugestao.map((s) => (<Sugestao
                imagem={s.imagem}
                nome={s.nome}
                seguir={s.seguir} />))}
        </div>
    )
}