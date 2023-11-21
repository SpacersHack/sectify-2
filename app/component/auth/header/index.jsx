import React from 'react';

const AuthHeader = ({ title, description }) => {
  return (
    <aside className="text-center">
      <h3 className="my-3 text-4xl font-bold text-[#009947]">SECTIFY</h3>
      <p className="text-center">{title}</p>
      <p className="text-center text-sm my-3">{description}</p>
    </aside>
  );
};

export default AuthHeader;
