import { useState } from 'react'
import { DynamicTable } from './components/DynamicTable/DynamicTable'
import { FilteredSearch } from './components/FilteredSearch/FilteredSearch'

function App() {
  const [option, setOption] = useState()

  return (
    <>
      <button
        onClick={() => {
          setOption('getRevenueByBrand')
        }}
      >
        <p>Click to get revenue by brand</p>
      </button>
      <button
        onClick={() => {
          setOption('findPopularProductsByBrand')
        }}
      >
        <p>Click to get popular products by brand</p>
      </button>
      <button
        onClick={() => {
          setOption('maxPriceProduct')
        }}
      >
        <p>Click to get max price of product by brand</p>
      </button>
      <button
        onClick={() => {
          setOption('popularSizesPerBrand')
        }}
      >
        <p>Click to get popular sizes per brand</p>
      </button>

      <FilteredSearch
        text={'Search By Color and Gender [Comma Separated]'}
        option={'colorGender'}
      ></FilteredSearch>
      <FilteredSearch
        text={'Search By Fit Type, Material And Range'}
        option={'fitAndMaterial'}
      ></FilteredSearch>

      {option && <DynamicTable option={option}></DynamicTable>}
    </>
  )
}

export default App
