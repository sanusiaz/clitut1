<template>
    <div>
        <h2 class="font-semibold text-lg text-center py-4">Login to your account</h2>
        <form action="" @submit.prevent="submitForm()" method="post" class="flex flex-col gap-5 relative">
            
            <InputComponent @getValue="setValue" label="username" name="username" placeholder="Please Choose a Username" type="text"/>
            <InputComponent @getValue="setValue" label="password" name="password" placeholder="Please Enter Your Password" type="password"/>
        

            <button class="font-semibold text-white text-sm bg-blue-700 border border-transparent duration-200 hover:duration-200 py-3 rounded-md hover:text-blue-700 hover:bg-white hover:border-blue-700" type="submit" >Login</button>
        </form>
    </div>
</template>

<script>
import InputComponent from './Forms/InputComponent.vue';
export default {
    name: 'LoginComponent',

    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    components: {
        InputComponent
    },
    methods: {
        submitForm() {
            alert(this.form.username + ' Password is: ' + this.form.password)
        },

        setValue(value) {
            let spiltedData = value.split('__type__');
            let __value     = spiltedData[0];
            let type        = spiltedData[1];

            if ( type === 'username' ) {
                this.form.username = __value;
            }
            else if ( type === 'password' ) {
                this.form.password = __value;
            }

        }
    }

}
</script>