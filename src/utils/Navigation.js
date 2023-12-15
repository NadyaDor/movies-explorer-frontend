// Навигация по сайту для хедера.

import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();

  const goToMovies = () => { navigate('/movies') };
  const goToSavedMovies = () => { navigate('/saved-movies') };
  const goToRegister = () => { navigate('/signup') };
  const goToLogin = () => { navigate('/signin') };
  const goToProfile = () => { navigate("/profile") };
  const goToMain = () => { navigate('/') };

  return {
    goToMovies,
    goToSavedMovies,
    goToRegister,
    goToLogin,
    goToProfile,
    goToMain,
  };
};
