import React from 'react'
import './Self.css'
import {Link} from "react-router-dom"

function Self() {
  return (
    <div className='selfbg'>
      <form>
        <Link to="/Empdet"><button className="addbutton1" type="button">ADD Employee</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Update"><button className="addbutton2"type="button">UPDATE Employee</button></Link>

        </form>
    </div>
  )
}

export default Self
