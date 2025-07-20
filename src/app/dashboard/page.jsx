'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/DashBoard.css';
import Link from 'next/link';
import { tribes } from '../mockdata';
import DNavbar from '../../components/DNavbar';
import Footer from '@/components/Footer';
import { onAuthChange } from '../../lib/authService';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (!user) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe && unsubscribe();
  }, [router]);

  if (loading) return null;

  return (
    <>
    <DNavbar/>
    <div className="dashboard-container">
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Explore Tribes</h3>
            <Link href="/explore-tribes">
              <button className="explore-button">Discover New Tribes</button>
            </Link>
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">My Tribes</h3>
            <ul className="tribe-list">
              {tribes.map(tribe => (
                <li key={tribe.id} className="tribe-item">
                  <Link href={`/tribes/${tribe.id}`} className="tribe-link">
                    <img src={tribe.icon} alt={tribe.name} className="tribe-icon" />
                    <span>{tribe.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <Link href="/create-tribe">
              <button className="create-tribe-button">Create a Tribe</button>
            </Link>
          </div>
        </aside>
        <main className="dashboard-main">
          <h2 className="main-title">Dashboard</h2>
          <div className="main-content">
            <p>Welcome to your TribeZone dashboard! Here you can manage your tribes, explore new communities, and engage with content.</p>
            <div className="content-placeholder">
              <p>Your recent activity and tribe updates will appear here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>
  );
}