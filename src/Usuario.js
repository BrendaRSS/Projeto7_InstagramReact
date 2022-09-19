import React from "react"

export default function Usuario() {
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")
    const [nickname, setNickname] = React.useState("catanacomics")
    const [nome, setNome] = React.useState("Catana")

    function alteraImagem(){
        let newImagem= prompt("Coloque o link da nova imagem")
        setImagem(newImagem)
    }

    function alteraNickname(){
        let newNickname=prompt("Digite seu nickname")
        setNickname(newNickname)
    }

    function alteraNome() {
        let newNome = prompt("Digite seu nome")
        setNome(newNome)
    }

    return (
        <div class="usuario">
            <img onClick={alteraImagem} src={(imagem===""||imagem===null)? "https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg":imagem} />
            <div class="texto">
                <strong>{(nickname===""||nickname===null)?"@usuario":nickname} <ion-icon name="pencil" onClick={alteraNickname} ></ion-icon></strong>
                <span>
                    {(nome=== ""||nome=== null)?"Nome não informado":nome}
                    <ion-icon name="pencil" onClick={alteraNome} ></ion-icon>
                </span>
            </div>
        </div>
    )
}