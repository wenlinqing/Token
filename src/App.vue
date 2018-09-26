<template>
  <div id="app" v-cloak>
    <!-- <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight"> -->
    	<router-view/>
    <!-- </router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
[v-cloak]{
  display: none;
}
</style>
