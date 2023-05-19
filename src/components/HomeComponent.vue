<template>
    <div>
        <p>THis is a paragraph inside the home component</p>
        <h2>Email Address: {{ getEmail() }}</h2>

        <button :class="{active:true, isActive}" @click="showPopup()">Click Me</button>

        <button class="btn" :disabled="isDisabled" :class="toggleButtonClasses" @click="isActive = !isActive">
            Toggle Button Classes
        </button>

        <div v-if="this.hidePopup">
            Showing Popup here
        </div>

        <ol>
            <li v-for="user in users" :key="user.email"><UserComponent :item="user"></UserComponent></li>
        </ol>

        <ul>
            <li v-for="student in students" :key="student.id">{{ student.name }}</li>
        </ul>

        <TeachersComponent></TeachersComponent>
    </div>
</template>

<script>
    import TeachersComponent from './TeachersComponent.vue'
    import UserComponent from './UserComponent.vue'

    export default {
        name: 'HomeComponent',
        components: {
            TeachersComponent,
            UserComponent
        },
        data() {
            return {
                email: 'sanusiabdulazeezadebayo1@gmail.com',
                hidePopup: false,
                students: [
                    {id: 1, name: 'sanusi abdulazeez', age: 20},
                    {id: 2, name: 'some name', age: 30}
                ],
                users: [
                    {name: 'Anil', email: 'anil@test.com'},
                    {name: 'peter', email: 'peterjohnson@gmail.com'},
                    {name: 'John', email: 'johnpaul@gmail.com'}
                ],

                isActive: false,
                isDisabled: false,
                hasError: false
            }
        },
        computed: {
            toggleButtonClasses() {

                return {
                    active: this.isActive,
                    error: this.hasError
                }
            }
        },
        methods: {
            // Acces Email
            getEmail() {
                return this.email
            },

            // Set Email ( Mutators )
            setEmail(email) {
                this.email = email
            },

            showPopup() {
                this.hidePopup = !this.hidePopup
            }
        }
    }
</script>


<style scoped>
    p {
        color: red;
    }

    .active {
        color: green;
        background-color: white;
        border: 1px solid green;
        border-radius: 10px;
        padding: 5px 15px;
    }

    .btn {
        color: #216ea7;
        background-color: white;
        border: 1px solid #216ea7;
        box-shadow: 1px 2px 3px -4px rgba(0,0,0,.4);
    }

    .error {
        color: red;
        border-color: red;
    }
</style>