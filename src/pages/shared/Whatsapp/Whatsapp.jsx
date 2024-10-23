import React from 'react';

const Whatsapp = ({ phoneNumber, message }) => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div style={styles.container}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="150"
                    height="150"
                    style={styles.icon}
                />
            </a>
        </div>
    );
};

const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    },
    icon: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
    },
  };
  


export default Whatsapp;