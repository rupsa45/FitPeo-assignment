import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import HealthStatusCards from "./HealthStatusCards";
import UpcomingSchedule from "./UpcomingSchedule";
import "../styles/Maindashboard.css";

const Maindashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="left-part">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashdashboard-mainboard-filter">
            <span className="filter-text">This Week</span>
            <span className="filter-arrow">▼</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="anatomy-column">
            <AnatomySection />
          </div>

          <div className="health-status-column">
            <HealthStatusCards />
          </div>
        </div>
        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>

      <div className="right-part">
        <div className="calendar-column">
          <CalendarView />
          <div className="schedule-section">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindashboard;
