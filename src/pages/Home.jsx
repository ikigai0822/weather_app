import React from 'react'
import './Home.css'
import SearchBar from '../components/SearchBar'
import Information from '../components/Information'
const Home = () => {
  return (
    <div className="Component">
      <image className="Image" />
      <div className="w-9/12 h-4/5 ">
        <SearchBar />
        <Information />
      </div>
    </div>
  )
}

export default Home
