import React from 'react';
import './team_section.css';

export default function TeamSection() {
  return (
    <section className="page">
      <header className="header">Meet Our Team</header>
      <ul className="team-list">
        <li>
          <img
            className="team-list_profile"
            src="/assets/images/logo.png"
            alt="rosemary"
          />
          <h2 className="team-list_name">Mark Ambrocio</h2>
          <h2 className="team-list_description">Member1Description</h2>
        </li>
        <li>
          <img
            className="team-list_profile"
            src="/assets/images/logo.png"
            alt="rosemary"
          />
          <h2 className="team-list_name">Vicki Lei</h2>
          <h2 className="team-list_description">Member2Description</h2>
        </li>
        <li>
          <img
            className="team-list_profile"
            src="/assets/images/logo.png"
            alt="rosemary"
          />
          <h2 className="team-list_name">Mackenzie Chernok</h2>
          <h2 className="team-list_description">Member3Description</h2>
        </li>
        <li>
          <img
            className="team-list_profile"
            src="/assets/images/logo.png"
            alt="rosemary"
          />
          <h2 className="team-list_name">Eric Kwon</h2>
          <h2 className="team-list_description">Member4Description</h2>
        </li>
      </ul>
    </section>
  );
}
