<template>
  <div id="app">
    <div id="nav" class="nav bg-dark justify-content-center">
      <div class="nav-item">
        <router-link
          to="/"
          class="nav-link"
          :class="$router.currentRoute.path === '/' ? 'text-light' : 'text-muted'"
        >
          Home
        </router-link>
      </div>
      <div class="nav-item">
        <router-link
          to="/about"
          class="nav-link"
          :class="$router.currentRoute.path === '/about' ? 'text-light' : 'text-muted'"
        >
          Sobre
        </router-link>
      </div>
      <div class="nav-item">
        <router-link
          to="/classmates"
          class="nav-link"
          :class="$router.currentRoute.path === '/classmates' ? 'text-light' : 'text-muted'"
        >
          Colegas
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
