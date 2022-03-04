<template>
    <div class="main">
        <h2>Přehled příběhů</h2>

        <div class="storiesHeader">
            <span>ID</span>
            <span>Stav</span>
            <span>Název</span>
            <span>Sprint</span>
            <span>Odpracováno</span>
        </div>
        <div class="EditableStoryItems">
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
            <editable-story-item ID="UNI-20" State="New" Name="Vypracování návrhu aplikace pro plánování sprintů" Sprint="Sprint 1" WorkOut="22" WorkRemain="56"></editable-story-item>
        </div>
    </div>
</template>

<script>


import EditableStoryItem from "./EditableStoryItem.vue";

export default {
    name: "Home",
    props:{
        navName: String,
        buttons: Array
    },
    components:{
        EditableStoryItem
    }
}
</script>

<style scoped lang="css">
    * {
        margin: 0;
        padding: 0;
    }
    .EditableStoryItems{
        margin-bottom: 80px;
    }
    hr{
        width: 100vw;
        color: #939393;
    }
    .main{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: 64px;
        align-items: flex-start;
    }
    h2{
        margin-top: 43px;
        margin-left: 40px;
        font-size: 32px;
    }
    .storiesHeader{
        display: flex;
        font-size: 16px;
        margin-left: 40px;
        margin-top: 58px;

        border-bottom: #939393 solid 1px;
        padding-bottom: 20px;
    }
    .storiesHeader span:first-of-type {
        color: #939393;
        width: 148px;
        font-weight: 600;
    }
    .storiesHeader span:nth-child(2){
        font-weight: 600;
        width: 128px;
    }
    .storiesHeader span:nth-child(3){
        font-weight: 600;
        width: 484px;
    }
    .storiesHeader span:nth-child(4){
        font-weight: 600;
        width: 372px;
    }
    .storiesHeader span:nth-child(5){
        font-weight: 600;
        width: 322px;
    }
</style>