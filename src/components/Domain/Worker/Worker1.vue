<template>
  <div :class="$style.main">
    <div :class="$style.box">
      <div :class="$style.picture">
        <img
          src="./Img/name1.png"
          alt="worker"
        >
      </div>
      <div :class="$style.name">
        <p>Жанна М</p>
      </div>
      <div :class="$style.phone">
        <p>599351598</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Worker1'
}
</script>

<style
  lang="scss"
  module
>

.main {
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 40px;
}

.box {
  width: 372px;
  height: 365px;
  border-radius: 16px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.picture {
  display: flex;
  padding-top: 32px;

  & img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 50%;
  }
}

.name {
  display: flex;
  padding-top: 30px;

  & p {
    font-family: Roboto;
    font-size: 24px;
    color: #020e1d;
  }
}

.phone {
  display: flex;
  padding-top: 10px;

  & p {
    font-family: Roboto;
    font-size: 18px;
    color: rgba(2, 14, 29, 0.14);
  }
}

@media (max-width: 1024px) {

  .box {
    width: 250px;
    height: 270px;
  }
  .picture {
    display: flex;
    padding-top: 20px;

    & img {
      width: 150px;
      height: 150px;
      object-fit: contain;
      border-radius: 50%;
    }
  }






}

</style>
