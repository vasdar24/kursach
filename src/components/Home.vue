<script setup>
import AboutHome from "./home/AboutHome.vue";
import SoonSale from "./home/SoonSale.vue";
</script>

<template>
  <div class="home">
   
    <div class="banner">
      <img src="/src/assets/images/monstera_dark.png" alt="Panoramic Banner" />

      <div class="welcome-text">
        <h1>
          <span class="welcome-message">Добро пожаловать в</span
          ><span class="vivace"> Vivace !</span>
        </h1>
       
        <RouterLink to="/catalog"
          ><button class="cta-button">Перейти в каталог</button>
        </RouterLink>
      </div>

      <div class="social-icons">
        <a href="https://vk.com" target="_blank" class="social-icon">
          <img
            src="https://img.icons8.com/?size=100&id=38692&format=png&color=FFFFFF"
            alt="VK"
          />
        </a>
        <a href="https://t.me" target="_blank" class="social-icon">
          <img
            src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=FFFFFF"
            alt="Telegram"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-icon">
          <img
            src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  </div>
  <AboutHome />
  <SoonSale />
</template>

<style scoped>

.home {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 20px; 
}

.banner {
  position: relative;
  width: 100%;
  height: 400px; 
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome-text {
  position: absolute;
  top: 50%;
  left: 0; 
  transform: translateY(-50%); 
  color: white;
  text-align: left; 
  font-size: 1.8rem;
  padding-left: 20px;
}
.vivace {
  font-family: "Dancing Script", cursive;
}

.welcome-message {
  font-family: "Jost", sans-serif;
}

.cta-button {
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #41b883; 
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.cta-button:hover {
  background-color: #35495e;
  transform: scale(1.05);
}

.social-icons {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-icon img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.social-icon img:hover {
  transform: scale(1.2);
}
@media (max-width: 768px) {

  .banner {
    height: 300px; 
  }

  .welcome-text {
    font-size: 1.5rem;
    padding-left: 10px;
  }

  .social-icons {
    top: auto;
    bottom: 20px;
    right: 20px;
    flex-direction: row;
    gap: 10px;
  }

  .social-icon img {
    width: 30px;
    height: 30px;
  }
}
</style>
