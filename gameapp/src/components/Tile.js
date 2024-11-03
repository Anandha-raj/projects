function Tile({tile, onClick}) {
    console.log(tile)
    return (
        <div 
            className={`tile ${tile.flipped ? "flipped" : ""} 
            ${tile.matched ? "matched" : ""}`}
            onClick={onClick}
        >
            {tile.flipped || tile.matched ? tile.number : "Flip" }
        </div>

    )
}

export default Tile;