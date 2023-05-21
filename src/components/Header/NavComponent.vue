<template>
    <nav>
        <ul class="flex align-middle gap-3 flex-row">
            <li><router-link to="/">Home Page</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li>
                <button @click="showForm('LoginComponent')">Login</button>
            </li>
            <li>
                <button @click="showForm('RegisterComponent')">Register</button>
            </li>
        </ul>
    </nav>


    <!-- Login and Signup Popup -->
    <teleport to='#popup'>
        <div v-if="showFormActive !== ''"
            class="popup_wrapper fixed top-0 left-0 flex place-content-center place-items-center w-full z-50 h-screen bg-[#808080d1]"
            style="background-color: #808080d1;">
            <div class="inner_content relative">
                
                <component :is="showFormActive"></component>

                <!-- Exit Popup Button -->
                <span class="absolute top-2 flex align-middle items-center justify-center cursor-pointer right-5" @click="showFormActive = ''">
                    <svg fill="none" class="w-6 h-6 stroke-white" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </span>
            </div>
        </div>
    </teleport>
</template>

<script>

import LoginComponent from '../LoginComponent.vue'
import RegisterComponent from '../RegisterComponent.vue'

export default {
    name: 'NavComponent',

    data() {
        return {
            showFormActive: ''
        }
    },

    components: {
        LoginComponent,
        RegisterComponent
    },

    methods: {
        showForm(name) {
            this.showFormActive = name
        }
    }
}
</script>

<style scoped>
li>a {
    text-decoration: underline;
    color: #216ea7;
    font-weight: 600;
}

li>a:hover {
    color: green
}

.inner_content {
    display: block;
    background-color: white;
    height: max-content;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
</style>