import React from "react"

function Post(props) {
    const [salvar, setSalvar] = React.useState(false)
    const [curtir, setCurtir] = React.useState(false)

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div class={(curtir===false)?"":"none"}>
                        <ion-icon name="heart-outline" onClick={()=>setCurtir(true)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class={(curtir===false)?"none":"espaco"}>
                        <ion-icon name="heart" onClick={()=>setCurtir(false)}></ion-icon>
                        <div class="black">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    </div>
                    <div class={(salvar === false) ? "" : "none"}>
                        <ion-icon name="bookmark-outline" onClick={() => setSalvar(true)}></ion-icon>
                    </div>
                    <div class={(salvar === false) ? "none" : ""}>
                        <ion-icon name="bookmark" onClick={()=> setSalvar(false)} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img onClick={()=>setCurtir(true)} src={props.imagemCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.ultimaCurtida}</strong> e <strong>outras {props.numeroCurtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    let listaPost = [
        {
            imagem: "assets/img/meowed.svg",
            nomeUsuario: "meowed",
            imagemConteudo: "assets/img/gato-telefone.svg",
            imagemCurtidas: "assets/img/respondeai.svg",
            ultimaCurtida: "respondeai",
            numeroCurtida: "101.523"
        },
        {
            imagem: "assets/img/barked.svg",
            nomeUsuario: "barked",
            imagemConteudo: "assets/img/dog.svg",
            imagemCurtidas: "assets/img/adorable_animals.svg",
            ultimaCurtida: "adorable_animals",
            numeroCurtida: "99.159"
        }
    ]

    return (
        <div class="posts">
            {listaPost.map((p) => (<Post
                imagem={p.imagem}
                nomeUsuario={p.nomeUsuario}
                imagemConteudo={p.imagemConteudo}
                imagemCurtidas={p.imagemCurtidas}
                ultimaCurtida={p.ultimaCurtida}
                numeroCurtida={p.numeroCurtida} />))}

        </div>
    )
}