'use client';
import React, { useEffect, useState } from 'react';
import '../../styles/DashBoard.css';
import Link from 'next/link';
import { tribes } from '../mockdata';
import DNavbar from '../../components/DNavbar';
import Footer from '@/components/Footer';
import { onAuthChange } from '../../lib/authService';
import { useRouter } from 'next/navigation';

export default function DashBoard() {
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
    <div className="db-container">
      <div className="db-content">
        <aside className="db-sidebar">
          <div className="db-sidebar-section">
            <h3 className="db-sidebar-title">Explore Tribes</h3>
            <Link href="/explore-tribes">
              <button className="db-explore-button">Discover New Tribes</button>
            </Link>
          </div>
          <div className="db-sidebar-section">
            <h3 className="db-sidebar-title">My Tribes</h3>
            <ul className="db-tribe-list">
              {tribes.map(tribe => (
                <li key={tribe.id} className="db-tribe-item">
                  <Link href={`/tribes/${tribe.id}`} className="db-tribe-link">
                    <img src={tribe.icon} alt={tribe.name} className="db-tribe-icon" />
                    <span>{tribe.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="db-sidebar-section">
            <Link href="/create-tribe">
              <button className="db-create-tribe-button">Create a Tribe</button>
            </Link>
          </div>
        </aside>
        <main className="db-main">
          <h2 className="db-main-title">Dashboard</h2>
          <div className="db-main-content">
            <p>Welcome to your TribeZone Dashborad! Here you can manage your tribes, explore new communities, and engage with content.</p>
            <div className="db-content-placeholder">
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