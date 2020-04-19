<template>
  <div :class="$style.main">
    <div :class="$style.Body">
    <div :class="$style.upperLeftBody">
      <p>Домашний персонал без посредников</p>
      <button :class="$style.clientGreen">Стань клиентом</button>
      <button :class="$style.clientViolet">Стань клиентом</button>
    </div>
    <div :class="$style.upperRightBody">
      <p>Присоединяйтесь!!!</p>
    </div>
  </div>
    <div :class="$style.workerBody">
      <BaseBodySitters/>
    </div>
  </div>
</template>


<script>

import BaseBodySitters from './BaseBodySitters'

export default {
  name: 'HomePage',
  components: { BaseBodySitters }
}
</script>

<style
  lang="scss"
  module
>

.main {
  background-color: #ffffff;
}

.Body {
  display: flex;
  flex-wrap: wrap;
  height: 94vh;
}

.upperLeftBody {
  width: 50%;
  & p {
    padding-top: 295px;
    font-family: 'Roboto', sans-serif;
    font-size: 58px;
    line-height: 1.76;
    color: #4cadc0;
    text-align: center;
  }
}

%button {
  border-radius: 42px;
  display: inline-block;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 24px 68px;
  text-decoration: none;
  margin-top: 74px;
  border: none;
  outline: none;
}

.clientGreen {
  @extend %button;
  margin-left: 122px;
  background-color: #44c767;
  color: #ffffff;
}

.clientViolet {
  @extend %button;
  background-color: #9563ca;
  color: #ffffff;
  margin-left: 50px;
}

.upperRightBody {
  width: 50%;
  background-color: #49cee8;

  & p {
    padding-top: 367px;
    font-family: 'Roboto', sans-serif;
    font-size: 80px;
    text-align: center;
    color: #ffffff;
  }
}

@media (max-width: 1024px) {

  .upperLeftBody {
    width: 100%;
    & p {
      padding-top: 50px;
      font-size: 58px;
      line-height: 1.76;
    }
  }
  .upperRightBody {
    width: 100%;
  }
}

@media (max-width: 815px) {
  .upperLeftBody {
    & p {
      padding-top: 50px;
      font-size: 50px;
      line-height: 1.76;
    }
  }
  %button {
    padding: 20px 50px;
    margin-top: 70px;
  }
  .clientGreen {
    margin-left: 70px;
  }
  .upperRightBody {
    & p {
      padding-top: 100px;
      font-size: 70px;
    }
  }
}

@media (max-width: 414px) {
  .upperLeftBody {
    & p {
      padding-top: 50px;
      font-size: 28px;
      line-height: 1.76;
    }
  }
  %button {
    padding: 15px 30px;
    margin-top: 70px;
  }
  %button {
    margin-top: 50px;
  }
  .clientGreen {
    margin-left: 75px;
  }
  .clientViolet {
    margin-left: 75px;
  }
  .upperRightBody {
    & p {
      padding-top: 100px;
      font-size: 35px;
    }
  }

}
</style>
