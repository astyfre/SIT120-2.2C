<template>
    <div id="home">
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

      <section class="main">
        <div class="main-content">
            <img :src="require('@/assets/Anabolic Lifestyle-logo.png')" alt="Logo" class="logo-img">
          <div class="centered-overlay">
            <h1>Welcome to Anabolic Lifestyle</h1>
            <p>Your destination for premium fitness products.</p>
            <a href="/products" class="explore-button">Explore Products</a>
          </div>
        </div>
      </section>
  
      <section class="featured-products">
        <h2>Featured Products</h2>
        <div class="product-list">
      <div v-for="product in featuredProducts" :key="product.id" class="product-featured">
        <img :src="product.image" alt="Product Image">
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="product-price">$ {{ product.price }}</p>
        </div>
      </div>
    </div>
      </section>
  
      <section class="about-us">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut blandit massa.</p>
      </section>
    
    <footer>&copy; 2023 Anabolic Lifestyle</footer>
  </div>
  </template>
  
  <script>
  import '@/styles.css'; // Add this line to import the CSS file

  export default {
    name: 'HomePage',
    data() {
      return {
        featuredProducts: [
          { id: 1, name: 'Featured Product A', price: 50, image: require('@/assets/PurpleMass.png') },
          { id: 2, name: 'Featured Product B', price: 60, image: require('@/assets/Viking.png') },
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  


  </style>
  