import {
  sendRequestForFilteredRevenueByBrand,
  getFilteredPopularProductByBrand,
  getFilteredMaxPriceProduct,
  filterPopularSizesPerBrand,
} from '../../services/dropDown.service'

import { fetchData } from '../../utils/fetchDataSwitchCase'

export const DropDown = ({ dropdownValues, option, setTableData }) => {
  const handleChange = async (e) => {
    switch (option) {
      case 'getRevenueByBrand':
        const filteredRevenueData = await sendRequestForFilteredRevenueByBrand(
          e.target.value
        )
        setTableData(() => [filteredRevenueData.data[0]])
        break
      case 'findPopularProductsByBrand':
        const filteredPopularProductData =
          await getFilteredPopularProductByBrand(e.target.value)
        setTableData(() => [filteredPopularProductData.data[0]])
        break
      case 'maxPriceProduct':
        const filteredPrice = await getFilteredMaxPriceProduct(e.target.value)
        setTableData(() => [filteredPrice.data[0]])
        break
      case 'popularSizesPerBrand':
        const popularSizes = await filterPopularSizesPerBrand(e.target.value)
        setTableData(() => [popularSizes.data[0]])
        break
    }
  }

  return (
    <>
      <select
        defaultValue={'DEFAULT'}
        name="brand-options"
        id="brand-options"
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled>
          Choose An Option
        </option>
        {dropdownValues.map((option, idx) => (
          <option value={option?.brand_name} key={idx}>
            {option?.brand_name}
          </option>
        ))}
      </select>
      <button onClick={() => fetchData(option, setTableData)}>Reset</button>
    </>
  )
}
