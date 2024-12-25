import React from "react";

const GroupMembers = () => {
  // Array of group members
  const members = ["a", "b", "c", "d", "e"];

  return (
    <div>
      <h3>Group Members</h3>
      <ul>
        {/* Use .map() to iterate over the array and display each name */}
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
