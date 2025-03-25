import React, { useState } from "react";
import "./MainContent.css";

const MainContent = () => {
  const [menu, setMenu] = useState([
    // ENTRADAS
    {
      categoria: "Entradas",
      nombre: "Bruschetta Italiana",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 6.99,
    },
    {
      categoria: "Entradas",
      nombre: "Empanadas de Carne",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 5.5,
    },
    {
      categoria: "Entradas",
      nombre: "Nachos con Guacamole",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 7.99,
    },
    {
      categoria: "Entradas",
      nombre: "Ceviche de Pescado",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 9.5,
    },

    // PLATOS PRINCIPALES
    {
      categoria: "Platos Principales",
      nombre: "Milanesa Napolitana con Papas",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 12.99,
    },
    {
      categoria: "Platos Principales",
      nombre: "Bife de Chorizo con Ensalada",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 18.5,
    },
    {
      categoria: "Platos Principales",
      nombre: "Salmón a la Parrilla",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 22.0,
    },
    {
      categoria: "Platos Principales",
      nombre: "Pasta Alfredo con Pollo",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 13.75,
    },
    {
      categoria: "Platos Principales",
      nombre: "Pizza Margarita",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 11.99,
    },
    {
      categoria: "Platos Principales",
      nombre: "Sushi Variado",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 16.0,
    },

    // POSTRES
    {
      categoria: "Postres",
      nombre: "Tiramisú",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 6.5,
    },
    {
      categoria: "Postres",
      nombre: "Brownie con Helado",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 7.0,
    },
    {
      categoria: "Postres",
      nombre: "Flan Casero con Dulce de Leche",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 5.99,
    },
    {
      categoria: "Postres",
      nombre: "Cheesecake de Frutilla",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 7.5,
    },

    // BEBIDAS
    {
      categoria: "Bebidas",
      nombre: "Coca-Cola 500ml",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 2.5,
    },
    {
      categoria: "Bebidas",
      nombre: "Jugo de Naranja Natural",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 4.0,
    },
    {
      categoria: "Bebidas",
      nombre: "Cerveza Artesanal IPA",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 6.0,
    },
    {
      categoria: "Bebidas",
      nombre: "Vino Malbec Copa",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 7.5,
    },
    {
      categoria: "Bebidas",
      nombre: "Café Expreso",
      imagen:
        "https://pedidosya.dhmedia.io/image/pedidosya/only-home-squad/new-redirect/primary/restaurantes-primary.png",
      precio: 3.0,
    },
  ]);

  return (
    <main className="main">
      <h2>Bienvenido a la web oficial de Lounge & Food Restorant</h2>
      <div className="main__content">
        <h3>Nuestro menú</h3>
        <div className="main__content__menu-container">
          {menu.map((menu) => {
            return (
              <div
                className="main__content__menu-container-card"
                key={menu.nombre}
              >
                <img src={menu.imagen} alt="menuImagen" />
                <h4>{menu.nombre}</h4>
                <p id="category">Categoria: {menu.categoria}</p>
                <p id="price">Precio: ${menu.precio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
