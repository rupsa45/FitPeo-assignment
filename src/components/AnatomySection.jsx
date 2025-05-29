import { anatomyIndicators } from "../data/CommonData"
import anatomy from '../assets/anatomy.png'


const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-body">
          <img
            src={anatomy}
            alt="Human anatomy"
            className="anatomy-image"
            width={250}
            height="400"
          />

          {/* {anatomyIndicators.map((indicator) => (
            <div
              key={indicator.id}
              className="anatomy-indicator"
              style={{
                position: "absolute",
                ...indicator.position,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="indicator-badge" style={{ backgroundColor: indicator.color }}>
                <span className="indicator-icon">❤️</span>
                <span className="indicator-text">{indicator.name}</span>
              </div>
            </div>
          ))} */}

          <div className="zoom-control">
            <div className="zoom-track">
              <div className="zoom-handle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
