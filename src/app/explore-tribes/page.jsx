'use client';
import React from 'react';
import '../../styles/ExploreTribes.css';
import Link from 'next/link';
import { tribes } from '../mockdata';
import DNavbar from '@/components/DNavbar';
export default function ExploreTribes() {
  return (
    <div className="explore-tribes-container">
    <DNavbar/>
      <h2 className="explore-tribes-title">Explore Tribes</h2>
      <div className="tribes-grid">
        {tribes.map(tribe => (
          <Link key={tribe.id} href={`/tribes/${tribe.id}`} className="tribe-card">
            <img src={tribe.icon} alt={tribe.name} className="tribe-card-icon" />
            <div className="tribe-card-content">
              <h3 className="tribe-card-title">{tribe.name}</h3>
              <p className="tribe-card-description">{tribe.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}