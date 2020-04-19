<template>
  <div :class="$style.main">
    <h1>Наши няни</h1>
    <div :class="$style.workers">
      <worker1/>
      <worker2/>
      <worker3/>
      <worker4/>
      <worker1/>
      <worker2/>
      <worker3/>
      <worker4/>
      <worker1/>
      <worker2/>
      <worker3/>
    </div>
  </div>
</template>

<script>

import Worker1 from '../../Domain/Worker/Worker1'
import Worker2 from '../../Domain/Worker/Worker2'
import Worker3 from '../../Domain/Worker/Worker3'
import Worker4 from '../../Domain/Worker/Worker4'

export default {
  name: 'WorkerBody',
  components: { Worker1, Worker2, Worker3, Worker4 }
}
</script>

<style
  lang="scss"
  module
>

.main {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  & h1 {
    padding-top: 49px;
    font-family: Roboto;
    font-size: 42px;
    text-align: center;
    color: #020e1d;
  }
}

.workers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 46px;
  padding-left: 60px;
  padding-right: 60px;
}

</style>
