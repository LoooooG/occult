<template>
    <div class="audio-container"></div>
</template>

<script>
    export default {
        name: 'AudioUnitLayer',
        props: {
            audio: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.audio);
        }
    }
</script>

<style lang="scss" scoped>

</style>