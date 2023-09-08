<template>
  <div id="app">
    <header>
      <h1>Anabolic Lifestyle</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a class="login-button" href="/login">Login</a>
      </nav>
    </header>

    <main class="main-product">
      <section v-if="products.length > 0">
        <h1>Products</h1>
        <div class="category-filter">
        <label for="category">Choose a category</label>
        <select id="category" v-model="selectedCateory">
          <option v-for="category in categories" :key="category">{{category}}</option>
        </select>  
      </div>
        <div class="product-list">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card">
            <img :src="product.image" alt="Product Image">
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p class="product-price">$ {{ product.price }}</p>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      <section v-else>
        <p class="no-products">No products available.</p>
      </section>
    </main>
    <aside class="cart">
      <h2>Cart</h2>
      <ul v-if="cart.length > 0">
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - ${{ item.price }} 
          <input
           class="quantity"
            type="number"
            v-model.number="item.quantity"
            min="1"
            @input="updateQuantity(item)"
          />
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
      <p v-else class="empty-cart">Your cart is empty.</p>
    </aside>
  </div>
  <footer>&copy; 2023 Anabolic Lifestyle</footer>
</template>

<script>
import '@/styles.css'; // Add this line to import the CSS file

export default {
  data() {
    return {
      selectedCateory: '',
      categories: ['All', 'Mens', 'Womens', 'Hoodies', "T-shirts", "Tank Tops", "Shoes", "Accessories"],
      products: [
        { id: 1, name: 'Product A', price: 20, image: require('@/assets/PurpleActive.png'), category: 'Mens'},
        { id: 2, name: 'Product B', price: 30, image: require('@/assets/BlueBaseBall.png'), category: 'T-shirts'},
        { id: 3, name: 'Product C', price: 25, image: 'product-c.jpg', category: 'Womens'},
        { id: 4, name: 'Product D', price: 25, image: 'product-d.jpg', category: 'Hoodies'},
        { id: 5, name: 'Product E', price: 25, image: 'product-e.jpg', category: 'Tank Tops'},
        { id: 6, name: 'Product F', price: 25, image: 'product-f.jpg', category: 'Shoes'},
        { id: 7, name: 'Product G', price: 25, image: 'product-g.jpg', category: 'Accessories'},
        { id: 8, name: 'Product H', price: 25, image: 'product-h.jpg', category: 'T-shirts'},
        { id: 9, name: 'Product I', price: 25, image: 'product-i.jpg', category: 'T-shirt'},
        { id: 10, name: 'Product J', price: 25, image: 'product-j.jpg', category: 'T-shirts' },
        { id: 11, name: 'Product K', price: 25, image: 'product-k.jpg', category: 'T-shirts' },
        { id: 12, name: 'Product L', price: 20, image: 'product-a.jpg', category: 'T-shirts' },
        { id: 13, name: 'Product M', price: 30, image: 'product-b.jpg', category: 'T-shirts' },
        { id: 14, name: 'Product N', price: 25, image: 'product-c.jpg', category: 'T-shirts' },
        { id: 15, name: 'Product O', price: 25, image: 'product-d.jpg', category: 'T-shirts' },
        { id: 16, name: 'Product P', price: 25, image: 'product-e.jpg', category: 'T-shirts' },
        { id: 17, name: 'Product Q', price: 25, image: 'product-f.jpg', category: 'T-shirts' },
        { id: 18, name: 'Product R', price: 25, image: 'product-g.jpg', category: 'T-shirts' },
        { id: 19, name: 'Product S', price: 25, image: 'product-h.jpg', category: 'T-shirts' },
        { id: 20, name: 'Product T', price: 25, image: 'product-i.jpg', category: 'T-shirts' },
        { id: 21, name: 'Product U', price: 25, image: 'product-j.jpg', category: 'T-shirts' },
        { id: 22, name: 'Product V', price: 25, image: 'product-k.jpg', category: 'T-shirts' },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if the product is already in the cart
      } else {
        this.cart.push({ ...product, quantity: 1 }); // Add product with quantity 1 if not in the cart
      }
    },

    removeFromCart(item) {
      this.cart = this.cart.filter(product => product !== item); // Remove the product from the cart
    },

    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    },
  },
  computed: {
    filteredProducts(){
      if (this.selectedCateory === "All" || !this.selectedCateory ) {
        return this.products;
      }
      return this.products.filter(product => product.category === this.selectedCateory);
    }
  },
};
</script>

<style scoped>

</style>
