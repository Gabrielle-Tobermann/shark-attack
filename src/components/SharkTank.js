import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ livingStudents }) {
  return (
    <div className="SharkTank">
      {livingStudents.map((element) => (
        <LiveStudent
        key={element.id}
        firstName={element.firstName}
        lastName={element.lastName}
        />
      ))}
    </div>
  );
}

SharkTank.propTypes = {
  livingStudents: PropTypes.array.isRequired
};

export default SharkTank;
