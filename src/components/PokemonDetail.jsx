const PokemonDetail = ({
  name,
  data,
  isLoading,
  error,
  onClear
}) => {
  if (!name) {
    return null
  }

  return (
    <div className="pokemon-detail-card">
      <div className="detail-card-header">
        <h3>{name}</h3>
        <button className="button button-secondary" onClick={onClear}>
          Close
        </button>
      </div>
      {isLoading && <p className="status">Loading details...</p>}
      {error && (
        <p className="status status-error">
          Could not load details. Please try again.
        </p>
      )}
      {data && !isLoading && !error && (
        <div className="pokemon-detail">
          {data.sprites?.front_default ? (
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="pokemon-sprite"
            />
          ) : (
            <div className="pokemon-sprite placeholder">
              <span>No sprite</span>
            </div>
          )}
          <ul className="pokemon-meta">
            <li>
              <span className="meta-label">Name:</span>
              <span>{data.name}</span>
            </li>
            <li>
              <span className="meta-label">ID:</span>
              <span>{data.id}</span>
            </li>
            <li>
              <span className="meta-label">Weight:</span>
              <span>{data.weight}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default PokemonDetail

