'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/CreateTribe.css';
import Link from 'next/link';
import { tribes } from '../mockdata';
import DNavbar from '../../components/DNavbar.jsx'

export default function CreateTribe() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  console.log('Imported tribes in CreateTribe:', tribes);

  const handleCreateTribe = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!tribes) {
      setError('Tribe data is unavailable. Please try again later.');
      console.error('tribes is undefined in handleCreateTribe');
      return;
    }

    const name = e.target.parentNode.querySelector('#tribe-name').value;
    const description = e.target.parentNode.querySelector('#tribe-description').value;
    const icon = e.target.parentNode.querySelector('#tribe-icon').files[0]?.name || '/resources/default-icon.png';

    if (!name.trim() || !description.trim()) {
      setError('Tribe name and description are required.');
      console.error('Validation failed: Name or description empty');
      return;
    }

    const newTribe = {
      id: tribes.length + 1,
      name,
      description,
      icon
    };

    try {
      tribes.push(newTribe);
      console.log('New tribe added:', newTribe);
      setSuccess('Tribe created successfully!');
      e.target.parentNode.querySelector('#tribe-name').value = '';
      e.target.parentNode.querySelector('#tribe-description').value = '';
      e.target.parentNode.querySelector('#tribe-icon').value = '';
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err) {
      console.error('Error creating tribe:', err);
      setError('Failed to create tribe. Please try again.');
    }
  };

  return (
    <div className="create-tribe-container">
      <DNavbar />
      <div className="create-tribe-content">
        <aside className="create-tribe-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Navigation</h3>
            <Link href="/dashboard" className="back-button">Back to Dashboard</Link>
          </div>
        </aside>

        <main className="create-tribe-main">
          <h2 className="create-tribe-title">Create a New Tribe</h2>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
          <div className="create-tribe-form">
            <div className="form-group">
              <label htmlFor="tribe-name" className="form-label">Tribe Name</label>
              <input
                type="text"
                id="tribe-name"
                className="form-input"
                placeholder="Enter tribe name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tribe-description" className="form-label">Description</label>
              <textarea
                id="tribe-description"
                className="form-textarea"
                placeholder="Describe your tribe"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tribe-icon" className="form-label">Tribe Icon (Optional)</label>
              <input
                type="file"
                id="tribe-icon"
                className="form-file"
                accept="image/*"
              />
            </div>
            <button className="create-button" onClick={handleCreateTribe}>Create Tribe</button>
          </div>
        </main>
      </div>
    </div>
  );
}