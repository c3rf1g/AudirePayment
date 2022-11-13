import logo from './logo.svg';
import './App.css';
import {Web3Button, useConnectModal, useSignMessage} from '@web3modal/react'
import Navigation from "./components/Navigation/Navigation";
import ImgElem from "./components/ImgElem/ImgElem";
import Header from "./components/Header/Header";
import BuyForm from "./components/BuyForm/BuyForm";
import { Web3Modal } from '@web3modal/react'
import BlockChainButton from "./components/BlockChainButton/BlockChainButton";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
const config = {
    projectId: '<YOUR_PROJECT_ID>',
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
        appName: 'web3Modal'
    }
}

function App() {

  return (

          <Router>
              <Navigation endDate={new Date('2022-11-7')}/>
              <main className='container flex flex-nowrap mx-auto pt-16  max-lg:pl-0 w-3/5'>
                  <div className='flex flex-col flex-nowrap space-x-32 w-full max-lg:space-x-0 lg:flex-row'>
                      <ImgElem img='asd.png' width='600' height='600' />
                      <div className='flex flex-col basis-1/2 justify-between'>
                          <Header/>
                          <BuyForm />
                          <BlockChainButton/>
                      </div>
                  </div>

              </main>
              <Web3Modal config={config} />
          </Router>

  );
}

export default App;
