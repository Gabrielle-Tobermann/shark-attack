import React from 'react'
import { livingStudents } from '../helpers/data/studentsData'
import LiveStudent from './LiveStudent'

function SharkTank({ livingStudents }) {
  return (
    <div className="SharkTank">
      {livingStudents.array.forEach((element) => {
        <LiveStudent
        firstName={element.firstName}
        lastName={element.lastName}
        />
      })}
    </div>
  )
}

export default SharkTank;
