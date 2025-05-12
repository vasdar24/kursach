
<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";

const router = useRouter();

function goToBuy() {
  saveCart(); 
  router.push("/buy");
}


const cartItems = ref([]);

onMounted(function() {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    try {
      cartItems.value = JSON.parse(savedCart).map(function(item) {
        return {
          ...item,
          quantity: item.quantity || 1,
        };
      });
    } catch (e) {
      console.error("Ошибка загрузки корзины:", e);
      cartItems.value = [];
    }
  }
});

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
}


function increaseQuantity(item) {
  item.quantity++; 
  saveCart(); 
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--; 
    saveCart();
  }
}

function removeFromCart(id) {
  cartItems.value = cartItems.value.filter(function(item) {
    return item.id !== id; 
  });
  saveCart(); 
}

function clearCart() {
  cartItems.value = []; 
  saveCart(); 
}

const totalPrice = computed(function() {
  return cartItems.value.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
});
</script>

<template>
  <div class="cart">
    <h1>Корзина</h1>

    <div v-if="cartItems.length === 0">
      <p>Ваша корзина пуста.</p>
    </div>

    <div v-else class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="item" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>Цена за шт: {{ item.price }} ₽</p>

          <div class="quantity-controls">
            <button @click="decreaseQuantity(item)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>

          <p><strong>Сумма:</strong> {{ item.price * item.quantity }} ₽</p>
          <button class="delete-btn" @click="removeFromCart(item.id)">
            Удалить
          </button>
        </div>
      </div>

      <div class="total"><strong>Итого:</strong> {{ totalPrice }} ₽</div>

      <div class="cart-actions">
        <button class="clear-btn" @click="clearCart">Очистить корзину</button>
        <button class="checkout-btn" @click="goToBuy">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

.cart {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/contact.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  font-family: "Nunito", sans-serif;
}

.cart-list {
  width: 100%;
  max-width: 600px;
  background-color: #13694245;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #333;
}

.cart h1 {
  color: #346f6e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 28px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #ccc;
  padding: 16px 0;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
}

.info h3 {
  margin: 0;
  font-size: 18px;
  color: #346f6e;
}

.info p {
  margin: 4px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

.quantity-controls button {
  background-color: #346f6e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.quantity-controls button:hover {
  background-color: #295d5c;
}

button,
.checkout-btn {
  flex: 1;
  text-align: center;
  background-color: #346f6e;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;
}

button:hover,
.checkout-btn:hover {
  background-color: #295d5c;
  transform: translateY(-1px);
}

.total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  color: #346f6e;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
}

.clear-btn {
  background-color:  #d77e54;
}

.clear-btn:hover {
  background-color:  #ad6442;
}

.delete-btn {
  background-color:  #d77e54;
  margin-top: 10px;
}

.delete-btn:hover {
  background-color: #ad6442;
}

.checkout-btn {
  display: inline-block;
  text-decoration: none;
}
</style>
