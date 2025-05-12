<template>
  <div class="contact">
    <div class="contact-content">
      <div class="map-wrapper">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=30.314130%2C59.938955&z=10"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="contact-info">
        <h2>Свяжитесь с нами</h2>
        <p><strong>Адрес:</strong> ул. Примерная, д. 1, г. Москва</p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:support@vivace-shop.com">support@vivace-shop.com</a>
        </p>
        <p>
          <strong>Телефон:</strong>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 50px;
  background-color: #e9f0f3;
  border-radius: 16px;

  font-family: "Nunito", sans-serif;
}

.contact-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.contact-info {
  flex: 1;
  font-size: 1.1rem;
  color: #2e2e2e;
}

.contact-info h2 {
  font-size: 2.2rem;
  color: #256f6a;
  margin-bottom: 20px;
  font-weight: 700;
}

.contact-info p {
  margin: 10px 0;
  line-height: 1.6;
}

.contact-info a {
  color: #3e8882;
  text-decoration: none;
}

.contact-info a:hover {
  color: #2e5c58;
  text-decoration: underline;
}

.map-wrapper {
  flex: 1;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px) {
  .contact {
    padding: 30px 15px;
  }

  .contact-content {
    flex-direction: column;
    gap: 30px;
  }

  .contact-info {
    font-size: 1rem;
    text-align: center;
  }

  .contact-info h2 {
    font-size: 1.8rem;
  }

  .map-wrapper iframe {
    height: 300px;
  }
}
</style>
