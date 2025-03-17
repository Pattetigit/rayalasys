import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import OurVision from './components/OurVision';
import Employee from './components/Employee';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchEmployee from './components/SearchEmployee';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/ourvision" component={OurVision} />
                    <Route path="/employee" component={Employee} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/searchemployee" component={SearchEmployee} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;