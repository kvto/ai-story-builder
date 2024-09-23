"use client";
import React, { useState } from 'react'
import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,  
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem} 
from "@nextui-org/navbar";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { UserButton, useUser } from '@clerk/nextjs';

const MenuList=[
  {
      name:"Inicio",
      path:"/"
  },
  {
    name:"Crear historia",
    path:"/create-history"
  },
  {
    name:"Explorar historia",
    path:"/explorar"
  },
  {
    name:"Contactanos",
    path:"/contacto"
  },
]

function Header() {

  const {user, isSignedIn}=useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle 
          aria-label={isMenuOpen?"Cerrar menu":"Abrir menu"}
          className="sm:hidden"/>
            <NavbarBrand>
                <Image src={"/logo.svg"} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-2xl text-primary ml-3'>Historias de niños</h2>
            </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center" className='hidden sm:flex'>
                {MenuList.map((item,idenx) =>(
                  <NavbarItem className='text-xl text-primary font-medium hover:underline mx-2'>
                    <Link href={item.path}>
                    {item.name}
                    </Link>
                  </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
              <Link href={"/dashboard"}>
              <Button color='primary' >
                {isSignedIn?
                "Panel de control":
                "Empezar ahora"}
                </Button>
                </Link>
                <UserButton />
            </NavbarContent>
            <NavbarMenu>
              {MenuList.map((item, index) =>(
                <NavbarMenuItem>
                  <Link href={item.path}>
                  {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
    </Navbar>
  )
}

export default Header