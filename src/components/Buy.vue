<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cardNumber = ref("");
const expiry = ref("");
const cvv = ref("");
const showModal = ref(false);


const cartItems = ref([]);

onMounted(() => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    try {
      cartItems.value = JSON.parse(savedCart);
    } catch (error) {
      console.error("Ошибка при парсинге данных из localStorage:", error);
      cartItems.value = [];
    }
  }
});

const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

function handlePayment() {
  showModal.value = true;
  localStorage.removeItem("cartItems");
}

function closeModal() {
  showModal.value = false;
}

function redirectToHome() {
  router.push("/");
}
</script>


<template>
  <div class="bg">
    <div class="buy">
      <h1>💳 Оформление заказа</h1>

      <form @submit.prevent="handlePayment" class="payment-form">
        <div class="form-group">
          <label for="cardNumber">Номер карты</label>
          <input
            type="text"
            v-model="cardNumber"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div class="form-group">
          <label for="expiry">Срок действия</label>
          <input
            type="text"
            v-model="expiry"
            id="expiry"
            placeholder="MM/YY"
            required
          />
        </div>

        <div class="form-group">
          <label for="cvv">CVV</label>
          <input
            type="password"
            v-model="cvv"
            id="cvv"
            placeholder="123"
            required
          />
        </div>

        <div class="total">
          Сумма к оплате: <strong>{{ totalPrice }} ₽</strong>
        </div>

        <button type="submit">Оплатить</button>
      </form>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <h3>Оплата прошла успешно на сумму {{ totalPrice }} ₽</h3>
        <div class="modal-actions">
          <button @click="redirectToHome">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.bg {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/images/contact.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
}

.buy {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #13694245;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  font-family: "Nunito", sans-serif;
  color: #234c4b;
}

h1 {
  color: #346f6e;
  text-align: center;
  margin-bottom: 24px;
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 6px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
}

.total {
  text-align: right;
  font-size: 18px;
  color: #346f6e;
  margin-top: 12px;
}

button {
  background-color: #346f6e;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #295d5c;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: #c7eedde8;
  color: #234c4b;
  font-family: "Nunito", sans-serif;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  z-index: 1001;
}

.modal-actions button {
  background-color: #346f6e;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-actions button:hover {
  background-color: rgb(6, 75, 74);
}
</style>
