<template>
     <div>
        <h2 class="font-semibold text-lg text-center py-4">Create New Job</h2>
        <form action="" @submit.prevent="submitForm()" method="post" class="flex flex-col gap-5 relative">
            <!-- Form Label Will go here -->
            

            <button class="font-semibold text-white text-sm bg-blue-700 border border-transparent duration-200 hover:duration-200 py-3 rounded-md hover:text-blue-700 hover:bg-white hover:border-blue-700" type="submit" >Create</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name: 'CreateNewJobComponent',
        data() {
            return {
                formData: {
                    title: '',
                    companyName: '',
                    description: '',
                    summary: '',
                    additionalNotes: ''
                }
            }
        },
        methods: {
            async submitForm() {
                let __response = await axios.post("", this.formData);
                console.log(__response);
            }
        }
    }
</script>