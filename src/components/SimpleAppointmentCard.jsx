import React from 'react'
import '../styles/SimpleAppointmentCard.css' 

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-content">
        <div className="appointment-header">
          <h4 className="appointment-title">{appointment.title}</h4>
          <span className="appointment-icon">{appointment.icon}</span>
        </div>
        <div className="appointment-time">{appointment.time}</div>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
