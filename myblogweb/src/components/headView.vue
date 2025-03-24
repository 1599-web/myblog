<template>
     <!-- 触发区域 -->
  <div>
    <nav 
    class="navbar"
    >
    <ul class="nav-menu">
      <li v-for="item in navItems" :key="item.path">
        <router-link 
          :to="item.path"
          class="nav-link"
          active-class="active"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    </nav>
  </div> 
</template>

<script setup>
// import { ref } from 'vue';
// const showNav = ref(false);

const navItems = [
  { title: '首页', path: '/' },
  { title: '博客', path: '/boke' },
  { title: 'Game', path: '/game' },
  { title: 'AIplay', path: '/arg' },
  { title: 'Cele', path: '/celebra' },
];


</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
.navbar {
  position: fixed;
  top: 0px;
  width: 100%;
  background: transparent;
  padding: 15px 0;
  transition: top 0.3s ease-in-out;
  z-index: 999;
  transition: all 0.3s ease-in-out; /* 统一过渡属性 */
}

.navbar:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 悬停时加深阴影 */
  background-color: #1c1d1f;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.active {
  /* background: #1c1d1f; */
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}


</style>