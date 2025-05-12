<template>
  <div class="about">
    <div class="about-text">
      <h2>О нас</h2>
      <p>
        Vivace — это не просто магазин растений, а пространство, где красота
        природы и забота о вашем доме объединяются в каждом зелёном уголке.
      </p>
      <p>
        Мы верим, что растения — это больше, чем элемент декора. Это живые
        друзья, которые наполняют жизнь гармонией, уютом и вдохновением.
      </p>
    </div>
    <div class="about-img-wrapper">
      <img
        class="about-img"
        src="/src/assets/images/about_about1.jpg"
        alt="Растения в интерьере"
      />
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  background-color: #e9f0f3;
  border-radius: 8px;

  width: 100%;
  margin: 0;
  gap: 40px;
}

.about-text {
  flex: 1;
  text-align: left;
  font-size: 1.3rem; 
  color: #333;
  max-width: 600px; 
}

.about h2 {
  font-size: 2.2rem;
  color: #346f6e;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
}

.about p {
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
}

.about-img-wrapper {
  flex: 1;
  max-width: 650px;
}

.about-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    padding: 20px 10px;
    gap: 20px;
  }

  .about-text {
    font-size: 1.1rem;
    text-align: center;
  }

  .about h2 {
    font-size: 1.8rem;
    text-align: center;
  }

  .about-img-wrapper {
    max-width: 100%;
  }

  .about-img {
    max-height: none;
  }
}
</style>
