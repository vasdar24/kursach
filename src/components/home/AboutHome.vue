<script setup>
import { ref } from "vue";

let currentImage = ref(1);

function nextImage() {
  if (currentImage.value === 3) {
    currentImage.value = 1;
  } else {
    currentImage.value += 1;
  }
}

function prevImage() {
  if (currentImage.value === 1) {
    currentImage.value = 3;
  } else {
    currentImage.value -= 1;
  }
}
</script>


<template>
  <section class="about-us">
    <h2>О нас</h2>
    <div class="about-content">
      <div class="about-text">
        <p>
          Мы — команда Vivace, специализирующаяся на продаже домашних растений,
          которые приносят уют в ваш дом. Мы стремимся предложить только самые
          качественные и красивейшие растения для вашего интерьера.
        </p>
        <p>
          Наша миссия — создавать зелёные уголки, которые помогут вам
          расслабиться, вдохновиться и почувствовать гармонию с природой.
          Присоединяйтесь к нам в путешествии в мир живых растений!
        </p>
      </div>

      <div class="about-image">
        <button class="arrow-button" @click="prevImage">&lt;</button>

        <div class="image-container">
          <img
            v-show="currentImage === 1"
            src="/src/assets/images/about1.jpg"
            alt="About Us 1"
          />
          <img
            v-show="currentImage === 2"
            src="/src/assets/images/about2.jpg"
            alt="About Us 2"
          />
          <img
            v-show="currentImage === 3"
            src="/src/assets/images/about3.jpg"
            alt="About Us 3"
          />
        </div>

        <button class="arrow-button" @click="nextImage">&gt;</button>
      </div>
    </div>
  </section>
</template>


<style scoped>
.about-us {
  padding: 60px 20px;
  background-color: #e9f0f3;
  color: #333;
  font-family: "Nunito", sans-serif;
}

.about-us h2 {
  font-size: 2.5rem;
  color: #346f6e;
  margin-bottom: 30px;
  text-align: center;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
}

.about-text p {
  margin-bottom: 20px;
  color: #666;
}

.about-image {
  flex: 1;
  max-width: 600px; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.image-container {
  width: 100%;
  height: 400px; 
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.arrow-button {
  background-color: #346f6e;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.arrow-button:hover {
  background-color: #369f66;
}

@media (max-width: 768px) {
  .about-us h2 {
    font-size: 2rem; 
  }

  .about-content {
    flex-direction: column;
    gap: 20px;
  }

  .about-text {
    font-size: 1rem; 
    text-align: center; 
  }

  .about-image {
    max-width: 100%;
    gap: 5px;
  }

  .image-container {
    height: 300px;
  }

  .arrow-button {
    font-size: 1.2rem;
    padding: 8px 12px;
  }
}
</style>
