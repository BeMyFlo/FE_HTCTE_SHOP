import React from 'react';
import Modal from 'react-modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

Modal.setAppElement('#root');

const LoginRegisterModal = ({ isOpen, onClose, type, switchType }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login/Register Modal"
      className="modal-content rounded-xl shadow-lg p-6 border border-gray-300 bg-white"
      overlayClassName="modal-overlay"
    >
      <button onClick={onClose} className="close-btn text-2xl hover:text-red-500">×</button>

      <div className="p-5">
        {type === 'login' ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Đăng nhập</h2>
            <LoginForm 
              onSuccess={onClose} 
              switchToRegister={() => switchType('register')} 
            />
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Đăng ký</h2>
            <RegisterForm 
              onSuccess={onClose} 
              switchToLogin={() => switchType('login')} 
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default LoginRegisterModal;
