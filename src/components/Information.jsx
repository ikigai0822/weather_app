import React from 'react'
import './Information.css'
import PageNotFound from '../pages/PageNotFound'

const Information = ({ result }) => {
  
  return result && Object.keys(result).length > 0 ? (
    <div class=" table-data relative overflow-x-hidden ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-b border-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-large -my-0.5 text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Location
            </th>
            <td class="px-6 py-4 text-gray-500">{result.name}</td>
          </tr>
          <tr class="border-b border-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Temperature
            </th>
            <td class="px-6 py-4 text-gray-500">{result.main.temp}</td>
          </tr>
          <tr class="border-b border-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Humidity
            </th>
            <td class="px-6 py-4 text-gray-500">{result.main.humidity}</td>
          </tr>
          <tr class="border-b border-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              Sunrise
            </th>
            <td class="px-6 py-4 text-gray-500">
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
            <td class="px-6 py-4 text-gray-500">
              {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div
      class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
      role="alert"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
      </svg>
      <p>Please Enter Values to Check Weather</p>
    </div>
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
