import ReactDOM from 'react-dom';

const Footer = () => {
  const content = (
    <p className="text-lg text-center">
      Created by{' '}
      <strong>
        <u>Rivaldi</u>
      </strong>{' '}
      for education purposes.
    </p>
  );

  return ReactDOM.createPortal(content, document.getElementById('footer'));
};

export default Footer;
