<template>
  <div>
    <div style="height:59px;"></div>
    <div class="footer flex flexbetween">
        <router-link to='/index' :default-active="$route.path">
            <span class="nav1"></span>
            <p>钱包</p>
        </router-link>
        <router-link to='/index2' :default-active="$route.path">
            <span class="nav2"></span>
            <p>市场</p>
        </router-link>
        <router-link to='/index3' :default-active="$route.path">
            <span class="nav3"></span>
            <p>浏览</p>
        </router-link>
        <router-link to='/personal' :default-active="$route.path">
            <span class="nav4"></span>
            <p>我</p>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
}
</script>
