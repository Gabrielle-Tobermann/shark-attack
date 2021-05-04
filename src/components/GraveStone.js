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
        <Card style={{ backgroundColor: 'black', borderColor: 'black' }}>
          <CardTitle> R.I.P {firstName} {lastName}</CardTitle>
          <img src={image} className='card-image'/>
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
