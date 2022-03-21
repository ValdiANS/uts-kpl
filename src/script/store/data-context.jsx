import { createContext, useState } from 'react';

import { dummyStudentList } from '../dummy-data/dummy-data';

const DataContext = createContext({
  dummyStudentList: [],
  addStudent: (student = {}) => {},
  addStudentSubject: (studentName = '', subject = []) => {},
});

const DataContextProvider = ({ children }) => {
  const [dummyStudents, setDummyStudents] = useState(dummyStudentList);

  const addStudentHandler = (student = {}) => {
    setDummyStudents((prevList) => [...prevList, student]);
  };

  const addStudentSubjectHandler = (studentName = '', subject = []) => {
    const studentIdx = dummyStudents.findIndex(
      (studentData) => studentData.name === studentName
    );

    setDummyStudents((prevList) => {
      const newStudentList = [...prevList];
      newStudentList[studentIdx].subjects.push(subject);

      return newStudentList;
    });
  };

  return (
    <DataContext.Provider
      value={{
        dummyStudentList: dummyStudents,
        addStudent: addStudentHandler,
        addStudentSubject: addStudentSubjectHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
