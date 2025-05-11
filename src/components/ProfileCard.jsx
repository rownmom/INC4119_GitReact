import React from "react";
import BBANGImage from "../assets/bbang.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={BBANGImage} alt="프로필" style={{width:"350px", height:"240px"}}/>
      <div className="profile-info">
        <h3>학번/이름</h3>
        <p>안녕하세요! <b>2022112041 방윤지</b>입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 