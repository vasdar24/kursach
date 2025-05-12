<script setup>
import { onMounted, computed } from "vue";

const currentUser = ref(JSON.parse(localStorage.getItem("currentUser")) || {});
const showModal = ref(false);

const isAuthenticated = computed(() => !!currentUser.value.name);

onMounted(() => {
  if (isAuthenticated.value) {
    showModal.value = true;
  }
});

function closeModal() {
  showModal.value = false;
}

function goToProfile() {
  router.push("/profile"); 
}

import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const password = ref("");
const spanName = ref("");
const spanPassword = ref("");
const spanSignIn = ref("");

const regName = /^[А-Я][а-я]{3,10}$/;
const regPassword = /^(?=.*[0-9])(?=.*[!?])[А-Яа-я0-9!?]{4,10}$/;

const router = useRouter();

function handleSubmit() {
  spanName.value = "";
  spanPassword.value = "";
  spanSignIn.value = "";

  let isValid = true;

  if (!name.value) {
    spanName.value = "Заполните это поле";
    isValid = false;
  } else if (!regName.test(name.value)) {
    spanName.value =
      "Имя должно начинаться с заглавной и быть от 4 до 10 букв.";
    isValid = false;
  }

  if (!password.value) {
    spanPassword.value = "Заполните это поле";
    isValid = false;
  } else if (!regPassword.test(password.value)) {
    spanPassword.value =
      "Пароль должен быть от 4 до 10 символов и включать цифру и ! или ?";
    isValid = false;
  }

  if (isValid) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.name === name.value && u.password === password.value,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify({ name: user.name }));
      router.push("/profile"); 
    } else {
      spanSignIn.value = "Неверное имя пользователя или пароль.";
    }
  }
}
</script>

<template>
  <div class="bg">
    <div class="register">
      <h2>Авторизация</h2>
      <label for="name">Введите имя:</label>
      <input id="name" type="text" v-model="name" placeholder="Ваше имя" />
      <span>{{ spanName }}</span>

      <label for="password">Введите пароль:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="Ваш пароль"
      />
      <span>{{ spanPassword }}</span>

      <button @click="handleSubmit">Войти</button>
      <span class="success">{{ spanSignIn }}</span>
    </div>
  </div>
  
  <div
    v-if="isAuthenticated && showModal"
    class="modal-overlay"
    @click="closeModal"
  >
    <div class="modal">
      <h3>Вы уже вошли в систему. Пожалуйста, выйдите из аккаунта.</h3>
      <div class="modal-actions">
        <button @click="goToProfile">OK</button>
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
</style>
