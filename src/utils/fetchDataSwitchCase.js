import {
  getRevenueByBrand,
  findPopularProductsByBrand,
  maxPriceProduct,
  popularSizesPerBrand,
} from '../services/tableData.service'

export const fetchData = async (
  option,
  setTableData,
  colorGenderSearchResults,
  fitTypeAndMaterial
) => {
  switch (option) {
    case 'getRevenueByBrand':
      const revenueBrand = await getRevenueByBrand()
      setTableData(revenueBrand.data)
      break
    case 'findPopularProductsByBrand':
      const popularProductsBrand = await findPopularProductsByBrand()
      setTableData(popularProductsBrand.data)
      break
    case 'maxPriceProduct':
      const maxPrices = await maxPriceProduct()
      setTableData(maxPrices.data)
      break
    case 'popularSizesPerBrand':
      const popularSizes = await popularSizesPerBrand()
      setTableData(popularSizes.data)
      break
    case 'colorGender':
      setTableData(colorGenderSearchResults)
      break
    case 'fitAndMaterial':
      setTableData(fitTypeAndMaterial)
      break
  }
}
