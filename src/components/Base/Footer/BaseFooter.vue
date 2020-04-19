<template>
  <div :class="$style.main">
      <div :class="$style.list">
        <ul :class="$style.withoutBullet">
          <li :class="$style.listText">Контакты</li>
          <li :class="$style.listText">Лицензионное соглашение</li>
          <li :class="$style.listText">Договор публичной оферты</li>
          <li :class="$style.listText">Страхование</li>
        </ul>
        <ul :class="$style.withoutBullet">
          <li :class="$style.listText">Контакты</li>
          <li :class="$style.listText">Лицензионное соглашение</li>
          <li :class="$style.listText">Договор публичной оферты</li>
          <li :class="$style.listText">Страхование</li>
        </ul>
        <ul :class="$style.withoutBullet">
          <li :class="$style.listText">Контакты</li>
          <li :class="$style.listText">Лицензионное соглашение</li>
          <li :class="$style.listText">Договор публичной оферты</li>
          <li :class="$style.listText">Страхование</li>
        </ul>
      </div>
      <div :class="$style.messengers">
        <img
          src="./Img/telegram.png"
          alt="telegram"
        >
        <img
          src="./Img/viber.png"
          alt="viber"
        >
      </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style
  lang="scss"
  module
>

.main {
  background-color: #7aca63;
  min-height: 352px;
  display: grid;
  grid-template-columns: 80% 1fr 1fr;
  grid-template-areas: "Text . Messengers";
}


.withoutBullet {
  padding-left: 150px;
  padding-bottom: 15px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  grid-area: Text;
  align-self: center;
}

.listText {
  font-size: 18px;
  margin-top: 18px;
  color: #ffffff;
}

.listText:hover {
  border-bottom: 1px solid white;
  width: 100%;
}

.messengers {
  grid-area: Messengers;
  align-self: center;
  & img {
    padding-bottom: 18px;
    padding-right: 150px;
  }
}


@media (max-width: 500px) {
  .withoutBullet {
    padding-left: 10px;
  }

}

</style>
