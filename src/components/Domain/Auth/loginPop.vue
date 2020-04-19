<template>
  <div
    :class="$style.backgroundShadow"
  >
    <div :class="$style.loginModel">
      <div :class="$style.imageContainer">
        <img
          src="./Img/profile.png"
          :class="$style.avatar"
        >
        <button
          :class="$style.closeX"
          @click="close()"
        >
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div :class="$style.container">
        <label><b>Логин</b></label>
        <input
          :class="$style.loginInput"
          type="text"
          placeholder="Логин"
          name="usarname"
          required
        >
        <label><b>Password</b></label>
        <input
          :class="$style.loginInput"
          type="Пароль"
          placeholder="Пароль"
          name="psw"
          required
        >

        <button
          :class="$style.loginButton"
          type="submit"
        >Войти
        </button>
        <label>
          <input
            type="checkbox"
            checked="checked"
            name="Запомнить"
          > Запомнить
        </label>
      </div>
      <div :class="$style.bottonConteiner">
        <button
          :class="$style.closeButton"
          @click="close()"
        >Cancel
        </button>
        <span :class="$style.forgotPass">Забыли<a href="#"> пароль?</a></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loginPop',
  methods: {
    close () {
      this.$emit('close')
    }
  },
}

</script>

<style
  lang="scss"
  module
>


.backgroundShadow {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
}

.loginModel {
  width: 500px;
  height: 540px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: white;
  border-radius: 5%;
}

.imageContainer {
  padding-top: 10px;
  text-align: center;
}

.avatar {
  width: 40%;
  border-radius: 50%;
  text-align: center;
}

.closeX {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;

}

.container {
  margin-left: 15px;
  margin-right: 15px;
}

.loginInput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.loginButton {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.loginButton:hover {
  opacity: 0.8;
}

.bottonConteiner {
  height: 85px;
  background-color: #f1f1f1;
  margin-right: 14px;
  margin-left: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.closeButton {
  margin-left: 10px;
  padding: 9px 23px;
  display: inline-block;
  background-color: #f44336;
  color: white;
}

.closeButton:hover,
.closeButton:focus {
  cursor: pointer;
}

.forgotPass {
  margin-right: 10px;
}

</style>
