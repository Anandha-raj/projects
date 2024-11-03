import Tile from "./Tile";
function TileGrid({tiles, onTileClick}) {
    return(
        <div className="tile-grid">
            {tiles.map((tile) => (
                <Tile
                    key={tile.id}
                    tile={tile}
                    onClick={() => onTileClick(tile.id)}
                />
            ))}
        </div>
    )
}
export default TileGrid;