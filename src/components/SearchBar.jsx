import { useState } from 'react'
import { getWeather } from '../api'

const SearchBar = ({ setResult }) => {
  const [data, setData] = useState({ city: '', country: '' })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data.city, data.country)
  }

  const getWeatherInfo = async (event) => {
    event.preventDefault() // Prevent page refresh

    let response = await getWeather(data.city, data.country)
    setResult(response)
  }

  return (
    <form className="w-full max-w bg-slate-600 p-10px">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="City"
          aria-label="City"
          onChange={(e) => handleChange(e)}
          name="city"
        />
        <input
          className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Country"
          aria-label="Country"
          onChange={(e) => handleChange(e)}
          name="country"
        />

        <button
          className="p-2 mx-4 text-white bg-purple-600 rounded-full hover:bg-slate-400"
          onClick={(e) => getWeatherInfo(e)} // Pass the event object to getWeatherInfo
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
