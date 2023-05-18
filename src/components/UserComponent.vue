<template>
    <div>
        <h2>{{ item.name }} ..... {{ item.email }}</h2>
    </div> 
</template>


<script>
export default {
    name: 'UserComponent',
    props: {
        item: {
            type: Object
        }
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