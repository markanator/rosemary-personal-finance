import React from 'react';
import './team_section.scss';

export default function TeamSection() {
  return (
    <section className="team__section">
      <div className="team-wrapper">
        <h1 className="header">Meet Our Team</h1>
        <ul className="team-list">
          <li>
            <img
              className="team-list_profile"
              src="https://avatars.githubusercontent.com/u/16071902?v=4"
              alt="Mark Ambrocio"
            />
            <h2 className="team-list_name">Mark Ambrocio</h2>
            <h2 className="team-list_description">
              Full Stack Software Engineer
            </h2>
          </li>
          <li>
            <img
              className="team-list_profile"
              src="https://avatars.githubusercontent.com/u/57201889?v=4"
              alt="Vicki Lei"
            />
            <h2 className="team-list_name">Vicki Lei</h2>
            <h2 className="team-list_description">
              UI / Front End Software Engineer
            </h2>
          </li>
          <li>
            <img
              className="team-list_profile"
              src="https://avatars.githubusercontent.com/u/16624899?v=4"
              alt="Mackenzie Chernok"
            />
            <h2 className="team-list_name">Mackenzie Chernok</h2>
            <h2 className="team-list_description">
              UI / Front End Software Engineer
            </h2>
          </li>
          <li>
            <img
              className="team-list_profile"
              src="https://avatars.githubusercontent.com/u/57201883?v=4"
              alt="Eric Kwon"
            />
            <h2 className="team-list_name">Eric Kwon</h2>
            <h2 className="team-list_description">
              Front End Software Engineer
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
}
