<template>
  <!-- <div>
    <HomeComponent></HomeComponent>
    <ChildComponent :name="user.name" :data="user"></ChildComponent>

    <p>This paragraph is in the App.Vue File</p>

    <InputComponent :passUserName="getUserName()" name="Sanusi Abdulazeez"></InputComponent>
  </div> -->

  <!-- <LoginFormComponent></LoginFormComponent> -->
  <WatcherComponentVue></WatcherComponentVue>
  <div class="grid grid-cols-4 place-content-center place-items-cemter m-auto">
    <SlotsComponent>
      <template v-slot:header>
        <div>
          HP Intel core i5 For Sale
        </div>
      </template>

      <template v-slot:main>
        <div>
            This HP laptop comes in with free laotop bags, free sticker to add to the back of your laptop, Free additional 16Gb Removable Flash and many more free items as well
        </div>
      </template>

      <template v-slot:discount>
        <div class="absolute -top-3 right-10 bg-red-500 text-white font-semibold rounded-full h-12 w-12 flex justify-center align-middle item-center text-sm p-3">
           <span> -50%</span>
        </div>
      </template>

      <template v-slot:footer>
        <div>
          <button class="bg-gray-500 text-white text-center font-semibold py-3 px-5 rounded">Add to cart</button>
        </div>
      </template>
    </SlotsComponent>
  </div>
</template>

<script>

// import HomeComponent from './components/HomeComponent.vue'
// import ChildComponent from './components/ChildComponent.vue'
// import InputComponent from './components/InputComponent.vue'
// import LoginFormComponent from './components/LoginFormComponent.vue'
import SlotsComponent from './components/SlotsComponent.vue';
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
    // LoginFormComponent,
    WatcherComponentVue,
    SlotsComponent
},

    methods: {
      getUserName(name) {
        this.name = name;
      }
    }
}
</script>

<style scoped>
.cart-wrapper {
  
}
</style>