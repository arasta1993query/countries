<template>
  <div class="container">
    <div class="box">
      <div class="row justify-content-between">
        <div class="col col-auto">
         <search placeholder="Search for a country ..." v-model="searchParameter"/>
        </div>
        <div class="col col-auto">
          <custom-select :options="regions" v-model="regionFilter" title="Filter by Region" />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="row">
        <div class="col col-6 mb-74" :class="$style.mb74" v-for="country in showCountries" :key="country.name" >
          <card :country="country" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import Card from "../components/Layouts/Card";
import CustomSelect from "../components/CustomSelect";
export default {
  components: {CustomSelect, Card, Search},
  async asyncData({$axios}){
    const countries = await $axios.get('all?fields=name;population;capital;region;currencies;flag;alpha3Code')
    return {
      countries: countries.data,
      showCountries: countries.data
    }
  },
  data(){
    return{
      searchParameter: '',
      regions: [
        'All',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
      ],
      regionFilter: ''
    }
  },
  watch:{
    searchParameter(newVal){
      const filter = this.countries.filter(country => {
        return country.name.toLowerCase().includes(newVal) || country.capital.toLowerCase().includes(newVal)
      })
      this.showCountries = {...filter}
    },
    regionFilter(newVal){
      if(newVal === 'All') {
        this.showCountries = {...this.countries}
        return
      }
      const filter = this.countries.filter(country => {
        return country.region === newVal
      })
      this.showCountries = {...filter}
    }
  }
}
</script>

<style module>
  .mb74{
    margin-bottom: 74px;
  }
</style>
