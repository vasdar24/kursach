
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentUser = ref(JSON.parse(localStorage.getItem("currentUser")) || {});
const newPassword = ref("");
const emailInput = ref("");
const phoneInput = ref("");
const emailError = ref("");
const phoneError = ref("");
const successMessage = ref("");
const showModal = ref(true);

const isAuthenticated = computed(() => !!currentUser.value.name);

onMounted(() => {
  if (!isAuthenticated.value) {
    showModal.value = true;
  } else {
    emailInput.value = currentUser.value.email || "";
    phoneInput.value = currentUser.value.phone || "";
  }
});

function updatePassword() {
  if (!newPassword.value) return;
  currentUser.value.password = newPassword.value;
  updateUserData();
  successMessage.value = "Пароль успешно изменён.";
  newPassword.value = "";
}

function updateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.value = "Введите корректный email.";
    return;
  }
  emailError.value = "";
  currentUser.value.email = emailInput.value;
  updateUserData();
  successMessage.value = "Email успешно обновлён.";
}

function updatePhone() {
  const phoneRegex = /^\+?[78]\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.value = "Введите номер в формате +7XXXXXXXXXX или 8XXXXXXXXXX";
    return;
  }
  phoneError.value = "";
  currentUser.value.phone = phoneInput.value;
  updateUserData();
  successMessage.value = "Телефон успешно обновлён.";
}

function updateUserData() {
  localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.name === currentUser.value.name);
  if (index !== -1) {
    users[index] = currentUser.value;
    localStorage.setItem("users", JSON.stringify(users));
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  router.push("/login");
}

function closeModal() {
  showModal.value = false;
}

function redirectToLogin() {
  router.push("/login");
}

function goToFavorites() {
  router.push("/favorites"); 
}
</script>

<template>
  <div class="bg">
    <div class="register" v-if="isAuthenticated">
      <h2>Личный кабинет</h2>

      <p><strong>Имя:</strong> {{ currentUser.name }}</p>

      <label>Сменить пароль:</label>
      <input type="password" v-model="newPassword" placeholder="Новый пароль" />
      <button @click="updatePassword">Изменить пароль</button>

    
      <label>Email:</label>
      <input
        type="email"
        v-model="emailInput"
        placeholder="Введите email"
        required
      />
      <button @click="updateEmail">
        {{ currentUser.email ? "Изменить" : "Добавить" }} email
      </button>
      <span v-if="emailError">{{ emailError }}</span>

      <label>Номер телефона:</label>
      <input
        type="tel"
        v-model="phoneInput"
        placeholder="Введите номер телефона"
        pattern="^\\+?[78]\\d{10}$"
        required
      />
      <button @click="updatePhone">
        {{ currentUser.phone ? "Изменить" : "Добавить" }} телефон
      </button>
      <span v-if="phoneError">{{ phoneError }}</span>

      <button class="favorite-btn" @click="goToFavorites">
        Перейти в избранное
      </button>

     
      <button class="logout-btn" @click="logout">Выйти из аккаунта</button>

      <p class="success" v-if="successMessage">{{ successMessage }}</p>
    </div>

   
    <div
      v-if="!isAuthenticated && showModal"
      class="modal-overlay"
      @click="closeModal"
    >
      <div class="modal">
        <h3>Вы не авторизованы. Пожалуйста, войдите в систему.</h3>
        <div class="modal-actions">
          <button @click="redirectToLogin">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

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
  color: #234c4b;
  font-family: "Nunito", sans-serif;
  background-color: #c7eedde8;
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

.register {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #13694245;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Nunito", sans-serif;
  color: #333;
}

h2 {
  color: #346f6e;
  margin-bottom: 20px;
  text-align: center;
}

label {
  display: block;
  margin-top: 12px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
}

button {
  margin-top: 20px;
  padding: 10px 16px;
  width: 100%;
  background-color: cadetblue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2d7c7b;
}

span {
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 4px;
  word-break: break-word;
  min-height: 16px;
}

.success {
  color: green;
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
  word-wrap: break-word;
  min-height: 18px;
}

.favorite-btn {
  background-color: #5cab84;
  color: white;
  border-radius: 10px;
  border: none;
  padding: 10px 16px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.favorite-btn:hover {
  background-color: #58826e; 
}

.logout-btn {
  background-color:  #d77e54; 
  color: white;
  border-radius: 10px;
  border: none;
  padding: 10px 16px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color:  #a76344; 
}
</style>
