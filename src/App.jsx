import { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList'

const PAGE_SIZE = 20

const buildListUrl = (page) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`

const buildDetailUrl = (name) =>
  `https://pokeapi.co/api/v2/pokemon/${name}`

function App() {
  const [page, setPage] = useState(0)
  const [list, setList] = useState([])
  const [listStatus, setListStatus] = useState('idle')
  const [listError, setListError] = useState(null)
  const [hasNext, setHasNext] = useState(false)

  const [selectedName, setSelectedName] = useState(null)
  const [detailData, setDetailData] = useState(null)
  const [detailStatus, setDetailStatus] = useState('idle')
  const [detailError, setDetailError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const loadList = async () => {
      setListStatus('loading')
      setListError(null)
      try {
        const response = await fetch(buildListUrl(page), {
          signal: controller.signal
        })
        if (!response.ok) {
          throw new Error('Failed to load Pokémon list')
        }
        const data = await response.json()
        setList(data.results ?? [])
        setHasNext(Boolean(data.next))
        setListStatus('success')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setListStatus('error')
          setListError(error.message)
        }
      }
    }
    loadList()

    return () => controller.abort()
  }, [page])

  useEffect(() => {
    if (!selectedName) {
      setDetailData(null)
      setDetailError(null)
      setDetailStatus('idle')
      return
    }

    const controller = new AbortController()

    const loadDetail = async () => {
      setDetailStatus('loading')
      setDetailError(null)
      try {
        const response = await fetch(buildDetailUrl(selectedName), {
          signal: controller.signal
        })
        if (!response.ok) {
          throw new Error('Failed to load Pokémon detail')
        }
        const data = await response.json()
        setDetailData(data)
        setDetailStatus('success')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setDetailStatus('error')
          setDetailError(error.message)
        }
      }
    }

    loadDetail()

    return () => controller.abort()
  }, [selectedName])

  const handleNext = () => setPage((prev) => prev + 1)
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0))

  const handleSelect = (name) => setSelectedName(name)
  const handleClear = () => setSelectedName(null)

  return (
    <main className="layout">
      <h1 className="app-title">Pokémon Browser</h1>
      <PokemonList
        items={list}
        isLoading={listStatus === 'loading'}
        error={listStatus === 'error' ? listError : null}
        page={page}
        pageSize={PAGE_SIZE}
        hasNext={hasNext}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelect={handleSelect}
        selectedName={selectedName}
        detailStatus={detailStatus}
        detailError={detailError}
        detailData={detailData}
        onClear={handleClear}
      />
    </main>
  )
}

export default App
