<template>
  <div class="example-view">
    <h2>Example Index</h2>
    <div>ID: {{exampleId}}</div>
  </div>
</template>

<script>
export default {
  name: 'example-view',
  data () {
    return {}
  },
  props: {
    exampleId: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.example-view {
  @apply text-red-500;
}
</style>
