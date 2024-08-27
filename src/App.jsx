import { useState } from 'react'
import { DynamicTable } from './components/DynamicTable/DynamicTable'
import { FilteredSearch } from './components/FilteredSearch/FilteredSearch'

function App() {
  const [option, setOption] = useState()
  const optionValues = [
    'getRevenueByBrand',
    'findPopularProductsByBrand',
    'maxPriceProduct',
    'popularSizesPerBrand',
  ]
  return (
    <>
      {optionValues.map((buttonValue, idx) => (
        <button onClick={() => setOption(buttonValue)} key={idx}>
          {buttonValue}
        </button>
      ))}

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
