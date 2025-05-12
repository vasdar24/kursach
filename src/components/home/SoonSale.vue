
<script setup>
const plants = [
  {
    name: 'Алоэ "Arborescens"',
    image:
      "https://planetaflora.ru/images/virtuemart/product/flori/aloe-arborescens216.jpg",
    arrivalDate: "5 мая",
    price: 1200,
  },
  {
    name: 'Гастерия "Amour"',
    image:
      "https://planetaflora.ru/images/virtuemart/product/flori/gasteriya-amour2733.jpg",
    arrivalDate: "7 мая",
    price: 2500,
  },
  {
    name: 'Агава "Американа"',
    image:
      "https://planetaflora.ru/images/virtuemart/product/flori/agava-amerikana21.jpg",
    arrivalDate: "10 мая",
    price: 1800,
  },
];
</script>

<template>
  <section class="soon-sale">
    <h2>Скоро в продаже</h2>
    <div class="plants">
      <div class="plant" v-for="(plant, index) in plants" :key="index">
        <img :src="plant.image" :alt="plant.name" />
        <h3>{{ plant.name }}</h3>
        <p>Дата завоза: {{ plant.arrivalDate }}</p>
        <p>Цена: {{ plant.price }} ₽</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soon-sale {
  padding: 60px 20px;
  background-image: url("/src/assets/images/cacto.png");
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  font-family: "Nunito", sans-serif;
  text-align: center;
}

.soon-sale h2 {
  font-size: 2.5rem;
  color: #d77e54;
  margin-bottom: 40px;
}

.plants {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.plant {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s;
}

.plant:hover {
  transform: translateY(-10px);
}

.plant img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.plant h3 {
  margin-top: 15px;
  font-size: 1.5rem;
  color: #333;
}

.plant p {
  margin-top: 8px;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .soon-sale {
    background-size: cover;
    background-position: center;
  }
}
</style>
