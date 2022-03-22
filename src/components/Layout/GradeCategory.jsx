import Card from '../UI/Card';

const GradeCategory = () => {
  return (
    <Card className="w-full bg-white p-8 flex flex-col sm:flex-row justify-between gap-x-12 gap-y-4">
      <div>
        <h1 className="font-semibold text-xl">Kategori Nilai</h1>

        <p>
          Kategori penilaian yang digunakan merupakan kategori penilaian yang
          berdasarkan aturan penilaian UPI.
          <span className="hidden sm:inline">
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            est blanditiis deleniti delectus quam, quidem beatae dolor ab in
            eligendi nemo laudantium hic exercitationem perspiciatis qui enim
            voluptate amet dignissimos? Aut dolorem itaque quae hic quod minus
            culpa, laudantium mollitia quam, quis praesentium deserunt
            doloremque consequuntur facere harum distinctio atque!
          </span>
        </p>
      </div>

      <table className="border border-solid border-black text-center">
        <thead>
          <tr className="font-medium text-lg border-b border-solid border-black">
            <td className="px-8">Nilai</td>
            <td className="px-8">Huruf</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 border-r border-solid border-black">92-100</td>
            <td className="py-1">A</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">86-91</td>
            <td className="py-1">A-</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">81-85</td>
            <td className="py-1">B+</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">76-80</td>
            <td className="py-1">B</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">71-75</td>
            <td className="py-1">B-</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">66-70</td>
            <td className="py-1">C+</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">60-65</td>
            <td className="py-1">C</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">55-59</td>
            <td className="py-1">D</td>
          </tr>
          <tr>
            <td className="py-1 border-r border-solid border-black">&lt; 55</td>
            <td className="py-1">E</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default GradeCategory;
