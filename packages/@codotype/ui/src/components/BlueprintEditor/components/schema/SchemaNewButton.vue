<template>
  <b-button
    id="new-schema-button"
    block
    variant="primary"
    size="lg"
    class="mb-2"
    @click="$store.dispatch('editor/schema/newModel')"
  >
    <i class="fa fa-fw fa-plus"></i>
    New Schema
  </b-button>
</template>

<script>
export default {
  name: 'SchemaNewButton'
}
</script>
