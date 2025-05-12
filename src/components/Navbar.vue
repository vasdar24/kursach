<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav>
    <div class="logo-container">
      <RouterLink to="/" class="logo-link">
        <img src="/src/assets/vue.svg" alt="Logo" />
      </RouterLink>
      <RouterLink to="/" class="logo-link">
        <h1>Vivace</h1>
      </RouterLink>
    </div>

    <button class="hamburger" @click="toggleMenu">☰</button>

    <ul :class="['nav-links', { open: isMenuOpen }]">
      <li>
        <RouterLink to="/about" active-class="active-link">О нас</RouterLink>
      </li>
      <li>
        <RouterLink to="/catalog" active-class="active-link"
          >Каталог</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/profile" active-class="active-link"
          >Личный кабинет</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/register" active-class="active-link"
          >Регистрация</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/login" active-class="active-link"
          >Авторизация</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/cart" active-class="active-link">
          <img
            src="https://img.icons8.com/?size=100&id=59997&format=png&color=FFFFFF"
            alt="Корзина"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #346f6e;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 80px;
  margin: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.logo-container h1 {
  font-size: 2rem;
  color: #e4e6e8;
  margin: 0;
}

.logo-container img {
  margin-right: 10px;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #e4e6e8;
}

.logo-link:hover h1 {
  color: #ffcc00;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-right: 20px;
}

li {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: #e4e6e8;
  font-size: 1.2rem;
  font-weight: bold;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

a:hover {
  color: #ffcc00;
  transform: scale(1.05);
}

.nav-links li img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.nav-links li img:hover {
  transform: scale(1.05);
}

.active-link {
  color: #ffcc00;
  transform: scale(1.05);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-right: 20px;
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #346f6e;
    position: absolute;
    top: 80px;
    left: 0; 
    right: 0; 
    width: 100%; 
    padding: 20px;
    gap: 10px;
    z-index: 10;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    justify-content: center;
  }
}
</style>
