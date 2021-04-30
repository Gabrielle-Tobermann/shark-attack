import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

function LiveStudent({
  firstName,
  lastName
}) {
  return (
    <div className='live-student'>
        <Card>
          <CardTitle>{firstName} {lastName}</CardTitle>
        </Card>
    </div>
  )
}

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default LiveStudent;