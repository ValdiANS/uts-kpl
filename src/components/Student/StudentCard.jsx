import { useEffect, useState } from 'react';
import Card from '../UI/Card';

const getGradeBackground = (grade) => {
  const isSuccess =
    grade === 'A' || grade === 'A-' || grade === 'B+' || grade === 'B';

  const isWarning = grade === 'B-' || grade === 'C+' || grade === 'C';
  const isDanger = grade === 'D' || grade === 'E';

  if (isSuccess) {
    return 'bg-success';
  }

  if (isWarning) {
    return 'bg-warning';
  }

  if (isDanger) {
    return 'bg-danger';
  }
};

const StudentCard = ({ studentData }) => {
  const { name, npm, subjects } = studentData;

  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);
  const [gradeOnSelectedSubject, setGradeOnSelectedSubject] = useState(
    subjects[0]
  );

  const subjectOnChangeHandler = (e) => {
    setSelectedSubject(e.target.value);
    setGradeOnSelectedSubject(
      subjects.find((subject) => subject.name === e.target.value)
    );
  };

  // console.log(gradeOnSelectedSubject);

  // Styling
  const gradeBackground = getGradeBackground(
    gradeOnSelectedSubject.ketNilaiTotal
  );

  return (
    <Card className="p-4 bg-white">
      <div>
        <div className="flex flex-row">
          <h3
            title={name}
            className="font-bold text-lg whitespace-nowrap overflow-x-hidden text-ellipsis"
          >
            {name}
          </h3>
        </div>

        <h5 className="font-medium text-sm">{npm}</h5>
      </div>

      <div className="flex flex-col border-b border-solid border-black my-2">
        <label htmlFor="selectedSubject" className="text-sm">
          Mata Kuliah
        </label>
        <select
          name="subject"
          id="selectedSubject"
          className="font-medium text-ellipsis overflow-hidden bg-none"
          value={selectedSubject}
          title={selectedSubject}
          onChange={subjectOnChangeHandler}
        >
          {subjects.map((subject, index) => (
            <option value={subject.name} key={`${subject.name}#${index}`}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-full">Nilai Tugas</td>
            <td className="px-2">:</td>
            <td className="text-right">{gradeOnSelectedSubject.nilaiTugas}</td>
          </tr>

          <tr>
            <td className="w-full">Nilai Quiz</td>
            <td className="px-2">:</td>
            <td className="text-right">{gradeOnSelectedSubject.nilaiQuiz}</td>
          </tr>

          <tr>
            <td className="w-full">Nilai UTS</td>
            <td className="px-2">:</td>
            <td className="text-right">{gradeOnSelectedSubject.nilaiUTS}</td>
          </tr>

          <tr>
            <td className="w-full">Nilai UAS</td>
            <td className="px-2">:</td>
            <td className="text-right">{gradeOnSelectedSubject.nilaiUAS}</td>
          </tr>

          <tr className="border-t border-b border-solid border-black">
            <td className="w-full">Total</td>
            <td className="px-2">:</td>
            <td className="text-right">{gradeOnSelectedSubject.nilaiTotal}</td>
          </tr>
        </tbody>
      </table>

      <div
        className={`mt-2 mx-auto w-10 h-10 rounded-full grid place-items-center ${gradeBackground}`}
      >
        <p className="font-bold text-white">
          {gradeOnSelectedSubject.ketNilaiTotal}
        </p>
      </div>
    </Card>
  );
};

export default StudentCard;
