<template>
  <div id="app">
    <base-header/>
    <router-view/>
    <base-footer/>
  </div>
</template>

<script>


import BaseHeader from './components/Base/Header/BaseHeader'
import BaseFooter from './components/Base/Footer/BaseFooter'

export default {
  name: 'App',
  components: { BaseHeader, BaseFooter }
}
</script>

<style lang="scss">
@import "~normalize.css";
@import "~reset-css";


</style>
