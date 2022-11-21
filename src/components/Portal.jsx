import ReactDOM from 'react-dom';

export default function Portal ({ children, show, onClose }) {
  const handleClickPortal = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    show &&
      ReactDOM.createPortal(
        <div className="portal-styles"
          onClick={handleClickPortal}
        >
          {children}
        </div>,
        document.getElementById('portal')
      )
  );
}
