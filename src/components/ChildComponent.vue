<template>
    <div>
        Name: {{ name }},
        Email: {{ data.email }}
    </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    data() {
        return  {

        }
    },

    props: {
        name: {
            type: String,
            default: 'Some name'
        },

        data: {
            type: Object
        }
    }
}
</script>