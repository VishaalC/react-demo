import { useEffect, useState } from 'react'
import styles from './DynamicTable.module.css'
import { DropDown } from '../DropDown/dropdown'
import { fetchData } from '../../utils/fetchDataSwitchCase'

export const DynamicTable = ({
  option,
  colorGenderSearchResults,
  fitTypeAndMaterial,
}) => {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    fetchData(
      option,
      setTableData,
      colorGenderSearchResults,
      fitTypeAndMaterial
    )
  }, [option, colorGenderSearchResults])

  function getHeaders(data) {
    return Object.keys(data[0]).map((key, idx) => {
      return (
        <th key={idx} className={styles.tableHeaders}>
          {key}
        </th>
      )
    })
  }

  function getRows(data) {
    return data.map((obj, idx) => {
      return <tr key={idx}>{getCells(obj)}</tr>
    })
  }

  function getCells(obj) {
    return Object.values(obj).map((value, idx) => {
      return (
        <td key={idx} className={styles.tableData}>
          {value}
        </td>
      )
    })
  }

  function generateTable(data) {
    return (
      <>
        {!colorGenderSearchResults && !fitTypeAndMaterial ? (
          <DropDown
            dropdownValues={tableData}
            option={option}
            setTableData={setTableData}
          ></DropDown>
        ) : null}
        <table className={styles.table}>
          <thead>
            <tr>{getHeaders(data)}</tr>
          </thead>
          <tbody>{getRows(data)}</tbody>
        </table>
      </>
    )
  }

  return <>{tableData ? generateTable(tableData) : null}</>
}
