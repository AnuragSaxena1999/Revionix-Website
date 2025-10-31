import React from 'react'
import './Pages.css'

function Dashboard() {
  const metrics = [
    { label: 'Revenue Collected', value: '$2.4M', change: '+12.5%', trend: 'up' },
    { label: 'Claims Processed', value: '15,234', change: '+8.2%', trend: 'up' },
    { label: 'Denial Rate', value: '3.2%', change: '-1.8%', trend: 'down' },
    { label: 'Average Days AR', value: '28 days', change: '-5 days', trend: 'down' }
  ]

  const recentActivity = [
    { id: 1, type: 'Claim', description: 'Batch #1234 submitted successfully', time: '2 hours ago', status: 'success' },
    { id: 2, type: 'Payment', description: 'Payment received: $45,230', time: '4 hours ago', status: 'success' },
    { id: 3, type: 'Alert', description: 'High denial rate detected in Cardiology', time: '6 hours ago', status: 'warning' },
    { id: 4, type: 'Report', description: 'Monthly revenue report generated', time: '1 day ago', status: 'info' }
  ]

  return (
    <div className="page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="btn btn-primary">Generate Report</button>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-change ${metric.trend}`}>
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Revenue Overview</h2>
            <div className="period-selector">
              <button className="period-btn active">30 Days</button>
              <button className="period-btn">90 Days</button>
              <button className="period-btn">1 Year</button>
            </div>
          </div>
          <div className="chart-placeholder">
            <div className="chart-content">
              <p>📊 Revenue Trend</p>
              <small>Performance over the last 30 days</small>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">{activity.type === 'Claim' ? '📋' : activity.type === 'Payment' ? '💰' : activity.type === 'Alert' ? '⚠️' : '📄'}</div>
                <div className="activity-content">
                  <div className="activity-type">{activity.type}</div>
                  <div className="activity-description">{activity.description}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
                <div className={`activity-status ${activity.status}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-button">
            <div className="action-icon">📊</div>
            <div className="action-label">View Reports</div>
          </button>
          <button className="action-button">
            <div className="action-icon">💰</div>
            <div className="action-label">Process Payments</div>
          </button>
          <button className="action-button">
            <div className="action-icon">📋</div>
            <div className="action-label">Submit Claims</div>
          </button>
          <button className="action-button">
            <div className="action-icon">⚙️</div>
            <div className="action-label">Settings</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

