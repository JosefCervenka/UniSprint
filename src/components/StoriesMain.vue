<template>
    <div>
    <div class="main">
        <h3>Stories</h3>

        <div class="header">
            <div class="id">
                <span>ID</span>
            </div>
            <div class="titles">
                <div class="name">
                    <span>Název</span>
                </div>
                <div class="sprint">
                    <span>Sprint</span>
                </div>
                <div class="workOn">
                    <span>Odpracováno</span>
                </div>
            </div>
            
        </div>
    </div>
        <story-item ID="UNI-20" Name="Vypracování návrhu projektu" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></story-item>
        <story-item ID="UNI-20" Name="Vypracování návrhu projektu" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></story-item>
        <story-item ID="UNI-20" Name="Vypracování návrhu projektu" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></story-item>
        <story-item ID="UNI-20" Name="Vypracování návrhu projektu" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></story-item>

        <button> <img src="../assets/settings.svg"> Spravovat </button>
    </div>
</template>

<script>

import StoryItem from "./StoryItem.vue";

export default {
    name: "StoriesMain",

    props:{

    },
    components:{
        StoryItem
    }
}
</script>

<style scoped lang="css">
    .sprint, .name, .workOn{
        margin-bottom: 14px;
        width: 400px;
        margin-top: 14px;
    }
    .header{
        display: flex;
        border-bottom: #E5E5E5 solid 1px;
        font-weight: 800;
    }
    .titles{
        flex: 1;
        display: flex;
        font-weight: 800;
    }
    .id{
        margin-right: 180px;
        width: 60px;
        margin-top: 14px;
        margin-bottom: 14px;
        color: #939393;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .main{
        margin-left: 40px;
    }
    h3{
        color: #525252;
        margin-top: 88px;
        font-weight: 400;
    }
    button{
        margin-left: 40px;
        margin-top: 14px;
        height: 35px;
        width: 127px;
        color: #ffffff;
        background-color: #9051A7;
        display: flex;
        justify-content: space-around;
        align-items: center;
        outline: 0;
        border: 0;
        border-radius: 8px;
        box-shadow: 1px 1px 2px 1px #888888;
        margin-bottom: 100px;
    }
</style>