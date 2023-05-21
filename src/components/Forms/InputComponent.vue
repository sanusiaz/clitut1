<template>
    <label :for="label" class="flex flex-col gap-2">
        <span class="font-semibold text-sm capitalize">{{ label }}: </span>
        <input class="border border-gray-200 px-5 py-3 rounded-md placeholder:text-gray-700 text-gray-700 invalid:border-red-700 text-sm" @keyup="this.$emit('getValue', this.value[label] + '__type__' + label)" ref="input" :type="type" :name="name" v-model="value[label]" :placeholder="placeholder">
    </label>

</template>

<script>
    export default {
        name: 'InputComponent',

        data() {
            return {
                value: []
            }
        }, 

        props: {
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: 'Some Placeholder Here'
            },
            type: {
                type: String,
                default: 'text'
            }
        }

    }
</script>

<style scoped>
    input {
        max-width: 300px;
        min-width: 400px;
    }
</style>