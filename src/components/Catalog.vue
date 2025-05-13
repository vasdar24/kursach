<script setup>
import { ref, computed } from "vue";

const items = ref([
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
]);
const careFilter = ref("");
const selectedItem = ref(null);
const isFavorite = ref({});

const isInCart = ref({}); 
const showWarning = ref(false);

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const isLoggedIn = currentUser !== null;

const filteredItems = computed(() => {
  if (!careFilter.value) return items.value;
  return items.value.filter((item) => item.care === careFilter.value);
});

function openModal(item) {
  selectedItem.value = item;
  showWarning.value = false;
}

function closeModal() {
  selectedItem.value = null;
}
function addToCart() {
  if (!selectedItem.value) return;
  const itemId = selectedItem.value.id;
  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (isInCart.value[itemId]) {
    delete isInCart.value[itemId];
    const updatedCart = existingCart.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  } else {
 
    isInCart.value[itemId] = true;
    existingCart.push(selectedItem.value);
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
  }
}

function handleFavorite() {
  if (!isLoggedIn) {
    showWarning.value = true;
    return;
  }

  const itemId = selectedItem.value.id;
  isFavorite.value[itemId] = !isFavorite.value[itemId];

  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  if (isFavorite.value[itemId]) {
    favorites[itemId] = true;
  } else {
    delete favorites[itemId];
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

const favoritesFromStorage =
  JSON.parse(localStorage.getItem("favorites")) || {};
isFavorite.value = { ...favoritesFromStorage };
</script>

<template>
  <div class="bg">
    <div class="filters">
      <label for="care">Уход за растением:</label>
      <select id="care" v-model="careFilter" @change="applyFilter">
        <option value="">Все</option>
        <option value="прихотливые">Прихотливые</option>
        <option value="неприхотливые">Неприхотливые</option>
        <option value="средний уход">Средний уход</option>
      </select>
    </div>

    <div class="gallery">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="item"
        @click="openModal(item)"
      >
        <img :src="item.image" alt="item" />
        <h3>{{ item.title }}</h3>
        <p class="price">{{ item.price }} ₽</p>
      </div>
    </div>

   
    <div v-if="selectedItem" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <img :src="selectedItem.image" class="modal-image" />
        <div class="modal-details">
          <h2>{{ selectedItem.title }}</h2>
          <p>{{ selectedItem.description }}</p>
          <p class="price">{{ selectedItem.price }} ₽</p>
          <div class="buttons">
           
            <button
              @click.stop="addToCart"
              :class="{
                added: isInCart[selectedItem.id],
                default: !isInCart[selectedItem.id],
              }"
            >
              {{
                isInCart[selectedItem.id] ? "✓ В корзине" : "Добавить в корзину"
              }}
            </button>

           
            <button
              @click.stop="handleFavorite"
              :class="{
                'favorite-active': isFavorite[selectedItem.id],
                favorite: !isFavorite[selectedItem.id],
              }"
            >
              {{
                isFavorite[selectedItem.id]
                  ? "💚 В избранном"
                  : "🤍 В избранное"
              }}
            </button>

            <p v-if="!isLoggedIn && showWarning" style="color: red">
              Сначала войдите в аккаунт.
            </p>

            <button @click="closeModal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #346f6e;
}
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
  background-image: url("../../assets/images/contact.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px 20px;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
}

.filters label {
  font-size: 16px;
  color: #214443;
  font-weight: bold;
}

.filters select {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: "Nunito", sans-serif;
  width: 200px;
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
  cursor: pointer;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: transform 0.2s;
}

.item:hover {
  transform: scale(1.02);
}

.item img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 6px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  background: white;
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
}

.modal-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.modal-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-details h2 {
  margin-bottom: 12px;
  font-size: 24px;
  color: #333;
}

.modal-details p {
  margin-bottom: 10px;
  line-height: 1.4;
  color: #555;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #2d7a42;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  font-weight: 500;
}

button:last-child {
  background-color: #999;
}
.default {
  background-color: #ddd;
  color: #333;
}

.added {
  background-color: #4caf50; 
  color: white;
}

.favorite {
  background-color: white;
  color: #444;
  border: 2px solid #888;
}

.favorite-active {
  background-color: #4caf50;
  color: white;
  border: 2px solid #4caf50;
}
@media (max-width: 768px) {
  .modal {
    flex-direction: column;
    padding: 16px;
    max-width: 90%;
    width: 100%;
  }

  .modal-image {
    width: 100%;
    height: auto;
    max-height: 300px;
    margin-bottom: 16px;
  }

  .modal-details h2 {
    font-size: 20px;
  }

  .modal-details p {
    font-size: 14px;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  button {
    width: 100%;
    font-size: 16px;
  }
}
</style>
