<template>
    <div>
        User Name is: {{ routeParams.name }}
    </div> 
</template>


<script>
import {useRoute} from 'vue-router'
export default {
    name: 'UserComponent',
    data() {
        return {
            routeParams: {}
        }
    },
    mounted() {
        const route = useRoute();
        this.routeParams = route.params; 
    }
}
</script>


<style scoped>
    div {
        background-color: gold;
        display: flex;
        color: black;
    }
</style>