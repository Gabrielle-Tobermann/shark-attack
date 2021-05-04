import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

function GraveStone({
  firstName,
  lastName,
  image
}) {
  return (
    <div className='dearlyBeloved'>
        <Card>
          <CardTitle>{firstName} {lastName}</CardTitle>
          <img src={image}/>
        </Card>
    </div>
  );
}

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default GraveStone;
