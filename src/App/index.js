import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Graveyard from '../components/Graveyard';
import SharkTank from '../components/SharkTank';
import { followTheLight, getLivingStudents, dearlyBeloved } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [livingStudents, setLivingStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivingStudents(getLivingStudents());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    followTheLight();
    setDeadStudents(dearlyBeloved());
    setLivingStudents(getLivingStudents());
  };

  return (
    <div className='App'>
      <Button color="danger" className='shark-btn' onClick={handleClick} disabled={livingStudents.length <= 0}>SHARK ATTACK</Button>
      <SharkTank
      livingStudents={livingStudents}
      />
      <Graveyard
       deadStudents={deadStudents}
      />
    </div>
  );
}

export default App;
