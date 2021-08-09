import React from 'react'
import {Link} from "react-router-dom";

const Cinema = ({ cinema }) => {
    console.log("CINEMA HASSSSSSSSSSS")
    console.log(cinema)
  return (
    <div style={{ textAlign:'left' }}>
      <div className='flex-box'>
        <p style={{ color: '#031221', fontWeight: 700, fontSize: 16}}>{cinema.tenCumRap || ''}</p>
      </div>
      <div className='cinema-address'>
        {cinema.diaChi && cinema.diaChi.length > 50 ? `${cinema.diaChi.substr(0,30)}...` : cinema.diaChi}
      </div>
      <Link to={`/cinema/${cinema.maCumRap}`} style={{ color: '#fd7e14'}}>Details</Link>
    </div>
  )
}

export default Cinema
