
import SimpleAppointmentCard from "./SimpleAppointmentCard"
import "../styles/UpcomingSchedule.css"
import { upcomingSchedule } from "../data/CommonData"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">{daySchedule.day}</h3>
          <div className="day-appointments">
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
