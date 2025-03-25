import React, { useState } from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [menu, setMenu] = useState([
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
        <div className="main__content__aboutUs-container">
          <h3>Sobre Nosotros</h3>
          <div className="main__content__aboutUs-container__info">
            <p>
              Bienvenidos a Lounge & Food Restaurant, un espacio donde la
              gastronomía de alta calidad se encuentra con un ambiente acogedor
              y sofisticado. 🍷✨ Desde el primer día, nos propusimos ofrecer
              una experiencia culinaria única, combinando ingredientes frescos,
              recetas innovadoras y un servicio excepcional. Nuestro menú está
              diseñado para sorprender cada paladar, desde exquisitas entradas y
              platos principales cuidadosamente preparados, hasta postres
              irresistibles y una selección de bebidas premium. Ya sea que
              busques una cena íntima, una reunión con amigos o un lugar para
              relajarte y disfrutar de buena música, en Lounge & Food Restaurant
              encontrarás el equilibrio perfecto entre sabor, confort y
              exclusividad. 🥂 Te invitamos a descubrir un lugar donde cada
              plato cuenta una historia y cada visita se convierte en un momento
              inolvidable. ¡Te esperamos! 🍽️🔥
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1996/1996055.png"
              alt="Restorant"
            />
          </div>
          <Link to="new-reservation" id="reservationButton">
            <i class="bx bxs-hand-right"></i>
            <p>¡Reserva tu mesa ahora y vive una experiencia inolvidable!</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
