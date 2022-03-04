<template>
    <div class="SettingWindow">
            <span v-on:click="$emit('changeState', 'New')">
                New
            </span>
            <span v-on:click="$emit('changeState', 'Analyzed')">
                Analyzed
            </span>
            <span v-on:click="$emit('changeState', 'Planned')">
                Planned
            </span>
            <span v-on:click="$emit('changeState', 'Done')">
                Done
            </span>
    </div>
</template>

<script>

export default {
    name: "StorySettting",
    props:{

    },
    components:{

    },
}
</script>

<style scoped lang="css">
    .SettingWindow{
        background-color: #F2F2F2;
        width: 128px;
        height: 163px;
        position: absolute;
        top: 45px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }
    .SettingWindow span{
        color: #686868;
        padding-bottom: 10px;
        padding-top: 10px;
        width: 80px;
        display: flex;
        justify-content: flex-start;
        border-bottom: solid 1px #E4E4E4;
    }
    .SettingWindow span:last-child{
        border-bottom: none;
    }
</style>