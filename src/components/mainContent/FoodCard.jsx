import "./MainContent.css";

const FoodCard = ({ name, category, price }) => {
  return (
    <div className="main__content__menu-container-card" key={name}>
      <h5>{name}</h5>
      <p id="category">Categoria: {category}</p>
      <p id="price">Precio: ${price}</p>
    </div>
  );
};

export default FoodCard;
