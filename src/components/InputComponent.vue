<template>
    <input type="text" name="" id="">
    <button>Send Data to child component</button>
    {{ name }}
</template>

<script>
    export default {
        name: 'InputComponent',
        data() {
            return {
                userName: 'Peter'
            }
        },

        props: {
            passUserName: {
                type: Function
            },
            name: {
                type: String,
                default: 'Some Name'
            }
        }
    }
</script>