<template>
  <nuxt-link :to="{name:'country-id', params: {id:country.alpha3Code }}">
    <div :class="$style.card">
      <image-container :src="country.flag" />
      <div :class="$style.content">
        <h4 class="bold" :class="$style.title">{{country.name}}</h4>
        <p class="text medium">Population: <span :class="$style.text">{{ $separator(country.population) }}</span></p>
        <p class="text medium">Region: <span :class="$style.text">{{country.region}}</span></p>
        <p class="text medium">Capital: <span :class="$style.text">{{country.capital}}</span></p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  import ImageContainer from "../ImageContainer";
  export default {
    name: "Card",
    components: {ImageContainer},
    props: {
      country: Object
    }
  }
</script>

<style lang="scss" module>
  .card {
    background: var(--bg-secondary);
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
  }



  .content {
    padding: 24px;

    p {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .title {
    font-size: 16px;
    color: var(--color);
    margin-bottom: 18px;
  }

  .text {
    color: var(--input);
    font-weight: 300;
  }
</style>
