<template>
  <div :class="$style.cHeader">
    <div class="container">
      <div class="row space-between align-center">
        <div class="col">
          <p class="title">
            Where in the world?
          </p>
        </div>
        <div class="col col-auto" @click="cssModeToggle">
          <div class="d-flex align-items-center" :class="$style.cssMode">
            <moon :class="$style.moonIcon" v-if="cssMode"/>
            <moon-outline :class="$style.moonIcon" v-else/>
            <p class="text medium">
              {{ cssMode ? 'Dark Mode' : 'Light Mode' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Moon from "../Icons/Moon";
    import MoonOutline from "../Icons/MoonOutline";
    export default {
        name: "CustomHeader",
      components: {MoonOutline, Moon},
      computed:{
          cssMode() {
            return this.$nuxt.$colorMode.value === 'dark'
          }
      },
      methods:{
        cssModeToggle(){
          this.$nuxt.$colorMode.preference = $nuxt.$colorMode.value === 'dark' ? 'light' : 'dark'
        }
      }
    }
</script>

<style lang="scss" module>
  .cHeader {
    display: flex;
    height: 80px;
    background: var(--bg-secondary);
    width: 100%;
    align-items: center;
  }

  .cssMode{
    cursor: pointer;
  }

  .moonIcon{
    width: 18px;
    height: 18px;
    color: var(--color);
    margin-right: 8px;
  }
</style>
