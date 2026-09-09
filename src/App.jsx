import { useState } from "react";
import ProductList from "./components/productlist.jsx";
import products from "./data/products.js";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [sort, setSort] = useState("terbaru");
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    "Semua",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "Semua" || product.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "termurah") {
        return a.price - b.price;
      }

      if (sort === "termahal") {
        return b.price - a.price;
      }

      return b.id - a.id;
    });

  const addToCart = (product) => {
    if (product.stock > 0) {
      setCartCount((current) => current + 1);
    }
  };

  return (
    <div className="website">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-icon">JS</div>
            <span>Jersey Store</span>
          </div>

          <div className="nav-links">
            <a href="#beranda">Beranda</a>
            <a href="#produk">Produk</a>
            <a href="#kategori">Kategori</a>
            <a href="#tentang">Tentang</a>
          </div>

          <div className="nav-right">
            <div className="search-box">
              <input
                type="text"
                placeholder="Cari produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span>⌕</span>
            </div>

            <div className="cart">
              <span className="cart-icon">🛒</span>

              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="beranda">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">Jersey Store</span>

            <h1>
              Nikmati Milkshake Favoritmu
              <br />
              <span>Setiap Saat!</span>
            </h1>

            <p>
              Segar, lezat, dan penuh rasa. Pilih varian milkshake
              favoritmu dengan bahan berkualitas terbaik.
            </p>

            <button
              className="hero-button"
              onClick={() =>
                document
                  .getElementById("produk")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Produk
            </button>
          </div>

          <div className="hero-drinks">
            <div className="drink chocolate">
              <div className="drink-glass">
                <div className="drink-top"></div>
                <div className="drink-body"></div>
              </div>
            </div>

            <div className="drink strawberry">
              <div className="drink-glass">
                <div className="drink-top"></div>
                <div className="drink-body"></div>
              </div>
            </div>

            <div className="drink vanilla">
              <div className="drink-glass">
                <div className="drink-top"></div>
                <div className="drink-body"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="products-section" id="produk">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR PRODUCTS</span>
              <h2>Temukan Milkshake Favoritmu</h2>
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="terbaru">Urutkan: Terbaru</option>
              <option value="termurah">Harga: Termurah</option>
              <option value="termahal">Harga: Termahal</option>
            </select>
          </div>

          {/* CATEGORY */}
          <div className="category-container" id="kategori">
            {categories.map((item) => (
              <button
                key={item}
                className={`category-button ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          <ProductList
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="tentang">
        <div className="about-container">
          <span className="section-label">ABOUT JERSEY STORE</span>

          <h2>Milkshake dibuat dengan rasa terbaik.</h2>

          <p>
            Jersey Store menyediakan berbagai pilihan milkshake
            dengan rasa yang segar dan cocok dinikmati kapan saja.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Jersey Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;