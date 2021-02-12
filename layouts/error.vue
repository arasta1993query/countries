<template>
  <div :class="$style.error">
    <h1>{{error.statusCode}}</h1>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" module>
  .error{
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      color: var(--color);
    }
  }
</style>
