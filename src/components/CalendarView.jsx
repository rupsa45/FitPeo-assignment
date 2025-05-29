import React from "react";
import { appointmentCards, calendarData } from "../data/CommonData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/CalendarView.css";
const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-title-section">
          <h2 className="calendar-title">{calendarData.month}</h2>
          <div className="calendar-nav">
            <button className="nav-btn">
              <ChevronLeft size={16} />
            </button>
            <button className="nav-btn">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days">
          {calendarData.days.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.dates.map((dateObj) => (
            <div
              key={dateObj.date}
              className={`date-cell ${dateObj.isActive ? "active" : ""}`}
            >
              <div className="date-number">{dateObj.date}</div>
              <div className="date-appointments">
                {dateObj.appointments.map((time, index) => {
                  const timeValue = typeof time === "string" ? time : time.time;
                  const isSelected = typeof time === "object" && time.selected;

                  return (
                    <div
                      key={index}
                      className={`appointment-time ${
                        isSelected ? "selected" : ""
                      }`}
                    >
                      {timeValue}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card) => (
          <div key={card.id} className="appointment-card">
            <div className="card-content">
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
              <div className="card-time">{card.time}</div>
              <div className="card-doctor">{card.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
