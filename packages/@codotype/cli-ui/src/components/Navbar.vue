<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/">
      <strong>Codotype</strong>

      <img class='generator-icon ml-3 mr-1' style="width: 1rem;" :src="selectedModel.icon"/>
      <small>{{ selectedModel.label }}</small>

    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">

        <b-nav-item to="/about">
          <i class="fa fa-lg fa-fw fa-question-circle mr-1"></i>
          About
        </b-nav-item>

        <b-nav-item target="_blank" href="https://twitter.com/codotype">
          <i class="fab fa-lg fa-fw fa-twitter text-primary mr-1"></i>
          Twitter
        </b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <i class="fab fa-lg fa-fw fa-github text-dark mr-1"></i>
          GitHub
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>


<script>
import GeneratorFetchMixin from './GeneratorFetchMixin'

export default {
  name: 'Navbar',
  mixins: [GeneratorFetchMixin]
}
</script>


<style lang="sass">
  nav.navbar
    border-bottom: 1px solid #d3d3d3
</style>
