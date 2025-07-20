'use client';
import React from 'react';
import '../styles/DNavbar.css';
import Link from 'next/link';

export default function DNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link href="/dashboard" className="navbar-title">TribeZone</Link>
      </div>
      <div className="navbar-user">
        <img src="/resources/user-avatar.jpg" alt="User Avatar" className="user-avatar" />
        <span className="user-name">John Doe</span>
        <Link className="logout-button" href='/login'>Logout</Link>
      </div>
    </header>
  );
}