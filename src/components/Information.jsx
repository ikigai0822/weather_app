import React from 'react'
import './Information.css'
import PageNotFound from '../pages/PageNotFound'
const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <div class=" table-data relative overflow-x-hidden ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Location
            </th>
            <td class="px-6 py-4">{result.name}</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Temperature
            </th>
            <td class="px-6 py-4">{result.main.temp}</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Humidity
            </th>
            <td class="px-6 py-4">{result.main.humidity}</td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Sunrise
            </th>
            <td class="px-6 py-4">
              {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Sunset
            </th>
            <td class="px-6 py-4">
              {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div>Please Enter Values to Check Weather</div>
  )
}
// const Information = ({ result }) => {
//   return result && Object.keys(result).length > 0 ? (
//     <div className="">
//       <ul>
//         <li>Location: {result.name}</li>
//         <li>Temperature: {result.main.temp}</li>
//         <li>Humidity: {result.main.humidity}</li>
//         <li>
//           Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
//         </li>
//         <li></li>
//       </ul>
//     </div>
//   ) : <div>Please Enter Values to Check Weather</div>
// }

export default Information
