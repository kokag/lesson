<template>
  <div :class="$style.hero">
  <div :class="$style.Body">
    <h1>Наши лучшие няни</h1>
    <div :class="$style.worker">
      <worker1/>
      <worker2/>
      <worker3/>
      <worker4/>
    </div>
  </div>
  </div>
</template>

<script>
import Worker1 from '../../Domain/Worker/Worker1'
import Worker2 from '../../Domain/Worker/Worker2'
import Worker3 from '../../Domain/Worker/Worker3'
import Worker4 from '../../Domain/Worker/Worker4'

export default {
  name: 'BaseBodySitters',
  components: { Worker1, Worker2, Worker3, Worker4 }
}

</script>

<style
  lang="scss"
  module
>

.Body {
margin-bottom: 170px;

  & h1 {
    font-family: Roboto;
    font-size: 42px;
    font-weight: 500;
    line-height: 2.43;
    text-align: center;
    color: #020e1d;
    padding-top: 50px;
    padding-bottom: 120px;
  }
}

.worker {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

</style>
