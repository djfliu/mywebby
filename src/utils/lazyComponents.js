import { lazy } from 'react';

// Lazy load components for better performance
export const LazyWorks = lazy(() => import('../pages/Works'));
export const LazyHomePage = lazy(() => import('../pages/HomePage'));
export const LazyBirthdayTikTok = lazy(() => import('../pages/BirthdayTikTok'));

// Loading component for Suspense fallback
export const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
