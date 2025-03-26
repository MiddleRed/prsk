<template>
  <div id="navbar-brand">
    <router-link to="/">
      PJSK <font-awesome-icon icon="star" /> 国服车站
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarBrand'
}
</script>

<style lang="scss" scoped>
#navbar-brand {
  font-size: 2.4rem;
  color: white;
  width: 18.2rem;
  height: 3.2rem;
  line-height: 3.2rem;
  margin: {
    top: 0.9rem;
    left: 2rem;
  }
  user-select: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;

    svg {
      transform: rotate(-27deg);
    }
  }
}
</style>
