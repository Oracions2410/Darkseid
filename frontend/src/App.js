import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { Home, Product } from './screens'

import './App.css';

function App() {

  const openMenu = function () {
    document.querySelector('.sidebar').classList.add('open')
  }

  const closeMenu = function () {
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
    <BrowserRouter>
      <div className="grid-container">


        {/*----------- Header ------------------ */}
        <header className="header">

          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
          </button>
            <a href="/#">Dark<span>Sied</span></a>
          </div>

          <nav className="header-links">
            <a href="/#">Panier</a>
            <a href="/#">Connexion</a>
          </nav>

        </header>
        {/*-----X----- Header ---------X-------- */}




        {/*----------- Sidebar ------------------ */}
        <aside className="sidebar">
          <h3>Liste des categories</h3>
          <button onClick={closeMenu} className="close-menu-button">x</button>
          <ul>
            <li>
              <a href="/#">Informatique</a>
            </li>
            <li>
              <a href="/#">Vestimentaire</a>
            </li>
          </ul>
        </aside>
        {/*----X------ Sidebar ---------X-------- */}


        <main className="main">


          <div className="content">

            {/* ----------- Routes --------------- */}

            <Route path='/product/:productId' component={Product} />
            <Route path='/' exact={true} component={Home} />

            {/* ------X---- Routes ------X-------- */}

          </div>

        </main>

        <footer className="footer">
          Tous droits réservées &copy; 2020
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
