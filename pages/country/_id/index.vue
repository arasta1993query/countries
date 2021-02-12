<template>
  <div class="container">
    <div class="box">
      <div class="box">
        <custom-button class="d-flex align-items-center" @click="back">
          <arrow  :class="$style.ionIcon"/>
          Back
        </custom-button>
      </div>
      <div class="box">
        <div class="row">
          <div class="col col-24 col-lg-12 mb-5 mb-lg-0">
            <image-container :src="country.flag"/>
          </div>
          <div class="col col-24 col-lg-12">
            <div class="d-flex flex-column justify-content-center" style="height: 100%">
             <div>
               <div :class="$style.title">
                 {{country.name}}
               </div>
               <div class="row mb-74">
                 <div :class="$style.col" class="col col-12">
                   <p :class="$style.contentText">Native Name: <span>{{country.nativeName}}</span></p>
                   <p :class="$style.contentText">Population: <span>{{$separator(country.population)}}</span></p>
                   <p :class="$style.contentText">Region: <span>{{country.region}}</span></p>
                   <p :class="$style.contentText">Sub Region: <span>{{country.subregion}}</span></p>
                   <p :class="$style.contentText">Capital: <span>{{country.capital}}</span></p>
                 </div>
                 <div :class="$style.col" class="col col-12">
                   <p :class="$style.contentText">Top Level Domain: <span v-for="(domain , index) in country.topLevelDomain" :key="domain">{{ index > 0 ? ' ,' + domain : domain }}</span>
                   </p>
                   <p :class="$style.contentText">Currencies: <span v-for="(currency , index) in country.currencies" :key="currency.code">{{ index > 0 ? ' ,' + currency.name : currency.name }}</span>
                   </p>
                   <p :class="$style.contentText">Languages: <span v-for="(languages , index) in country.languages" :key="languages.iso639_1">{{ index > 0 ? ' ,' + languages.name : languages.name }}</span>
                   </p>
                 </div>

               </div>
               <div :class="$style.bordersContainer" v-if="borders.length > 0">
                 <p :class="$style.borderText">Border Countries: </p>
                  <div :class="$style.borders">
                    <custom-button v-for="border in borders" tag="nuxt-link" :to="{name:'country-id', params: {id:border.alpha3Code } }"  :class="$style.borderButton" :key="border.alpha3Code">{{border.name}}</custom-button>
                  </div>
               </div>
             </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomButton from "../../../components/CustomButton";
  import ImageContainer from "../../../components/ImageContainer";
  import Arrow from "../../../components/Icons/Arrow";

  export default {
    name: "Country",
    components: {Arrow, ImageContainer, CustomButton},
    async asyncData({$axios, route}) {
      const country = await $axios.get(`alpha/${route.params.id}`)


      let bordersName

      if(country.data.borders.length > 0){
        const borders = country.data.borders.join(';')

        bordersName = await $axios.get(`alpha?codes=${borders}&fields=name;alpha3Code`)
      }

      const bordersArray = bordersName && bordersName.data.length > 0 ? bordersName.data : []


      return {
        country: country.data,
        borders: bordersArray
      }
    },
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" module>

  .col{
    /*padding-right: 16px;*/
    /*padding-left: 16px;*/
  }

  .title {
    font-size: 18px;
    color: var(--color);
    font-weight: 800;
    margin-bottom: 36px;
  }

  .contentText{
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 16px;

    span{
      font-weight: 300;
      color: var(--input);
    }
  }

  .borders{
    width: 100%;
    display: flex;
    /*flex-wrap: wrap;*/
    overflow-x: auto;
    max-width: 100%;
  }

  .borderText{
    white-space: nowrap;
    margin-right: 8px;
  }

  .bordersContainer{
    width: 100%;
    display: flex;
    max-width: 100%;
    align-items: center;
  }

  .borderButton{
    margin: 12px 8px;
  }

  .ionIcon{
    width: 18px;
    height: 18px;
    /*color: var(--color);*/
    margin-right: 8px;
  }

</style>
