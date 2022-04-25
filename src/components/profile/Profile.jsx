import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <section className="profileBlock">
      <article>
        <Sidebar />
        <MainContent />
      </article>
    </section>
  );
};

export default Profile;
