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

const MenuList=[
  {
      name:"Inicio",
      path:"/"
  },
  {
    name:"Crear historia",
    path:"/crear-historia"
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
              <Button color='primary' >Empezar ahora</Button>
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