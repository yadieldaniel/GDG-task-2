import React from "react";

const GroupMembers = () => {
  
  const members = ["a", "b", "c", "d", "e"];

  return (
    <div>
      <h3>Group Members</h3>
      <ul>
  
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
