import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 249,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 499,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 449,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 279,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1597055181300-a8e3b4ab5c9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Monstera Deliciosa",
    price: 599,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 799,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Calathea",
    price: 449,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Croton",
    price: 349,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Chinese Evergreen",
    price: 399,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Bird of Paradise",
    price: 899,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Aloe Vera",
    price: 199,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Jade Plant",
    price: 249,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Echeveria",
    price: 179,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Golden Barrel Cactus",
    price: 299,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Haworthia",
    price: 199,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 349,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying Plants",
    "Decorative Plants",
    "Succulents and Cacti"
  ];

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </nav>

      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with our beautiful houseplants.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>
                    <p>Price: ₹{plant.price}</p>

                    <button
                      type="button"
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
