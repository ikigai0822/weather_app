import React from 'react'
import { useState } from 'react'
import { getWeather } from '../apikeys'

export default function SearchBar() {
  const [data, setdata] = useState({ city: 'Delhi', country: '' })
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country)
  }
  return (
    <form class="w-full max-w bg-slate-600 p-10px">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="City"
          aria-label="Full name"
          onChange={(e) => handleChange(e)}
          name="city"
        />
        <input
          class="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Country"
          aria-label="Full name"
          onChange={(e) => handleChange(e)}
          name="country"
        />

        <button
          className="p-2 mx-4 text-white bg-purple-600 rounded-full hover:bg-slate-400"
          onClick={() => getWeatherInfo()}
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
