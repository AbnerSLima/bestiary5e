import './Cards.css'

export function Cards(props) {
  return (
    <div className="listCard">
      <div className="listImg">
          <img src="" alt="imagem do monstro" />
      </div>
      <div className="listData">
        <h2
          id="listName">
          DRAGÃO VERMELHO ANCIÃO
        </h2>
        <span
          id="listNd">
            ND: 24
        </span>
        <span
          id="listType">
          Dragão
        </span>
        <span
          id="sizeList">
          Imenso
        </span>
      </div>
    </div> 
  )
}