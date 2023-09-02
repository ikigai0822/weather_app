import React from 'react'
import './Home.css'
import { useState } from 'react'
import Information from '../components/Information'
import SearchBar from '../components/SearchBar'
const Home = () => {
  const [result, setResult] = useState({})

  return (
    <div className="component">
      <img className="image" />
      <div className="w-9/12 h-4/5 ">
        <SearchBar setResult={setResult} />
        <Information result={result} />
      </div>
    </div>
  )
}

export default Home
