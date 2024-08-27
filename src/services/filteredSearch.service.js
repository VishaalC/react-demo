import axios from 'axios'

export const filteredSearchByColorAndGender = async (color, gender) => {
  const data = await axios.get(
    'http://localhost:3000/products/searchByColorAndGender',
    { params: { color: color, gender: gender } }
  )
  return data.data
}

export const filteredSearchByMaterialAndFit = async (
  fit_type,
  material,
  start,
  end
) => {
  const data = await axios.get(
    `http://localhost:3000/products/searchBetweenPriceRange`,
    {
      params: {
        fit_type: fit_type,
        material: material,
        start: start,
        end: end,
      },
    }
  )
  return data.data
}
