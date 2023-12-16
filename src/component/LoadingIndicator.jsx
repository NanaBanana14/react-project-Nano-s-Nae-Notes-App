import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <FaSpinner className="loading-icon" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
