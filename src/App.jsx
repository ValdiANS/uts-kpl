import { useState, Fragment } from 'react';

import { DataContextProvider } from './script/store/data-context';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Chart from './components/Chart/Chart';
import About from './components/Layout/About';
import Button from './components/UI/Button';
import AddStudentForm from './components/AddStudentForm/AddStudentForm';
import StudentList from './components/Student/StudentList';

import { dummyStudentList } from './script/dummy-data/dummy-data';

const chartData = {
  labels: ['Tugas: 15%', 'Quiz: 20%', 'UTS: 30%', 'UAS: 35%'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [15, 20, 30, 35],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(16, 201, 94)',
      ],
      hoverOffset: 4,
    },
  ],
};

const App = () => {
  const [dummyStudents, setDummyStudents] = useState(dummyStudentList);

  const [activeBtn, setActiveBtn] = useState('showStudent');
  const showStudent = activeBtn === 'showStudent';
  const addStudent = activeBtn === 'addStudent';

  const showStudentHandler = () => {
    setActiveBtn('showStudent');
  };

  const showddStudentHandler = () => {
    setActiveBtn('addStudent');
  };

  return (
    <DataContextProvider>
      <Header />

      <main className="py-8">
        <section>
          <h1 className="font-bold text-2xl uppercase text-center mt-4 mb-12">
            UTS Konstruksi Perangkat Lunak
          </h1>

          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="basis-1/5 flex flex-col gap-y-4 w-full">
              <About />

              <Chart data={chartData} />

              <i className="text-sm">
                Disclaimer: data yang digunakan hanyalah data dummy yang
                digenerate secara random
              </i>
            </div>

            <div className="flex flex-col gap-y-4 w-full">
              <div className="btn-container flex flex-col gap-4 sm:flex-row">
                <Button
                  className="font-semibold text-lg text-left py-2 px-4 flex flex-row items-center gap-x-2"
                  onClick={showStudentHandler}
                  active={showStudent}
                >
                  <svg
                    className={`w-8 ${
                      showStudent ? 'fill-white' : 'fill-black'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  Daftar Mahasiswa
                </Button>
                <Button
                  className="font-semibold text-lg text-left py-2 px-4 flex flex-row items-center gap-x-2"
                  onClick={showddStudentHandler}
                  active={addStudent}
                >
                  <svg
                    className={`w-8 ${
                      addStudent ? 'fill-white' : 'fill-black'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
                  </svg>
                  Tambah Data Mahasiswa
                </Button>
              </div>

              {activeBtn === 'showStudent' && <StudentList />}

              {activeBtn === 'addStudent' && <AddStudentForm />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </DataContextProvider>
  );
};

export default App;
