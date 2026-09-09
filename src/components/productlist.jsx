import ProductCard from "./productcard.jsx";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>Produk tidak ditemukan</h3>
        <p>Coba gunakan kata kunci atau kategori lain.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;