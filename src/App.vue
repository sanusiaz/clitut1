<template>
  <!-- <div>
    <HomeComponent></HomeComponent>
    <ChildComponent :name="user.name" :data="user"></ChildComponent>

    <p>This paragraph is in the App.Vue File</p>

    <InputComponent :passUserName="getUserName()" name="Sanusi Abdulazeez"></InputComponent>
  </div> -->

  <LoginFormComponent></LoginFormComponent>
  <WatcherComponentVue></WatcherComponentVue>
</template>

<script>

// import HomeComponent from './components/HomeComponent.vue'
// import ChildComponent from './components/ChildComponent.vue'
// import InputComponent from './components/InputComponent.vue'
import LoginFormComponent from './components/LoginFormComponent.vue'
import WatcherComponentVue from './components/WatcherComponent.vue'

  export default {
    name: "App",
    data() {
      return {
        user: {
          name: 'Some user name',
          email: 'saz@samorlhosting.com'
        },

        name: ''
      }
    },
    components: {
      // HomeComponent,
      // ChildComponent,
      // InputComponent,
      LoginFormComponent,
      WatcherComponentVue
    },

    methods: {
      getUserName(name) {
        this.name = name;
      }
    }
}
</script>

<style >
</style>