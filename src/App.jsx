import React from 'react';
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './page/homepage';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className='App'>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#f5f5f5',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0px',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}