import React, { useState } from 'react';
import userApi from '../../api/user/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { setNotification } from '../../redux/notificationSlice';
import { toast } from 'react-toastify';

const LoginForm = ({ onSuccess, switchToRegister }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone || !formData.password) {
      toast.error('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    setLoading(true);
    try {
      const response = await userApi.signin(formData);
      if (response.token && response.user) {
        dispatch(setUser({ user: response.user, token: response.token }));
        dispatch(setNotification({ message: 'Đăng nhập thành công!', type: 'success' }));
        toast.success('Đăng nhập thành công!');
        onSuccess?.();
      } else {
        toast.error('Đăng nhập thất bại.');
      }
    } catch (error) {
      toast.error(error.message || 'Lỗi đăng nhập.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
      >
        {loading ? (
          <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Đăng nhập'
        )}
      </button>

      {/* Nút chuyển qua Đăng ký */}
      <p className="text-center text-sm mt-4">
        Chưa có tài khoản?{' '}
        <button
          type="button"
          onClick={switchToRegister}
          className="text-red-500 hover:underline font-bold"
        >
          Đăng ký ngay
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
