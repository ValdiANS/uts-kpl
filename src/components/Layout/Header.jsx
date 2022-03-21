import ReactDOM from 'react-dom';

const Header = () => {
  const content = (
    <div className="bg-white py-2 px-4 rounded-xl">
      <h1 className="font-bold text-lg uppercase text-center sm:text-left">
        Konstruksi Perangkat Lunak
      </h1>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('header'));
};

export default Header;
