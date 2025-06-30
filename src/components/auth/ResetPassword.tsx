import React, { useState, useEffect } from 'react';
import  { AxiosError } from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface ResetPasswordResponse {
  status?: string;
  message?: string;
  email?: string[];
}

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get token and email from URL
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (!token || !email) {
      toast.error('Invalid password reset link');
      navigate('/forgot-password');
    }
  }, [token, email, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      // For testing purposes - replace with actual API call
      console.log("token:", token);
      console.log("email:", email);
      console.log("password:", password);
      console.log("password_confirmation:", confirmPassword);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Password reset successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      const axiosError = err as AxiosError<ResetPasswordResponse>;
      const errorMessage = 
        axiosError.response?.data?.message ||
        axiosError.response?.data?.email?.[0] ||
        'Something went wrong while resetting your password';
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div 
          // whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-200 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </motion.button>
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <FontAwesomeIcon 
                  icon={faLock} 
                  className="text-white text-2xl" 
                />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-white"
            >
              Reset Your Password
            </motion.h1>
            <motion.p
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-indigo-100 mt-2"
            >
              Create a new secure password
            </motion.p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Password Field */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <div className="relative">
                <motion.input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none pr-10 shadow-sm"
                  placeholder="Enter your new password"
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.3)"
                  }}
                />
                <motion.button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-indigo-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </motion.button>
              </div>
              <motion.div 
                className="h-1 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: password ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <motion.input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 outline-none pr-10 shadow-sm"
                  placeholder="Confirm your new password"
                  whileFocus={{ 
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.3)"
                  }}
                />
                <motion.button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-indigo-600"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </motion.button>
              </div>
              <motion.div 
                className="h-1 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: confirmPassword ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Strength Meter (Optional) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-1"
            >
              <div className="flex space-x-1 h-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-full ${
                      password.length > i * 2 ? 
                        (password.length > 8 ? 'bg-green-500' : 'bg-yellow-500') : 
                        'bg-gray-200'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.1 * i }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                {password.length > 8 ? 'Strong password' : password.length > 4 ? 'Medium strength' : 'Weak password'}
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                } flex items-center justify-center relative overflow-hidden`}
              >
                {isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear"
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </span>
              </button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-6 py-4 bg-gray-50 text-center border-t border-gray-100"
          >
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <motion.button 
                onClick={() => navigate('/')} 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign in
              </motion.button>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;