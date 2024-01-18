<script setup>
import { ref } from "vue";

const phone = ref("");
const password = ref("");
const error = ref(false);

const handleSubmit = () => {
  if (phone.value.length === 19 && password.value.length > 3) {
    console.log(`Логин: ${phone.value}, Пароль: ${password.value}`);
  }
};
</script>

<template>
  <div class="loginForm">
    <h1 class="loginForm-title">Вход или регистрация</h1>
    <form>
      <div>
        <p class="labelInput">Телефон</p>
        <input
          name="inputPhone"
          class="inputPhone tw-mb-[10px]"
          placeholder="+ 7 (___) ___ - __ - __"
          type="tel"
          v-model="phone"
          v-mask="'+ 7 (###) ###-##-##'"
        />
      </div>
      <div>
        <input
          name="inputPassword"
          class="inputPassword tw-mb-[40px]"
          placeholder="Пароль"
          type="password"
          maxlength="30"
          minlength="3"
          v-model="password"
        />
      </div>
      <button class="enterBtn" @click.prevent="handleSubmit">Войти</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.loginForm {
  width: 417px;
  height: 355px;
  box-shadow: 0 0 25px #0000001a;
  border-radius: 10px;
  padding: 34px 35px 57px;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  margin: auto;
}
.loginForm-title {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #31363f;
  font-weight: bold;
  margin-bottom: 24px;
}
.labelInput {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #31363f;
  font-weight: bold;
  margin-bottom: 6px;
}
input {
  background-color: #eef1f44d;
  border: 1px solid #eef1f4;
  border-radius: 10px;
  width: 350px;
  height: 46px;
  padding-left: 16px;
}
.enterBtn {
  background-color: #e2e7ee;
  border: 1px solid #eef1f4;
  border-radius: 10px;
  width: 350px;
  height: 46px;
  cursor: pointer;
}
</style>
