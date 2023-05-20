<template>
    <h1>This is the dynamic component</h1> <br>
    <button @click="updateActieTab('PhpComponent')">View PHP component</button>
    <button @click="updateActieTab('JavaComponent')">View Java component</button>

    <component :is='activeTab'></component>
</template>

<script>
import PhpComponent from './DynamicComponents/Php.vue'
import JavaComponent from './DynamicComponents/Java.vue'
    export default {
        name: 'DynamicComponent',
        data() {
            return {
                activeTab: 'Php',
            }
        },
        methods: {
            updateActieTab(name) {
                this.activeTab = name
            }
        },

        components: {
            PhpComponent,
            JavaComponent
        },
    }
</script>

<style scoped>
    button {
        color: white;
        font-weight: bold;
        font-size: 14px;
        background-color: #216ea7;
        padding: 2px 10px;
        margin: 4px;
        border: 1px solid transparent;
        border-radius: 15px;
    }
</style>