function ProductCard({ product, onAddToCart }) {
  const { name, category, price, stock, image } = product;

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  const isAvailable = stock > 0;

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />

        <span className={`category-badge ${category.toLowerCase()}`}>
          {category}
        </span>

        <span
          className={`stock-badge ${
            isAvailable ? "available" : "empty"
          }`}
        >
          {isAvailable ? `Stok: ${stock}` : "Habis"}
        </span>
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <p className="product-price">{formattedPrice}</p>

        <button
          className="cart-button"
          onClick={() => onAddToCart(product)}
          disabled={!isAvailable}
        >
          {isAvailable ? "Tambah ke Keranjang" : "Stok Habis"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;