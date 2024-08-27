import axios from 'axios'

export const sendRequestForFilteredRevenueByBrand = async (filter_brand) => {
  const data = await axios.get(
    `http://localhost:3000/products/filterRevenueByBrand`,
    { params: { filter_brand } }
  )
  return data.data
}

export const getFilteredPopularProductByBrand = async (filter_brand) => {
  const data = await axios.get(
    `http://localhost:3000/products/filterpopularProductsByBrand`,
    { params: { filter_brand } }
  )
  return data.data
}

export const getFilteredMaxPriceProduct = async (filter_brand) => {
  const data = await axios.get(
    `http://localhost:3000/products/filterMaxPriceProduct`,
    { params: { filter_brand } }
  )
  return data.data
}

export const filterPopularSizesPerBrand = async (filter_brand) => {
  const data = await axios.get(
    `http://localhost:3000/products/filterPopularSizesPerBrand`,
    { params: { filter_brand } }
  )
  return data.data
}
