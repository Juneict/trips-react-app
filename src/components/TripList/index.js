import React, { useState } from 'react'
import './index.css'
import useFetch from '../../hooks/useFetch'

export default function Index() {
  let [url, setUrl] = useState('http://localhost:3001/trips');
  let {data: trips, loading, error} = useFetch(url);
  
  return (
    <div className='trip-container'>
      {error && <p>{error}</p>}
      <h1 className='trip-title'>Ready to go !</h1>
      <p>{loading ? 'Loading...' : ''}</p>
      <div className='trip'>
      <button className='trip-btn' onClick={()=> setUrl('http://localhost:3001/trips')}>All</button>
      <button className='trip-btn' onClick={()=> setUrl('http://localhost:3001/trips?location=Myanmar')}>Trip in Myanmar</button>
      </div>
      <div className='trip-list'>
      <ul>
        {trips && trips.map(trip => <li key={trip.id}><h3>{trip.name}</h3><p>${trip.price}</p></li>)}
      </ul>
      </div> 
    </div>
  )
}
