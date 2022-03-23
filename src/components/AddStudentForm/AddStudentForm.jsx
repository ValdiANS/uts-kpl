import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../script/store/data-context';
import Button from '../UI/Button';
import Card from '../UI/Card';

import { Mahasiswa } from '../../script/student/student';

const checkIsStudentExist = (studentName, studentList) => {
  const studentIdx = studentList.findIndex(
    (student) => student.getDataMahasiswa().name === studentName
  );

  const isStudentExist = studentIdx > -1;

  return {
    isStudentExist,
    studentIdx,
  };
};

const AddStudentForm = () => {
  const ctx = useContext(DataContext);
  const studentList = ctx.dummyStudentList;

  const [isAddedSuccessfully, setIsAddedSuccessfully] = useState(false);

  const [enteredStudentData, setEnteredStudentData] = useState({
    name: '',
    npm: '',
    subject: '',
    nilaiTugas: '',
    nilaiQuiz: '',
    nilaiUTS: '',
    nilaiUAS: '',
  });

  const [isNpmDisabled, setIsNpmDisabled] = useState(false);

  const resetHandler = () => {
    setEnteredStudentData({
      name: '',
      npm: '',
      subject: '',
      nilaiTugas: '',
      nilaiQuiz: '',
      nilaiUTS: '',
      nilaiUAS: '',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const subject = {
      name: enteredStudentData.subject,
      nilaiTugas: enteredStudentData.nilaiTugas,
      nilaiQuiz: enteredStudentData.nilaiQuiz,
      nilaiUTS: enteredStudentData.nilaiUTS,
      nilaiUAS: enteredStudentData.nilaiUAS,
    };

    const newStudentData = new Mahasiswa(
      enteredStudentData.name,
      enteredStudentData.npm,
      subject.name,
      subject.nilaiTugas,
      subject.nilaiQuiz,
      subject.nilaiUTS,
      subject.nilaiUAS
    );

    const { isStudentExist, studentIdx } = checkIsStudentExist(
      enteredStudentData.name,
      studentList
    );

    if (isStudentExist) {
      studentList[studentIdx].addSubject({
        namaMk: subject.name,
        nilaiTugas: subject.nilaiTugas,
        nilaiQuiz: subject.nilaiQuiz,
        nilaiUTS: subject.nilaiUTS,
        nilaiUAS: subject.nilaiUAS,
      });

      setIsAddedSuccessfully(true);
      setTimeout(() => {
        setIsAddedSuccessfully(false);
      }, 2000);

      resetHandler();
      return;
    }

    ctx.addStudent(newStudentData);

    setIsAddedSuccessfully(true);
    setTimeout(() => {
      setIsAddedSuccessfully(false);
    }, 2000);

    resetHandler();
  };

  const nameChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      name: e.target.value,
    }));
  };

  const npmChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      npm: e.target.value,
    }));
  };

  const subjectChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      subject: e.target.value,
    }));
  };

  const nilaiTugasChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      nilaiTugas: e.target.value,
    }));
  };

  const nilaiQuizChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      nilaiQuiz: e.target.value,
    }));
  };

  const nilaiUTSChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      nilaiUTS: e.target.value,
    }));
  };

  const nilaiUASChangeHandler = (e) => {
    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      nilaiUAS: e.target.value,
    }));
  };

  useEffect(() => {
    const { isStudentExist, studentIdx } = checkIsStudentExist(
      enteredStudentData.name,
      studentList
    );

    if (!isStudentExist) {
      setEnteredStudentData((prevValue) => ({
        ...prevValue,
        npm: '',
      }));

      setIsNpmDisabled(false);
      return;
    }

    setEnteredStudentData((prevValue) => ({
      ...prevValue,
      npm: studentList[studentIdx].getNPM(),
    }));

    setIsNpmDisabled(true);
  }, [enteredStudentData.name]);

  return (
    <Card className="bg-white p-8">
      <form
        onSubmit={submitHandler}
        onReset={resetHandler}
        className="flex flex-col gap-y-2"
      >
        <h1 className="font-semibold text-lgs">Tambah Data Mahasiswa</h1>

        <div className="input-container grid grid-cols-2 grid-rows-5 gap-4 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-8">
          <div className="col-start-1 col-end-3 sm:col-auto flex flex-col">
            <label htmlFor="name">Nama :</label>
            <input
              type="text"
              id="name"
              value={enteredStudentData.name}
              onChange={nameChangeHandler}
              list="names"
              className="border border-solid border-black py-1 p-2"
              required
            />

            <datalist id="names">
              {studentList.map((student, index) => (
                <option
                  value={student.getNama()}
                  key={`${student.getNama()}#${index + 1}`}
                >
                  {student.getNama()}
                </option>
              ))}
            </datalist>
          </div>

          <div className="col-start-1 col-end-3 sm:col-auto flex flex-col">
            <label htmlFor="npm">NPM :</label>
            <input
              type="number"
              id="npm"
              min="0"
              value={enteredStudentData.npm}
              onChange={npmChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
              disabled={isNpmDisabled}
            />
          </div>

          <div className="col-start-1 col-end-3 sm:col-auto flex flex-col">
            <label htmlFor="subject">Mata Kuliah :</label>
            <input
              type="text"
              id="subject"
              value={enteredStudentData.subject}
              onChange={subjectChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="taskGrade">Nilai Tugas :</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="0"
              id="taskGrade"
              value={enteredStudentData.nilaiTugas}
              onChange={nilaiTugasChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quiz">Nilai Quiz :</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="0"
              id="quiz"
              value={enteredStudentData.nilaiQuiz}
              onChange={nilaiQuizChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="UTS">Nilai UTS :</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="0"
              id="UTS"
              value={enteredStudentData.nilaiUTS}
              onChange={nilaiUTSChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="UAS">Nilai UAS :</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="0"
              id="UAS"
              value={enteredStudentData.nilaiUAS}
              onChange={nilaiUASChangeHandler}
              className="border border-solid border-black py-1 p-2"
              required
            />
          </div>
        </div>

        <div
          className={`flex flex-col-reverse justify-between items-end gap-4 sm:flex-row md:flex-col-reverse ${
            isAddedSuccessfully ? 'lg:flex-row' : 'lg:flex-col'
          }`}
        >
          {isAddedSuccessfully && (
            <Card className="px-8 py-2 h-full bg-success text-white self-center sm:self-end md:self-center">
              Data berhasil ditambahkan.
            </Card>
          )}

          <div className="btn-container flex flex-row gap-x-4 self-end mt-4">
            <Button type="reset" className="px-8 py-2">
              Reset
            </Button>
            <Button type="submit" className="px-8 py-2">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddStudentForm;
