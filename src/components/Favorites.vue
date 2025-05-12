<script setup>
import { ref, computed } from "vue";

const favoritesFromStorage =
  JSON.parse(localStorage.getItem("favorites")) || {};

const favoriteItems = computed(() => {
  const items = [
    {
      id: 1,
      title: 'Агава "Амиго Джамбо"',
      description:
        'Агава "Амиго Джамбо" — это декоративное растение, отличающееся крупными, мясистыми листьями с характерной голубовато-зеленой окраской. Он идеально подходит для создания ярких акцентов в интерьере благодаря своему эффектному внешнему виду.',
      price: 800,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/agava-amigo-dzhambo16.jpg",
      care: "неприхотливые",
    },
    {
      id: 2,
      title: 'Гастерия "Amour" ',
      description:
        'Гастерия "Amour" — это компактное суккулентное растение с плотными темно-зелеными листьями, покрытыми светлыми пятнами. Оно идеально подходит для декора интерьера, особенно в комнатах с ограниченным освещением, так как легко адаптируется к условиям полутени и не требует частого полива.',
      price: 450,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/gasteriya-amour2733.jpg",
      care: "неприхотливые",
    },
    {
      id: 3,
      title: 'Мелокактус "Matanzanus"',
      description:
        'Мелокактус "Matanzanus" — необычный кактус с округлым телом и характерным «турбаном» из густых щетинок на вершине. Это теплолюбивое растение предпочитает яркий свет и станет эффектным акцентом в любой коллекции суккулентов.',
      price: 1200,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/melokaktus-matanzanus8010.jpg",
      care: "средний уход",
    },
    {
      id: 4,
      title: 'Калатея "Beautystar"',
      description:
        'Калатея "Beautystar" — декоративное растение с продолговатыми листьями, украшенными светлыми полосами на тёмно-зелёном фоне. Её изящный рисунок и способность складывать листья на ночь придают интерьеру живость и динамику.',
      price: 1500,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/kalateya-beautystar8394.jpg",
      care: "прихотливые",
    },
    {
      id: 5,
      title: 'Паслен китоский "Jurassica"',
      description:
        'Паслён китоский "Jurassica" — экзотическое растение с резными фиолетово-зелёными листьями, напоминающими доисторические папоротники. Его необычная форма и окраска делают его ярким акцентом в коллекции декоративных растений.',
      price: 1000,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/paslen-kitoskiy-jurassica11566.jpg",
      care: "средний уход",
    },
    {
      id: 6,
      title: 'Пеперомия "Jayde"',
      description:
        'Пеперомия "Jayde" — компактное растение с мясистыми, глянцевыми листьями насыщенного зелёного цвета. Отличается неприхотливостью и идеально подходит для озеленения интерьеров.',
      price: 950,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/peperomiya-jayde11991.jpg",
      care: "неприхотливые",
    },
    {
      id: 7,
      title: 'Криптантус "Pink Starlight"',
      description:
        'Криптантус двуполосатый "Pink Starlight" — эффектное растение с розовыми листьями и характерными белыми полосами. Его звездообразная розетка придаёт экзотический акцент любому интерьеру.',
      price: 850,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/kriptantus-dvupolosatyy-pink-starlight8978.jpg",
      care: "средний уход",
    },
    {
      id: 8,
      title: 'Панданус Вейча "X"',
      description:
        'Панданус Вейча "X" — декоративное растение с жёсткими зелёными листьями, украшенными светлыми продольными полосами. Благодаря своему экзотическому облику и спиральному расположению листьев, он становится выразительным акцентом в помещении.',
      price: 2000,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/pandanus-veycha-x11564.jpg",
      care: "прихотливые",
    },
    {
      id: 9,
      title: "Спатифиллум",
      description:
        'Плектрантус "Caninus Sumcol 01" — компактное растение с мелкими зелёными листьями, источающими характерный аромат. Известен как "антикошачий" цветок, так как его запах отпугивает животных.',
      price: 1200,
      image:
        "https://planetaflora.ru/images/virtuemart/product/flori/plektrantus-caninus-sumcol-0112750.jpg",
      care: "прихотливые",
    },
  ];

  return items.filter((item) => favoritesFromStorage[item.id]);
});

function removeFromFavorites(itemId) {

  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  delete favorites[itemId];
  localStorage.setItem("favorites", JSON.stringify(favorites));

  window.location.reload(); 
}
</script>

<template>
  <div class="bg">
    <h2>Избранное</h2>

    <div v-if="Object.keys(favoriteItems).length === 0">
      <p>В вашем избранном пока нет товаров.</p>
    </div>

    <div class="gallery">
      <div v-for="item in favoriteItems" :key="item.id" class="item">
        <img :src="item.image" alt="item" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} ₽</p>
        <button @click="removeFromFavorites(item.id)">
          Удалить из избранного
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
}

.bg {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("/src/assets/images/contact.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px 20px;
}

h2 {
  color: #346f6e;
  margin-bottom: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
}

.item {
  aspect-ratio: 1 / 1;
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: transform 0.2s;
  padding: 16px;
}

.item:hover {
  transform: scale(1.02);
}

.item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #c0392b;
}
</style>
