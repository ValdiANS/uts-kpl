import { faker } from '@faker-js/faker';

import { Mahasiswa } from '../student/student';

const totalData = 3;
const dummyStudentList = [];

const createSubjectData = () => {
  const nilaiTugas = faker.datatype.number({ max: 100, precision: 0.01 });
  const nilaiQuiz = faker.datatype.number({ max: 100, precision: 0.01 });
  const nilaiUTS = faker.datatype.number({ max: 100, precision: 0.01 });
  const nilaiUAS = faker.datatype.number({ max: 100, precision: 0.01 });

  return {
    name: faker.commerce.product(),
    nilaiTugas,
    nilaiQuiz,
    nilaiUTS,
    nilaiUAS,
  };
};

for (let i = 0; i < totalData; i++) {
  const subjectData1 = createSubjectData();
  const subjectData2 = createSubjectData();

  const data = {
    name: faker.name.findName(),
    npm: `${faker.datatype.number({ min: 1000000, max: 9999999 })}`,
    subjects: [subjectData1, subjectData2],
  };

  const mahasiswa = new Mahasiswa(
    data.name,
    data.npm,
    subjectData1.name,
    subjectData1.nilaiTugas,
    subjectData1.nilaiQuiz,
    subjectData1.nilaiUTS,
    subjectData1.nilaiUAS
  );

  mahasiswa.addSubject({
    namaMk: subjectData2.name,
    nilaiTugas: subjectData2.nilaiTugas,
    nilaiQuiz: subjectData2.nilaiQuiz,
    nilaiUTS: subjectData2.nilaiUTS,
    nilaiUAS: subjectData2.nilaiUAS,
  });

  dummyStudentList.push(mahasiswa);
}

export { dummyStudentList };

/*
Skema data mahasiswa

{
  name: 'Nama Mahasiswa',
  npm: 1234567,
  subjects: [
    {
      name: 'Mata Kuliah 1',
      nilaiTugas: 100,
      nilaiQuiz: 100,
      nilaiUTS: 100,
      nilaiUAS: 100,
      nilaiTotal: 100,
      ketNilaiTotal: 'A'
    },
    {
      name: 'Mata Kuliah 2',
      nilaiTugas: 100,
      nilaiQuiz: 100,
      nilaiUTS: 100,
      nilaiUAS: 100,
      nilaiTotal: 100,
      ketNilaiTotal: 'A'
    }
  ]
}
*/
