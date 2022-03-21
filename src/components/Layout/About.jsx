import Card from '../UI/Card';

const About = () => {
  return (
    <Card className="bg-white p-4">
      <section>
        <h2 className="font-semibold text-lg">About</h2>
        <hr className="border-2 border-secondary my-2" />

        <div className="text-sm">
          <p>Rivaldi Agustinus Nugraha Siringoringo</p>
          <p>2004488</p>
          <p>Rekayasa Perangkat Lunak</p>
          <p>4A</p>
        </div>
      </section>
    </Card>
  );
};

export default About;
