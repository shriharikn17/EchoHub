import React from 'react';
import '../../styles/DashBoard.css';
import Footer from '@/components/Footer';
export default function Dashboard() {
  // Mock data for user and tribes
  const user = {
    name: "John Doe",
    avatar: "/resources/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.avif"
  };

  const myTribes = [
    { id: 1, name: "Quantum Computing", icon: "/resources/QuantumComputer.jpg" },
    { id: 2, name: "Artificial Intelligence", icon: "/resources/ai.jpg" },
    { id: 3, name: "Music", icon: "/resources/vintdrums.jpeg" }
  ];

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <header className="dashboard-navbar">
        <div className="navbar-logo">
          <p className="navbar-title">TribeZone</p>
        </div>
        <div className="navbar-user">
          <img src={user.avatar} alt="User Avatar" className="user-avatar" />
          <span className="user-name">{user.name}</span>
          <button className="logout-button">Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Explore Tribes</h3>
            <button className="explore-button">Discover New Tribes</button>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">My Tribes</h3>
            <ul className="tribe-list">
              {myTribes.map(tribe => (
                <li key={tribe.id} className="tribe-item">
                  <img src={tribe.icon} alt={tribe.name} className="tribe-icon" />
                  <span>{tribe.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <button className="create-tribe-button">Create a Tribe</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <h2 className="main-title">Dashboard</h2>
          <div className="main-content">
            <p>Welcome to your TribeZone dashboard! Here you can manage your tribes, explore new communities, and engage with content.</p>
            {/* Placeholder for dynamic content */}
            <div className="content-placeholder">
              <p>Your recent activity and tribe updates will appear here.</p>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}