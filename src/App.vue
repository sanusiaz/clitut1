<template>
  <!-- <div>
    <HomeComponent></HomeComponent>
    <ChildComponent :name="user.name" :data="user"></ChildComponent>

    <p>This paragraph is in the App.Vue File</p>

    <InputComponent :passUserName="getUserName()" name="Sanusi Abdulazeez"></InputComponent>
  </div> -->

  <!-- <LoginFormComponent></LoginFormComponent> -->
  <!-- <WatcherComponentVue></WatcherComponentVue>
  <div class="grid grid-cols-4 gap-5 place-content-center place-items-cemter m-auto">
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
          <div> -50%</div>
      </template>

      <template v-slot:footer>
        <div>
          <button class="bg-gray-500 text-white text-center font-semibold py-3 px-5 rounded">Add to cart</button>
        </div>
      </template>
    </SlotsComponent>


    <SlotsComponent>
      <template v-slot:header>
        <div>
          Header Card Content
        </div>
      </template>

      <template v-slot:main>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta?
        </div>
      </template>

      <template v-slot:footer>
        <div>
          This is my footer which will be in my footer component and this is where i like it to be
        </div>
      </template>
    </SlotsComponent>
  </div>


  <DynamicComponent></DynamicComponent> -->

  <HooksComponent></HooksComponent>
</template>

<script>

// import HomeComponent from './components/HomeComponent.vue'
// import ChildComponent from './components/ChildComponent.vue'
// import InputComponent from './components/InputComponent.vue'
// import LoginFormComponent from './components/LoginFormComponent.vue'
// import DynamicComponent from './components/DynamicComponent.vue';
import HooksComponent from './components/LifeCycleHooksComponent/HooksComponent.vue';
// import SlotsComponent from './components/SlotsComponent.vue';
// import WatcherComponentVue from './components/WatcherComponent.vue'

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
    // WatcherComponentVue,
    // SlotsComponent,
    // DynamicComponent,
    HooksComponent
},

    methods: {
      getUserName(name) {
        this.name = name;
      }
    }
}
</script>