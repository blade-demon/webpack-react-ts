import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home11</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/users/'>Users</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/users' exact component={Users} />
      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("app"));
