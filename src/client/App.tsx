import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LoginForm from './components/LoginForm';
import ImageUploader from './components/ImageUploader';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/upload" component={ImageUploader} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;