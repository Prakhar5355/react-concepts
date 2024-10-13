import React, { useEffect } from 'react';

// Higher-Order Component (HOC)
const withAuth = (WrappedComponent) => {
  return (props) => {
    console.log(props)
    
    useEffect(() => {
      // Simulate authentication check
      const isLoggedIn = true; // Replace with real auth logic
      if (!isLoggedIn) {
        console.log('User is not logged in');
        // Optionally, you can redirect to login page or show a message
      } else {
        console.log('User is logged in');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Regular functional component
const Dashboard = ({ user }) => {
    console.log(user)
  return <h1>Welcome, {user}!</h1>;
};

// Wrapping Dashboard component with the withAuth HOC
const DashboardWithAuth = withAuth(Dashboard);

export default function App() {
  return <DashboardWithAuth user="Prakhar" />;
}


