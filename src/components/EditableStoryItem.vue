<template>
    <div class="item">
        <span>{{ID}}</span>
        <div class="dropDown" ><button class="change" v-on:click="isOpenChange = !isOpenChange">{{dataState}}
        <StorySetting v-if="isOpenChange == true" @changeState="(state) => dataState = state"></StorySetting>
        <img src="../assets/arrow.svg"/></button></div>
        <span>{{Name}}</span>
        <span>{{Sprint}}</span>
        <span>{{WorkOut}} z {{WorkRemain}} hodin</span>
        <div class="btn">
            <button class="add" v-on:click="isOpenSetting = true">Přiřadit</button>
            <story-connection v-if="isOpenSetting" :ProgrammersTeams="['Programmers','Designers','Testers',]"
             electedProgramer="Programmers"
             SelectedSprintName='Testování a odhalování chyb aplikace'
             :SprintsName="['Testování a odhalování chyb aplikace']"
             @save="()=>{isOpenSetting = false}">
            </story-connection>
        </div>
    </div>
</template>

<script>

import StorySetting from './StorySetting.vue';
import StoryConnection from "./StoryConection.vue"


export default {
    name: "EditableStoryItem",
    props:{
        ID: String,
        State: String,
        Name: String,
        Sprint: String,
        WorkOut: String,
        WorkRemain: String
    },
    components:{
        StorySetting,
        StoryConnection
    },
    data() {
        return {
            isOpenChange: false,
            isOpenSetting: false,
            dataState: this.State
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="css">
    button.add{
        background-color: rgba(1, 1, 1, 0);
        box-shadow: 0px 0px 0px 0px;
        border: solid 2px #5D3277;
        color: #5D3277;
        width: 76px;
    }
    button.change{
        width: 120px;
        background-color: #F2F2F2;
        box-shadow: none;
        color: #686868;
        position: relative;
        display: flex;
        justify-content: space-around;
        
    }
    * {
        margin: 0;
        padding: 0;
    }
    .item{
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        margin-left: 40px;
        border-bottom: solid 1px #939393;
        display: flex;
        align-items: center;
    }
    .item span:nth-child(1){
        width: 128px;
        color: #939393;
    }
    .item .dropDown{
        width: 148px;
    }
    .item span:nth-child(3){
        width: 484px;
    }
    .item span:nth-child(4){
        width: 372px;
    }
    .btn{
        width: 229px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>