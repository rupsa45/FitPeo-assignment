
import { healthData } from "../data/CommonData"
import "../styles/HealthStatusCards.css"

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="health-card-header">
            <div className="health-icon">
              <span>{item.icon}</span>
            </div>
            <h3 className="health-title">{item.name}</h3>
          </div>

          <div className="health-date">Date: {item.date}</div>

          <div className="health-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${item.progress}%`,
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      <div className="details-link">
        <a href="#" className="details-btn">
          Details <span className="arrow">→</span>
        </a>
      </div>
    </div>
  )
}

export default HealthStatusCards
