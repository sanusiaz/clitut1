<template>
    <div>
        <h1>This is the hooks components file</h1>
        {{ count }}
        <button @click="changeSomeData()" class="p-2 px-5 rounded bg-gray-700 text-white font-semibold">Click Me</button>
    </div>
</template>

<script>
    export default {
        name: 'HooksComponent',
        data() {
            return {
                count: 0
            }
        },

        methods: {
            changeSomeData() {
                this.count = this.count + 1
            }
        },

        beforeCreate() {
            alert('Before Created Life cycle hook hit here');
        },

        created() {
            alert('Created Lifecycle Hook Hit here')
        },

        beforeMount() {
            alert('Before Mounted onto the webpage');
        },
        mounted() {
            alert('Document DOM has been fully Mounted to the web page');
        },

        beforeUpdate() {
            alert('Before Update Life Cycle Hit Here')
        },
        
        updated() {
            alert('Updated Life Cycle Hit Here')
        },

        beforeUnmount() {
            alert('Before Unmount Life Cycle Hit Here')
        },

        unmounted() {
            alert('Unmounted Life Cycle Hit Here')
        },
    }
</script>