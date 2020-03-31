<template>
  <div class="quot">
    <i class="icon icon-quote-left"></i>
    <span>{{ quote }}</span>
    <i class="icon icon-quote-right"></i>
  </div>
</template>

<script>
export default {
  name: 'Quot',
  props: {
    quote: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scope>
@import './index.scss';
</style>
