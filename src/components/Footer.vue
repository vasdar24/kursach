<script setup></script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-column">
        <h3>О нас</h3>
        <p>Мы — компания, предоставляющая лучшие растения для вашего дома.</p>
      </div>

      <div class="footer-column">
        <h3>Контакты</h3>
        <ul>
          <li>Телефон: +7 123 456-78-90</li>
          <li>Email: contact@vivace.ru</li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Мы в соцсетях</h3>
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
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="social-icon"
          >
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #346f6e;
  color: #e4e6e8;
  padding: 20px 0;
  font-family: "Nunito", sans-serif;

  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  padding: 0 20px;
}

.footer-column h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.footer-column p,
.footer-column ul {
  font-size: 1rem;
  line-height: 1.5;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-icon:hover img {
  transform: scale(1.15);
}
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column {
    padding: 10px 0;
  }

  .social-icons {
    gap: 10px;
  }

  .social-icon img {
    width: 25px;
    height: 25px;
  }
}
</style>
