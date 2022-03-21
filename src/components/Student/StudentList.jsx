import { useContext } from 'react';

import { DataContext } from '../../script/store/data-context';
import StudentCard from './StudentCard';

const StudentList = () => {
  const ctx = useContext(DataContext);

  const studentsData = ctx.dummyStudentList;

  // console.log(studentsData);

  return (
    <div className="card-container grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {studentsData.map((item, index) => (
        <StudentCard
          studentData={item.getDataMahasiswa()}
          key={`${item.name}#${index + 1}`}
        />
      ))}
    </div>
  );
};

export default StudentList;
