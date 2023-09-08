<template>
    <div id="contact">
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
    <main class="contact-us">
    <h1>Contact Us</h1>
    <form @submit="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <!-- Show the message if formSubmitted is true -->
    <div v-if="formSubmitted" class="success-message">
        Thank you {{ formData.name }}, we will do our best to get back to you.
        </div>
    </main>
  </div>
  <footer>&copy; 2023 Anabolic Lifestyle</footer>
</template>

<script>
import '@/styles.css'; // Add this line to import the CSS file

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      // Send the form data to your server or perform necessary actions
      console.log("Form submitted:", this.formData);
      this.formSubmitted = true; // Set formSubmitted to true after successful submission
      
    }
  },
};
</script>

<style scoped>

</style>