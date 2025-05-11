import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info"
    style={{
      textAlign: "center",
      backgroundColor: "red",
      color : "white",
      fontSize: "15px",
    }}
    >
      <p>이메일: leecss2@naver.com</p>
      <p>전화번호: 010-1234-4321</p>
      <p>주소: 동국대학교 신공학관 6층</p>
    </div>
  );
};

export default ContactInfo;
