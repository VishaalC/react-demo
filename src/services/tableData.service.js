import axios from 'axios'
export const getRevenueByBrand = async () => {
  const data = await axios.get(
    'http://localhost:3000/products/getRevenueByBrand'
  )
  return data.data
}

export const findPopularProductsByBrand = async () => {
  const data = await axios.get(
    'http://localhost:3000/products/popularProductsByBrand'
  )
  return data.data
}

export const maxPriceProduct = async () => {
  const data = await axios.get('http://localhost:3000/products/maxPriceProduct')
  return data.data
}

export const popularSizesPerBrand = async () => {
  const data = await axios.get(
    'http://localhost:3000/products/popularSizesPerBrand'
  )
  return data.data
}
