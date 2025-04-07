import "./MainContent.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodMenu from "../../utils/menu";
import FoodCard from "./FoodCard";

const MainContent = () => {
  const [menu, setMenu] = useState(foodMenu);

  return (
    <main className="main">
      <h2>Bienvenido a la web oficial de Lounge & Food Restorant</h2>
      <div className="main__iamges">
        <h3>Nuestro local</h3>
        <div className="main__images-items">
          <img
            src="https://www.abasturhub.com/img/blog/interiorismo-restaurantero---interiorismo-restaurantero.jpg"
            alt="Restaurante"
          />
          <img
            src="https://yucatantoday.com/hubfs/Imported_Blog_Media/Restaurante-Cuna-by-Wayam-Mundo-Imperial-CUNA_Lavalle-Peniche-Arquitectos-20-sin-logo-1.jpeg"
            alt="Restaurante"
          />
        </div>
      </div>
      <div className="main__content">
        <h3>Nuestro menú</h3>
        <div className="main__content__menu-container">
          <div className="main__content__menu-container-appetizers">
            <h4>Aperitivos o Entradas</h4>
            {menu
              .filter((menu) => {
                return menu.category === "Appetizers";
              })
              .map((element) => {
                return (
                  <FoodCard
                    key={element.name}
                    name={element.name}
                    category={element.category}
                    price={element.price}
                  />
                );
              })}
          </div>
          <div className="main__content__menu-container-mainCourses">
            <h4>Platos Principales</h4>
            {menu
              .filter((menu) => {
                return menu.category === "MainCourses";
              })
              .map((element) => {
                return (
                  <FoodCard
                    key={element.name}
                    name={element.name}
                    category={element.category}
                    price={element.price}
                  />
                );
              })}
          </div>
          <div className="main__content__menu-container-desserts">
            <h4>Postres</h4>
            {menu
              .filter((menu) => {
                return menu.category === "Desserts";
              })
              .map((element) => {
                return (
                  <FoodCard
                    key={element.name}
                    name={element.name}
                    category={element.category}
                    price={element.price}
                  />
                );
              })}
          </div>
          <div className="main__content__menu-container-drinks">
            <h4>Bebidas</h4>
            {menu
              .filter((menu) => {
                return menu.category === "Drinks";
              })
              .map((element) => {
                return (
                  <FoodCard
                    key={element.name}
                    name={element.name}
                    category={element.category}
                    price={element.price}
                  />
                );
              })}
          </div>
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
          <Link to="contact-us" id="contactUsButton">
            <i class="bx bx-message-alt-detail"></i>
            <p>
              ¿Necesitas modificar o cancelar una reserva? No dudes en
              contactarnos!
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
