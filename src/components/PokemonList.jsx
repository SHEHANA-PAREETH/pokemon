import { memo } from 'react'
import PokemonDetail from './PokemonDetail'

const PokemonList = ({
  items,
  isLoading,
  error,
  page,
  pageSize,
  hasNext,
  onNext,
  onPrev,
  onSelect,
  selectedName,
  detailStatus,
  detailError,
  detailData,
  onClear
}) => {
  return (
    <section className="panel">
      <header className="panel-header">
        <h2>Pokémon</h2>
        <p className="panel-subtitle">
          Showing {items.length} of {pageSize} per page
        </p>
      </header>
      {isLoading && <p className="status">Loading Pokémon...</p>}
      {error && (
        <p className="status status-error">
          Could not load Pokémon. Please try again.
        </p>
      )}
      {!isLoading && !error && (
        <ul className="pokemon-list">
          {items.map((pokemon) => (
            <li key={pokemon.name} className="pokemon-item">
              <div className="pokemon-row">
                <span className="pokemon-name">{pokemon.name}</span>
                <button
                  className="button"
                  onClick={() =>
                    selectedName === pokemon.name
                      ? onClear()
                      : onSelect(pokemon.name)
                  }
                >
                  {selectedName === pokemon.name ? 'Hide Details' : 'View Details'}
                </button>
              </div>
              {selectedName === pokemon.name && (
                <div className="pokemon-detail-inline">
                  <PokemonDetail
                    name={selectedName}
                    data={detailData}
                    isLoading={detailStatus === 'loading'}
                    error={detailStatus === 'error' ? detailError : null}
                    onClear={onClear}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <footer className="pagination">
        <button
          className="button"
          onClick={onPrev}
          disabled={isLoading || page === 0}
        >
          Previous
        </button>
        <span className="pagination-status">Page {page + 1}</span>
        <button
          className="button"
          onClick={onNext}
          disabled={isLoading || !hasNext}
        >
          Next
        </button>
      </footer>
    </section>
  )
}

export default memo(PokemonList)

