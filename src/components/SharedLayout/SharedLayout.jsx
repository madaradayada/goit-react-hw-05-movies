import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'services/components/Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />        
      </Suspense>
      <footer>project by madaradayada 2022 &copy;</footer>
    </>
  );
}