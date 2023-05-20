<template>
    <div>
        <br>
        ______________________________________
        <h2>Watcher Components Starts Here</h2> <br>
        <p>Count Value is {{ count }}</p>
        <button class="p-3 bg-gray-400 text-black font-semibold m-2 py-1 rounded-md" @click="increaseCount()">+</button>
        <button class="p-3 bg-gray-400 text-black font-semibold m-2 py-1 rounded-md" @click="decreaseCount()">-</button>
    </div>
</template>

<script>
    export default {
        name: 'WatcherComponent',
        methods: {
            increaseCount() {
                this.count = this.count+1;
            },

            decreaseCount() {
                this.count = this.count - 1;
            }
        },
        data() {
            return  {
                count: 0
            }
        },
        watch: {
            count(value) {
                if ( value >= 10 ) {
                    this.count = 9;
                    alert('Value has reached its maximum...');
                }
            }
        }
    }
</script>