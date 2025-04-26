import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import LoginRegisterModal from './components/Popup/LoginRegisterModal'; // ✅ Modal gộp
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login'); // 'login' hoặc 'register'

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Header 
        openLogin={() => openModal('login')} 
        openRegister={() => openModal('register')} 
      />
      <Main />
      <Footer />
      <ToastContainer />
      
      {/* Chỉ 1 Modal duy nhất */}
      <LoginRegisterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        type={modalType}
        switchType={(newType) => setModalType(newType)} // 👈 Quan trọng
      />
    </Router>
  );
};

export default App;
