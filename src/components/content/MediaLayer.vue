<template>
    <div class="container">
        <div v-if="getType == 0">UNKNOWN</div>
        <div v-else-if="getType == 1">VIDEO</div>
        <div v-else-if="getType == 2">AUDIO</div>
        <div v-else-if="getType == 3">IMAGE</div>
        <div v-else-if="getType == 4">ARTICLE</div>
        <div v-else="getType == 5">AD</div>
    </div>
</template>

<script>
    import Global from '@/global/Global'
    export default {
        name: 'MediaLayer',
        computed: {
            getType() {
                if (Global.isDefined(this.media)) {
                    if (Global.isDefined(this.media.type)) {
                        return this.media.type
                    }
                }
                return 0
            }
        },
        props: {
            media:{
                type : Object
            }
        },
        mounted() {
            console.log(this.media,'media');
        }
    }
</script>

<style lang="scss" scoped>
    .container {

    }
</style>