# Jersey Store

Jersey Store adalah website toko sederhana yang dibuat menggunakan React dan Vite.

Project ini dibuat untuk memenuhi tugas React dengan menerapkan:
- Template / JSX
- Props
- Array of Objects
- Iterasi menggunakan `.map()`

## Tampilan Website

Jersey Store menampilkan daftar produk seperti milkshake, makanan, dan minuman dalam bentuk kartu produk.

Setiap produk memiliki:
- Nama produk
- Harga
- Kategori
- Jumlah stok
- Status ketersediaan

## Teknologi yang Digunakan

- React
- Vite
- JavaScript
- JSX
- CSS

## Penerapan React

### 1. Array of Objects

Data produk disimpan dalam file:

`src/data/products.js`

Contoh struktur data:

```javascript
const products = [
  {
    id: 1,
    name: "Strawberry Milkshake",
    price: 25000,
    category: "Milkshake",
    stock: 10
  },
  ...
]