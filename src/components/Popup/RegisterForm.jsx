import React, { useState } from 'react';
import userApi from '../../api/user/userApi';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../redux/notificationSlice';
import { toast } from 'react-toastify';

const RegisterForm = ({ onSuccess, switchToLogin }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data gửi đăng ký:", formData);
    if (!formData.phone || !formData.password) {
      toast.error('Vui lòng điền số điện thoại và mật khẩu!');
      return;
    }
    if (formData.email && !isValidEmail(formData.email)) {
      toast.error('Email không hợp lệ!');
      return;
    }

    setLoading(true);
    try {
      const response = await userApi.signup(formData);
      if (response && !response.error) {
        dispatch(setNotification({ message: 'Đăng ký thành công!', type: 'success' }));
        toast.success('Đăng ký thành công!');
        onSuccess?.();
      } else {
        toast.error(response.error || 'Đăng ký thất bại.');
      }
    } catch (error) {
      toast.error(error.message || 'Lỗi đăng ký.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        id="email"
        placeholder="Email (không bắt buộc)"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all"
      />
      <input
        id="phone"
        type="text"
        placeholder="Số điện thoại"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all"
      />
      <input
        id="password"
        type="password"
        placeholder="Mật khẩu"
        value={formData.password}
        onChange={handleChange}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-500 transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
      >
        {loading ? (
          <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Đăng ký'
        )}
      </button>

      {/* Nút chuyển qua Đăng nhập */}
      <p className="text-center text-sm mt-4">
        Đã có tài khoản?{' '}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-red-500 hover:underline font-bold"
        >
          Đăng nhập ngay
        </button>
      </p>

    </form>
  );
};

export default RegisterForm;
