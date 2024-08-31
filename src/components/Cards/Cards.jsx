import { useState, useEffect } from 'react'
import './Cards.css'

export function Cards(props) {
    const [monstersList, setMonstersList] = useState([]);

    useEffect(() => {
      fetch('/monsterList.jsaon')
          .then(response => response.json())
          .then(data => setMonstros(data));
    }, []);

  return (
    <div className="listCard bs-3 bg-2 border">
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
          id="listSize">
          Imenso
        </span>
      </div>
    </div> 
  )
}