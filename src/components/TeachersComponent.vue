<template>
    <ul>
        <li v-for="teacher in teachers" :key="teacher.id"><b>Teacher Name is: </b>{{ teacher.name }}</li>
    </ul>
</template>

<script>

    export default {
        name: 'TeachersComponent',
        data() {
            return {
                teachers: [
                    {id: 1, name: 'mr akintayo', subjects: ['English ', 'Mathematics']},
                    {id: 2, name: 'Mr Akinola', subjects: ['Futher mathemaics ', 'Literature in English']}
                ]
            }
        }
    }
</script>