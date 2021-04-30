import React, { useState } from 'react';
import './App.scss';

function App() {
  const [LiveStudent, setLiveStudent] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLiveStudent(students);
  }, []);

  return (
    <div className='App'>
     
    </div>
  );
}

export default App;
