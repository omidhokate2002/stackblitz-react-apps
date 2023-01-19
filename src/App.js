import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'XYZ', phone: 12345 };
  }
  handleClick = (event) => {
    event.preventDefault();
    alert('Your form is filled and submited to the destination');
  };
  render() {
    return (
      <div>
        <h3>User Component</h3>
        <form onSubmit={this.handleClick}>
          <div>
            Name
            <input
              type="text"
              name="n1"
              onChange={(e) => this.setState({ name: e.target.value })}
              autoComplete="off"
            />
          </div>
          <div>
            Phone
            <input
              type="number"
              name="n2"
              onChange={(e) => this.setState({ phone: e.target.value })}
              autoComplete="off"
            />
            <div>
              <button type="submit" value="submit">
                Submit
              </button>
            </div>
          </div>
        </form>

        <p>
          Name {this.state.name} <br />
          Phone {this.state.phone}
        </p>
      </div>
    );
  }
}

function Table() {
  return (
    <div>
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Om Dhokate</td>
            <td>omdhokae2002@gmail.com</td>
          </tr>
          <tr>
            <td>Ram Dhokate</td>
            <td>abc@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Person() {
  let [firstName, setFirstname] = useState('');
  let [lastName, setLastname] = useState('');
  let handleSubmit = (event) => {
    event.preventDefault();
    alert('Hi Bro your form is submited');
  };
  return (
    <div>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          First Name
          <input
            type="text"
            name="n1"
            onChange={(e) => setFirstname(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          Last Name
          <input
            type="text"
            name="n2"
            onChange={(e) => setLastname(e.target.value)}
            autoComplete="off"
          />
          <div>
            <input type="submit" value="submit" />
          </div>
        </div>
        <div>
          FirstName {firstName}, Lastname {lastName}
        </div>
      </form>
    </div>
  );
}

function Form() {
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [nameError, setNameError] = useState('');
  let [ageError, setAgeError] = useState('');
  useEffect(() => {
    if (name.length < 3) {
      setNameError('Name must be more than 3 characters');
    } else {
      setNameError('');
    }
    if (age < 18) {
      setAgeError('Age must be 18 atleast');
    } else {
      setAgeError('');
    }
  });

  return (
    <div>
      <h2>Form Demo</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          Enter Name{' '}
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-danger">{nameError}</span>
        </div>
        <div>
          Enter Age{' '}
          <input type="number" onChange={(e) => setAge(e.target.value)} />
          <span className="text-danger">{ageError}</span>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  return (
    <div className="container-fluid">
      <span className="text-success">Like:{like}</span>{' '}
      <span className="text-danger">Dislike: {dislike}</span>
      <div>
        <button onClick={(e) => setLike(like + 1)}>Like</button>
        <button onClick={(e) => setDislike(dislike + 1)}>Dislike</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="p-3 mb-2 bg-dark-subtle text-emphasis-dark">
      <h2>App Component</h2>
      <div>
        <Link to="/user">User</Link> /<Link to="/table">Table</Link> /
        <Link to="/person">Person</Link> /<Link to="/form">Form</Link> /
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Routes>
          <Route path="/user" element={<User />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/person" element={<Person />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </div>
    </div>
  );
}
