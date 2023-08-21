import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // Assuming successful login for demonstration purposes
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Rest of the form code */}
      </form>
    </div>
  );
}

function DashboardPage({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="App">
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/dashboard">
          <DashboardPage isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
