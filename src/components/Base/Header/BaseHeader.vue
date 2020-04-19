<template>
  <div :class="$style.main">
    <div :class="$style.main2" v-if="show"><login-pop @close="show=false"/></div>
    <div :class="$style.Head">
        <div :class="$style.logo">
          <router-link :class="$style.homepage" :to="'/'">Logo</router-link>
        </div>
        <div :class="$style.WorkerSearch">
          <router-link :class="$style.link" :to="'/workers'"> Поиск работника </router-link>
        </div>
        <div :class="$style.workSearch">
          <p>Поиск работы</p>
        </div>
    <div :class="$style.buttonBox" >
        <button :class="$style.button" @click="show = !show">Войти</button>
  </div>
  </div>
  </div>
</template>

<script>

import loginPop from '../../Domain/Auth/loginPop'

export default {

  name: 'BaseHeader',
  components: { loginPop },
  data () {
    return {
      show: false
    }
  },
}

</script>

<style
  lang="scss"
  module
>

.Head {
  box-sizing: content-box;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: 100px 200px 150px auto 150px;
  grid-template-areas: "Logo workerSearch workSearch . Login";
  min-height: 65px;
}

.logo {
  padding-left: 30px;
  align-self: center;
  grid-area: Logo;
}

.homepage {
  text-decoration: none;
  color: black;
  align-self: center;
}

.WorkerSearch {
  align-self: center;
  justify-self: end;
  color: #49cee8;
  font-family: 'Roboto', sans-serif;
  grid-area: workerSearch;
}

.link {
  text-decoration: none;
  color: #49cee8;
}
.workSearch {
  padding-left: 17px;
  align-self: center;
  color: #020e1d;
  grid-area: workSearch;
}

.buttonBox {
  margin-right: 30px;
  grid-area: Login;
  align-self: center;
}

.button {
  background-color:transparent;
  border-radius:28px;
  border:1px solid #070707;
  display:inline-block;
  cursor:pointer;
  color:#020e1d;
  font-family:Arial;
  font-size:16px;
  padding:13px 43px;
  text-decoration:none;
}

@media (max-width: 768px) {

  .Head {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 48px);
    grid-template-areas:
      'Logo'
    'workerSearch'
     'workSearch'
      'Login';
  }
  .logo {
    justify-self: center;
    padding-left: 0;
  }
  .homepage {
    justify-self: center;
  }
  .WorkerSearch {
    justify-self: center;
  }
  .workSearch {
    justify-self: center;
    padding-left: 0;
  }
  .buttonBox {
    justify-self: center;
    margin-right: 0;
  }

  }



</style>
