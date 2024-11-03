import { useState, useEffect } from "react";
import TileGrid from "./components/TileGrid";
import './App.css';

function App() {
  const tileNumbers = [1,2,3,4,5,6,7,8].flatMap(num => [num,num]);

  const shuffleTiles = () => {
    return tileNumbers.slice().sort(() => Math.random() - 0.5).map((num,index) => ({
      id: index,
      number: num,
      flipped: false,
      matched: false,
    }));
  };

  const[tiles, setTiles] = useState(shuffleTiles);
  const[flippedTiles, setFlippedTiles] = useState([]);

  const handleTileClick = (id) => {
    if(
      flippedTiles.length === 2 || tiles.find((tile) => tile.id === id).matched || flippedTiles.includes(id)
    )
    return;

    const newTiles = tiles.map((tile) =>
      tile.id === id ? {...tile, flipped: true} : tile
    )

    setTiles(newTiles);
    setFlippedTiles([...flippedTiles, id]);

  };

  useEffect(() => {
    if(flippedTiles.length === 2){
      const[firstTile, secondTile] = flippedTiles.map((id) =>
        tiles.find((tile) => tile.id === id)
      );


      if(firstTile.number === secondTile.number){
        setTiles((prevTiles) => 
          prevTiles.map((tile) => 
            tile.number === firstTile.number
            ? {...tile, matched:true}
            :tile
          )
        );
      } else {
        setTimeout(() => {
          setTiles((prevTiles) =>
          prevTiles.map((tile) =>
            tile.id === firstTile.id || tile.id === secondTile.id
          ? {...tile, flipped: false}
          : tile
          )
          )
        }, 1000)
      }
      setFlippedTiles([]);

    } 


  }, [flippedTiles, tiles])


  const resetGame = () => {
    setTiles(shuffleTiles());
    setFlippedTiles([]);
  }

  return(
    <div className="app">
      <h1 className="text-center">Tile Match Game</h1>
      <button onClick={resetGame} className="reset-button">Reset Game</button>
      <TileGrid tiles= {tiles} onTileClick= {handleTileClick} />
    </div>
  )


}

export default App;