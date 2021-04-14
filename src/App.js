import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';


import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Services from './components/Services'

import Footer from './components/Footer'

import Contact from './components/Contact'
import FAQ from './components/FAQ'

const App = () => (
  <div>
    <Navigation />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />

        <Route path="/support" component={Support} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
      </Switch>
      <Footer />
    </main>

  </div>
)

export default App
