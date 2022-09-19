import React from "react"

function DadosUsuario(props) {
    
    function alteraNomeUsuario(){
        let newNome= prompt("Digite seu nome")
        props.setNomeUsuario(newNome)
    }

    function alteraNomeInstagram(){
        let newNomeInstagram=prompt("Sigite seu nome")
        props.setNomeInstagram(newNomeInstagram)
    }

    function alteraImagem(){
        let newImagem=prompt("Coloque aqui p link da imagem")
        props.setImagem(newImagem)
    }
   
    return (
        <div class="usuario">
            <img onClick={alteraImagem} src={(props.imagem===""||props.imagem===null)?("https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"):props.imagem} />
            <div class="texto">
                <strong>{(props.nomeInstagram===""||props.nomeInstagram===null)?"@Usuário":props.nomeInstagram} <ion-icon name="pencil" onClick={alteraNomeInstagram} ></ion-icon></strong>
                <span>
                    {(props.nomeUsuario===""||props.nomeUsuario===null)?"Nome não informado":props.nomeUsuario}
                    <ion-icon name="pencil" onClick={alteraNomeUsuario} ></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {
    const [nomeUsuario, setNomeUsuario]= React.useState("Catana")
    const [nomeInstagram, setNomeInstagram]= React.useState("catanacomics")
    const [imagem, setImagem]= React.useState("assets/img/catanacomics.svg")

    return (
            <DadosUsuario
                imagem={imagem}
                nomeInstagram= {nomeInstagram}
                nomeUsuario={nomeUsuario} 
                setNomeUsuario={setNomeUsuario}
                setNomeInstagram={setNomeInstagram}
                setImagem={setImagem}/>
    )
}