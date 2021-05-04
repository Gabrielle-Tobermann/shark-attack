import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ deadStudents }) {
  return (
    <div className="Graveyard d-flex flex-wrap justify-content-center">
      {deadStudents.map((element) => (
        <GraveStone
        key={element.id}
        firstName={element.firstName}
        lastName={element.lastName}
        image={element.image}
        />
      ))}
    </div>
  );
}

Graveyard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default Graveyard;
