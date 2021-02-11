<template>
  <div :class="$style.selectContainer">
    <div :class="$style.select" @click="active = !active">
      {{value.length > 0 ? value : title}}
      <chevron-down  :class="[$style.ionIcon , active ? $style.active : '']" />
    </div>
    <div :class="$style.options" v-show="active">
      <div :class="$style.option" v-for="option in options" :key="option" @click="handleSelected(option)">
        {{option}}
      </div>
    </div>
  </div>
</template>

<script>
  import ChevronDown from "./Icons/ChevronDown";
  export default {
    name: "CustomSelect",
    components: {ChevronDown},
    props: {
      options: Array,
      value: {
        type: String,
        default: ''
      },
      title: String
    },
    data(){
      return {
        active: false
      }
    },
    methods: {
      handleSelected(value) {
        this.$emit('input', value)
        this.active = false
      }
    }
  }
</script>

<style lang="scss" module>
  .selectContainer {
    position: relative;
    width: 200px;
    font-size: 14px;
    line-height: 1;
  }

  .select {
    width: 100%;
    background: var(--bg-secondary);
    border-radius: 4px;
    padding: 18px;
    color: var(--input);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .options {
    width: 100%;
    height: 162px;
    background: var(--bg-secondary);
    padding: 12px;
    border-radius: 4px;
    color: var(--input);
    overflow: auto;
    position: absolute;
    top: 56px;
    z-index: 10;
  }

  .option {
    padding: 12px 8px;
    cursor: pointer;
  }

  .ionIcon{
    width: 16px;
    height: 16px;
    transition: all .3s ease-in-out;
    &.active {
      transform: rotateZ(-180deg);
    }
  }
</style>
