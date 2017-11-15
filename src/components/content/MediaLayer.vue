<template>
    <div class="container">
        <div v-if="media.type == 0">UNKNOWN</div>
        <div v-else-if="media.type == 1">VIDEO</div>
        <div v-else-if="media.type == 2">AUDIO</div>
        <div v-else-if="media.type == 3">IMAGE</div>
        <div v-else-if="media.type == 4">ARTICLE</div>
        <div v-else="media.type == 5">AD</div>
    </div>
</template>

<script>
    export default {
        name: 'MediaLayer',
        computed: {
            getType() {

            }
        },
        props: {
            media: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.media);
        }
    }
</script>

<style lang="scss" scoped>
    .container {

    }
</style>