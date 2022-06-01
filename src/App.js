import React from 'react';
import {Switch , Route , Link} from 'react-router-dom';
import {Layout ,Typography ,Space} from 'antd';
import Navbar from './components/navbar';
import Exchanges from './components/exchanges';
import Homepage from './components/homepage';
import News from './components/news';
import Cryptocurrencies from './components/cryptocurrencies';
import CryptoDetails from './components/cryptodetails'
import './App.css'
import 'antd/dist/antd.min.css'
// import Switch from '@mui/material/Switch'

function App() {
  return (
    <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
         <Layout>
           <div className="routes">
             <Switch>
               <Route exact path="/">
                    <Homepage/>
               </Route>
               <Route exact path="/exchanges">
                    <Exchanges/>
               </Route>
               <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies/>
               </Route>
               <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
               </Route>
               <Route exact path="/news">
                    <News />
               </Route>
             </Switch>
           </div>
         </Layout>
         <div className="footer">
          <Typography.Title level={5} style={{color:'white' ,textAlign:'center' }}>
          © DeCrypto 2022<br/>
            All rights reserved by Utkristi.io
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            {/* <Link to="/cryptocurrencies">CryptoCurrency</Link> */}
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>
    </div>
  )
}

export default App ;