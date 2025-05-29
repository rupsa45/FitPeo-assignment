import React from 'react'
import { activityData } from '../data/CommonData'
import '../styles/ActivityFeed.css'
const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <div className="activity-summary">3 appointment on this week</div>
      </div>

      <div className="activity-chart">
        <div className="chart-container">
          {activityData.map((dayData, index) => (
            <div key={index} className="chart-day">
              <div className="chart-bars">
                {dayData.values.map((value, barIndex) => (
                  <div key={barIndex} className={`chart-bar bar-${barIndex}`} style={{ height: `${value}%` }}></div>
                ))}
              </div>
              <div className="chart-day-label">{dayData.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
