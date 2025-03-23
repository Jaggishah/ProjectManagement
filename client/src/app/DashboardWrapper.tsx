"use client";

import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Sidebar  from '@/components/Sidebar'
import StoreProvider, { useAppSelector } from './redux'

const DashboardLayout = ({ children } : { children : React.ReactNode}) => {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed,
      );
      const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
      useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        document.documentElement.classList.toggle(
          'dark',
          localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
      }, []);

        useEffect(() => {
            if (isDarkMode) {
            setDarkMode();
            } else {
            setLightMode();
            }
        }, [isDarkMode]);

      const setLightMode = () => {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      };
    
      const setDarkMode = () => {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      };
    
      const setSystemMode = () => {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        <Sidebar/>
        <main
                className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
                isSidebarCollapsed ? "" : "md:pl-64"
                }`}
            >
            <Navbar/>
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({ children } : { children : React.ReactNode}) => {
    return(
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    )
}


export default DashboardWrapper