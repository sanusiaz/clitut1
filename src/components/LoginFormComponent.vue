<template>
    <div class="login_form">
        {{ form }}
        <h2 style="color: red; text-align: center;">Login Form</h2>
        <form action="" method="POST">
            <label for="email">
                <span>Email:</span>
                <input type="email" name="email" v-model="form.email" placeholder="Enter a valid email address" id="email">
            </label>

            <br><br>
            <label for="password">
                <span>Password: </span>
                <input type="password" v-model="form.password" name="password" id="password">
            </label>

            <br><br>
            <label for="country">
                <span>Country:</span>

                <select v-model="form.country" name="country" id="country">
                    <option value="nigeria">Nigeria</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                </select>
            </label>
            
            <br><br>
            <label for="gender">
                <span>Gender: </span>
                Male: <input type="radio" v-model="form.gender" name="gender" value="male">
                Female: <input type="radio" v-model="form.gender" name="gender" value="female">
            </label>

            <br><br>
            <label for="technology">
                <span>Technology: </span>
                Html <input type="checkbox" v-model="form.technology" name="technology" value="Html">
                Css <input type="checkbox" v-model="form.technology" name="technology" value="CSS">
                Javascript <input type="checkbox" v-model="form.technology" name="technology" value="Javascript">
                Php <input type="checkbox" v-model="form.technology" name="technology" value="PHP">
                MySQL <input type="checkbox" v-model="form.technology" name="technology" value="MYSQL">
                Tailwind css <input type="checkbox" v-model="form.technology" name="technology" value="Tailwind css">
                JSON <input type="checkbox" v-model="form.technology" name="technology" value="JSON">
                VUE js <input type="checkbox" v-model="form.technology" name="technology" value="VUE JS">
                React JS <input type="checkbox" v-model="form.technology" name="technology" value="React JS">
                Laravel <input type="checkbox" v-model="form.technology" name="technology" value="Laravel">
                Livewire <input type="checkbox" v-model="form.technology" name="technology" value="Livewire">
            </label>

            <button @click.prevent="submitForm()" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginFormComponent',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    country: '',
                    gender: '',
                    technology: []
                }
            }
        },

        methods:{
            submitForm() {
                alert('Submit or process form request here');
            }
        }
    }
</script>

<style scoped>
</style>