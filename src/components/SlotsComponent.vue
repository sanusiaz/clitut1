<template>
    <div class="border border-gray-200 relative rounded-md p-3 py-5 shadow-md transition-all duration-200 hover:shadow-lg hover:translate-y-5 hover:duration-200 flex place-items-center flex-col gap-3">
        <div class="font-semibold text-center">
            <slot name="header">Header Slot Component</slot>
        </div>
        <slot name="main">Default Main Slots Components</slot>

        <div class="absolute -top-3 right-10 bg-red-500 text-white font-semibold rounded-full h-12 w-12 flex justify-center align-middle item-center text-sm p-3">
            <slot name="discount">-90%</slot>
        </div>

        <slot name="footer">Default Footer Components</slot>
    </div>
</template>

<script>
export default {
    name: 'SlotsComponent',
}
</script>