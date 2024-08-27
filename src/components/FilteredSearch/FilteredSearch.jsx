import { useState } from 'react'
import { filteredSearchByColorAndGender } from '../../services/filteredSearch.service'
import { filteredSearchByMaterialAndFit } from '../../services/filteredSearch.service'
import { DynamicTable } from '../DynamicTable/DynamicTable'

export const FilteredSearch = ({ text, option }) => {
  const [searchResults, setSearchResults] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    switch (option) {
      case 'colorGender':
        const [color, gender] = event.target[0].value.split(',')
        const ColorAndGenderData = await filteredSearchByColorAndGender(
          color,
          gender
        )
        setSearchResults(ColorAndGenderData.data)
        break
      case 'fitAndMaterial':
        const [fit_type, material, startRange, endRange] =
          event.target[0].value.split(',')
        const MaterialAndGenderData = await filteredSearchByMaterialAndFit(
          fit_type,
          material,
          startRange,
          endRange
        )
        setSearchResults(MaterialAndGenderData.data)
        break
    }
  }

  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <p>{text}</p>
        <input type="text" name="searchColorAndGender" />
        <button>Submit</button>
      </form>
      <DynamicTable
        option={option}
        colorGenderSearchResults={searchResults}
        fitTypeAndMaterial={searchResults}
      ></DynamicTable>
    </>
  )
}
