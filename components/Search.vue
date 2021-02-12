<template>
  <div :class="$style.search">
    <search-icon :class="$style.ionIcon"/>
    <input class="box-shadow" :value="value" @input="$emit('input', $event.target.value)" type="text"
           :placeholder="$attrs.placeholder">
  </div>
</template>

<script>
  import SearchIcon from "./Icons/SearchIcon";
  export default {
    name: "Search",
    components: {SearchIcon},
    props: {
      value: String
    }
  }
</script>

<style lang="scss" module>
  .search {
    width: 480px;
    position: relative;

    input {
      width: 100%;
      border: none;
      background: var(--bg-secondary);
      border-radius: 4px;
      padding: 18px 18px 18px 74px;
      color: var(--input);


      &::placeholder {
        /*color: var(--input);*/
      }
    }
  }

  .ionIcon{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 32px;
    z-index: 10;
    color: var(--color);
  }

  @media (max-width: 400px) {
    .search {
      width: 100%;
    }
  }
</style>
