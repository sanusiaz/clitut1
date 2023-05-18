<template>
  <div>
    <HomeComponent></HomeComponent>
    <ChildComponent :name="user.name" :data="user"></ChildComponent>

    <p>This paragraph is in the App.Vue File</p>
  </div>
</template>

<script>

import HomeComponent from './components/HomeComponent.vue'
import ChildComponent from './components/ChildComponent.vue'

  export default {
    name: "App",
    data() {
      return {
        user: {
          name: 'Some user name',
          email: 'saz@samorlhosting.com'
        }
      }
    },
    components: {
      HomeComponent,
      ChildComponent
    }
}
</script>

<style >
</style>