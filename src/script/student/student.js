class Mahasiswa {
  constructor(nama, npm, namaMk, nilaiTugas, nilaiQuiz, nilaiUTS, nilaiUAS) {
    const nilaiTotal = this._createTotalGrade({
      nilaiTugas,
      nilaiQuiz,
      nilaiUTS,
      nilaiUAS,
    });

    this._nama = nama;
    this._npm = npm;
    this._daftarMk = [
      {
        name: namaMk,
        nilaiTugas,
        nilaiQuiz,
        nilaiQuiz,
        nilaiUTS,
        nilaiUAS,
        nilaiTotal,
        ketNilaiTotal: this._getGradeDescription(nilaiTotal),
      },
    ];
  }

  getNPM() {
    return this._npm;
  }

  getNama() {
    return this._nama;
  }

  getTotal(namaMk) {
    const dataMatkul = this._daftarMk.find(
      (mataKuliah) => mataKuliah.name === namaMk
    );

    return dataMatkul.nilaiTotal;
  }

  getDataMahasiswa() {
    return {
      name: this.getNama(),
      npm: this.getNPM(),
      subjects: this._daftarMk,
    };
  }

  addSubject({ namaMk, nilaiTugas, nilaiQuiz, nilaiUTS, nilaiUAS }) {
    const newNilaiTotal = this._createTotalGrade({
      nilaiTugas,
      nilaiQuiz,
      nilaiUTS,
      nilaiUAS,
    });
    const newKetNilaiTotal = this._getGradeDescription(newNilaiTotal);

    const newMataKuliah = {
      name: namaMk,
      nilaiTugas,
      nilaiQuiz,
      nilaiQuiz,
      nilaiUTS,
      nilaiUAS,
      nilaiTotal: newNilaiTotal,
      ketNilaiTotal: newKetNilaiTotal,
    };

    this._daftarMk.push(newMataKuliah);
  }

  _createTotalGrade({ nilaiTugas, nilaiQuiz, nilaiUTS, nilaiUAS }) {
    const total =
      nilaiTugas * 0.15 + nilaiQuiz * 0.2 + nilaiUTS * 0.3 + nilaiUAS * 0.35;
    return +total.toFixed(2);
  }

  _getGradeDescription(grade) {
    const gradeBetween = (min, max) => {
      if (grade >= min && grade < max) {
        return true;
      }

      return false;
    };

    if (gradeBetween(92, 100) || grade === 100) {
      return 'A';
    }

    if (gradeBetween(86, 92)) {
      return 'A-';
    }

    if (gradeBetween(81, 86)) {
      return 'B+';
    }

    if (gradeBetween(76, 81)) {
      return 'B';
    }

    if (gradeBetween(71, 76)) {
      return 'B-';
    }

    if (gradeBetween(66, 71)) {
      return 'C+';
    }

    if (gradeBetween(60, 66)) {
      return 'C';
    }

    if (gradeBetween(55, 60)) {
      return 'D';
    }

    if (grade < 55) {
      return 'E';
    }
  }
}

export { Mahasiswa };
