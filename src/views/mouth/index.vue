<!--
 * new index
 * @author: xiaojie
 * @since: 2023-02-14
 * index.vue
-->
<template>
  <div class="mouth">
    <router-view></router-view>
    <footer class="footer">
      <router-link
        :to="itme.path"
        v-for="itme in footerNav"
        :key="itme.path"
        class="footer-itme"
        active-class="active"
      >
        <div class="footer-img">
          <img class="Icon" :src="itme.alreadyIcon" alt="" />
          <img class="Not" :src="itme.alreadyNot" alt="" />
        </div>
        <span class="footer-text">{{ itme.text }}</span>
      </router-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
const footerNav = [
  {
    path: '/home',
    alreadyIcon: require('@/assets/images/home-select@3x(1).png'),
    alreadyNot: require('@/assets/images/home-select@3x.png'),
    text: '首页'
  },
  {
    path: '/sort',
    alreadyIcon: require('@/assets/images/工具 copy 3@3x(1).png'),
    alreadyNot: require('@/assets/images/工具 copy 3@3x.png'),
    text: '分类'
  },
  {
    path: '/car',
    alreadyIcon: require('@/assets/images/报单@3x(1).png'),
    alreadyNot: require('@/assets/images/报单@3x.png'),
    text: '购物车'
  },
  {
    path: '/mine',
    alreadyIcon: require('@/assets/images/我的@3x(1).png'),
    alreadyNot: require('@/assets/images/我的@3x.png'),
    text: '我的'
  }
]
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  &-itme {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.active {
      .footer-img {
        .Icon {
          display: block;
        }
        .Not {
          display: none;
        }
      }
      .footer-text {
        color: #fe1300;
      }
    }
    .footer-img {
      .Icon {
        display: none;
      }
    }
  }
  &-img {
    width: 50px;
    height: 50px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &-text {
    margin-top: 10px;
    font-size: 24px;
    color: #000;
  }
}
</style>
