import { useState } from "react";
import "./ProjectPreview.css";
import {
  FaCalendarCheck,
  FaSearchLocation,
  FaCut,
  FaPaw,
  FaNotesMedical,
  FaBoxes,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiHibernate,
} from "react-icons/si";

function ProjectPreview({ project }) {
  const [activeTab, setActiveTab] = useState(
    project.id === "elite-salon"
      ? "customer"
      : project.id === "asset-management-system"
      ? "inventory"
      : "records"
  );

  // If a genuine image path is supplied in the future
  if (project.image) {
    return (
      <div className="project-image-showcase">
        <img src={project.image} alt={project.title} className="real-project-img" />
      </div>
    );
  }

  // EliteSalon High-Fidelity Interactive Simulated UI Viewport
  if (project.mockupType === "salon") {
    return (
      <div className="simulated-browser-frame">
        {/* Browser Top Bar */}
        <div className="browser-topbar">
          <div className="browser-traffic-lights">
            <span className="light-dot red" />
            <span className="light-dot yellow" />
            <span className="light-dot green" />
          </div>
          <div className="browser-address-bar">
            <span className="https-lock">🔒</span>
            <span className="url-text">https://elitesalon.app/explore?pincode=395007</span>
          </div>
          <div className="browser-status-badge">MERN Active</div>
        </div>

        {/* Viewport Interior */}
        <div className="simulated-viewport salon-viewport">
          {/* Simulated App Header */}
          <div className="app-mock-header">
            <div className="app-mock-brand">
              <span className="salon-logo-mark"><FaCut /></span>
              <span className="app-name">Elite<span>Salon</span></span>
            </div>
            <div className="role-switcher">
              <button
                type="button"
                className={`role-pill-btn ${activeTab === "customer" ? "active" : ""}`}
                onClick={() => setActiveTab("customer")}
              >
                Customer Portal
              </button>
              <button
                type="button"
                className={`role-pill-btn ${activeTab === "owner" ? "active" : ""}`}
                onClick={() => setActiveTab("owner")}
              >
                Owner Dashboard
              </button>
            </div>
          </div>

          {/* Interactive Screen States */}
          {activeTab === "customer" ? (
            <div className="mock-screen-content">
              {/* Location Search Bar */}
              <div className="mock-search-strip">
                <FaSearchLocation className="search-ico" />
                <span className="search-val">Surat, Gujarat &bull; PIN 395007 (5 Salons Available)</span>
                <span className="search-btn-mock">Find Slots</span>
              </div>

              {/* Booking Card Preview */}
              <div className="salon-cards-list">
                <div className="salon-card-mock featured-mock">
                  <div className="salon-card-top">
                    <div>
                      <h4 className="salon-name">Luxe Unisex Salon & Spa</h4>
                      <p className="salon-address">City Light Road, Surat &bull; 0.8 km</p>
                    </div>
                    <span className="rating-tag">★ 4.9</span>
                  </div>

                  <div className="services-chips-mock">
                    <span className="svc-chip">Hair Styling</span>
                    <span className="svc-chip">Beard Grooming</span>
                    <span className="svc-chip">Facial Spa</span>
                  </div>

                  <div className="booking-status-footer">
                    <div className="booking-time-slot">
                      <FaCalendarCheck className="slot-ico" />
                      <span>Next Slot: <strong>11:30 AM Tomorrow</strong></span>
                    </div>
                    <span className="book-btn-mock">Book Appointment</span>
                  </div>
                </div>
              </div>

              <div className="api-telemetry-strip">
                <span><SiExpress /> Express REST Endpoint: <code>GET /api/v1/salons/pincode/395007</code></span>
                <span className="db-pill"><SiMongodb /> MongoDB Atlas</span>
              </div>
            </div>
          ) : (
            <div className="mock-screen-content">
              {/* Salon Owner Portal */}
              <div className="owner-dash-summary">
                <div className="dash-stat-box">
                  <span className="stat-label">Today's Appointments</span>
                  <span className="stat-number">14 Confirmed</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Active Stylists</span>
                  <span className="stat-number">4 on Duty</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Pending Reschedules</span>
                  <span className="stat-number">2 Requests</span>
                </div>
              </div>

              <div className="owner-action-list">
                <div className="owner-row">
                  <span>Client: Priya Patel &bull; Service: Hair Spa</span>
                  <span className="status-pill-green">Confirmed (11:30 AM)</span>
                </div>
                <div className="owner-row">
                  <span>Client: Rahul Shah &bull; Service: Beard Trim</span>
                  <span className="status-pill-blue">In Progress</span>
                </div>
              </div>

              <div className="api-telemetry-strip">
                <span><SiReact /> Role-Based Access: <code>Owner & Admin JWT Guard</code></span>
                <span className="db-pill"><SiNodedotjs /> Node Service</span>
              </div>
            </div>
          )}
        </div>

        {/* Screenshot Placeholder Note */}
        <div className="mockup-replace-notice">
          <span>Interactive Preview &bull; Ready for production screenshot (drop <code>src/assets/images/elitesalon.png</code>)</span>
        </div>
      </div>
    );
  }

  // Asset Management System Simulated UI Viewport
  if (project.mockupType === "asset") {
    return (
      <div className="simulated-browser-frame">
        {/* Browser Top Bar */}
        <div className="browser-topbar">
          <div className="browser-traffic-lights">
            <span className="light-dot red" />
            <span className="light-dot yellow" />
            <span className="light-dot green" />
          </div>
          <div className="browser-address-bar">
            <span className="https-lock">🔒</span>
            <span className="url-text">https://asset-hub.internal/dashboard/inventory</span>
          </div>
          <div className="browser-status-badge java-badge">Java &bull; Hibernate</div>
        </div>

        {/* Viewport Interior */}
        <div className="simulated-viewport asset-viewport">
          <div className="app-mock-header">
            <div className="app-mock-brand">
              <span className="asset-logo-mark"><FaBoxes /></span>
              <span className="app-name">Asset<span>Hub</span></span>
            </div>
            <div className="role-switcher">
              <button
                type="button"
                className={`role-pill-btn ${activeTab === "inventory" ? "active" : ""}`}
                onClick={() => setActiveTab("inventory")}
              >
                Asset Inventory
              </button>
              <button
                type="button"
                className={`role-pill-btn ${activeTab === "allocation" ? "active" : ""}`}
                onClick={() => setActiveTab("allocation")}
              >
                Allocations
              </button>
            </div>
          </div>

          {activeTab === "inventory" ? (
            <div className="mock-screen-content">
              <div className="owner-dash-summary">
                <div className="dash-stat-box">
                  <span className="stat-label">Total Assets</span>
                  <span className="stat-number">320 Tracked</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Active Assigned</span>
                  <span className="stat-number">264 Allocated</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Under Maintenance</span>
                  <span className="stat-number">18 In Service</span>
                </div>
              </div>

              <div className="pet-records-table-mock">
                <div className="pet-table-row header">
                  <span>Asset Code</span>
                  <span>Description</span>
                  <span>Department</span>
                  <span>Status</span>
                </div>
                <div className="pet-table-row">
                  <span className="pet-name-col">💻 AST-1042</span>
                  <span>MacBook Pro M2</span>
                  <span>Engineering</span>
                  <span className="status-pill-green">Allocated</span>
                </div>
                <div className="pet-table-row">
                  <span className="pet-name-col">🖥️ AST-2089</span>
                  <span>Dell UltraSharp 4K</span>
                  <span>UI/UX Team</span>
                  <span className="status-pill-green">Allocated</span>
                </div>
                <div className="pet-table-row">
                  <span className="pet-name-col">🌐 AST-3012</span>
                  <span>Cisco Catalyst Switch</span>
                  <span>Network Infra</span>
                  <span className="status-pill-orange">Maintenance</span>
                </div>
              </div>

              <div className="api-telemetry-strip">
                <span><SiHibernate /> Hibernate ORM 6.x &bull; Singleton SessionFactory</span>
                <span className="db-pill mysql"><SiMysql /> MySQL DB</span>
              </div>
            </div>
          ) : (
            <div className="mock-screen-content">
              <div className="owner-dash-summary">
                <div className="dash-stat-box">
                  <span className="stat-label">Departments</span>
                  <span className="stat-number">8 Units</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Return Requests</span>
                  <span className="stat-number">3 Pending</span>
                </div>
                <div className="dash-stat-box">
                  <span className="stat-label">Depreciation</span>
                  <span className="stat-number">8.2% / yr</span>
                </div>
              </div>

              <div className="owner-action-list">
                <div className="owner-row">
                  <span>Unit: Engineering &bull; 128 Active Hardware Units</span>
                  <span className="status-pill-green">Optimal</span>
                </div>
                <div className="owner-row">
                  <span>Unit: Design Studio &bull; 64 Workstations & Displays</span>
                  <span className="status-pill-blue">Active</span>
                </div>
              </div>

              <div className="api-telemetry-strip">
                <span><FaJava /> Java Singleton Pattern &bull; Connection Pooling</span>
                <span className="db-pill mysql"><SiMysql /> CRUD Operations</span>
              </div>
            </div>
          )}
        </div>

        {/* Screenshot Placeholder Note */}
        <div className="mockup-replace-notice">
          <span>Enterprise Java Preview &bull; Replaceable with <code>src/assets/images/assetmanagement.png</code></span>
        </div>
      </div>
    );
  }

  // PetCareHub Simulated Viewport
  return (
    <div className="simulated-browser-frame">
      <div className="browser-topbar">
        <div className="browser-traffic-lights">
          <span className="light-dot red" />
          <span className="light-dot yellow" />
          <span className="light-dot green" />
        </div>
        <div className="browser-address-bar">
          <span className="https-lock">🔒</span>
          <span className="url-text">https://petcarehub.local/vet-appointments.php</span>
        </div>
        <div className="browser-status-badge php-badge">PHP &bull; MySQL</div>
      </div>

      <div className="simulated-viewport petcare-viewport">
        <div className="app-mock-header">
          <div className="app-mock-brand">
            <span className="pet-logo-mark"><FaPaw /></span>
            <span className="app-name">Pet<span>CareHub</span></span>
          </div>
          <span className="system-tag">Academic Veterinary Portal</span>
        </div>

        <div className="mock-screen-content">
          <div className="vet-queue-card">
            <div className="vet-queue-header">
              <FaNotesMedical className="vet-ico" />
              <div>
                <h4>Veterinary Consultation Schedule</h4>
                <p>Surat Animal Health Clinic &bull; Dr. Sharma, B.V.Sc</p>
              </div>
            </div>

            <div className="pet-records-table-mock">
              <div className="pet-table-row header">
                <span>Pet Name</span>
                <span>Breed</span>
                <span>Visit Reason</span>
                <span>Status</span>
              </div>
              <div className="pet-table-row">
                <span className="pet-name-col">🐕 Max</span>
                <span>Golden Retriever</span>
                <span>Annual Vaccination</span>
                <span className="status-pill-green">Completed</span>
              </div>
              <div className="pet-table-row">
                <span className="pet-name-col">🐈 Luna</span>
                <span>Persian Cat</span>
                <span>Dental Checkup</span>
                <span className="status-pill-blue">Scheduled</span>
              </div>
              <div className="pet-table-row">
                <span className="pet-name-col">🐕 Rocky</span>
                <span>German Shepherd</span>
                <span>Post-Surgery Review</span>
                <span className="status-pill-orange">Under Review</span>
              </div>
            </div>
          </div>

          <div className="api-telemetry-strip">
            <span><SiPhp /> PHP 8.x PDO Architecture &bull; Full CRUD</span>
            <span className="db-pill mysql"><SiMysql /> MySQL Relational RDBMS</span>
          </div>
        </div>
      </div>

      <div className="mockup-replace-notice">
        <span>Academic Project Preview &bull; Replaceable with <code>src/assets/images/petcarehub.png</code></span>
      </div>
    </div>
  );
}

export default ProjectPreview;
