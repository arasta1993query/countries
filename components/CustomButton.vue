<template>
  <component :is="tag" class="box-shadow" v-bind="$attrs" :class="$style.btn" @click="$emit('click' , $event)">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
      tag: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style module>
  .btn {
    padding: 12px 28px;
    background: var(--bg-secondary);
    border-radius: 4px;
    color: var(--input);
    border: none;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
  }
</style>
