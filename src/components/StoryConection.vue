<template>
    <div class="StoryConnectionWindow">
        <div class="window">
            <div class="StoryConnectionHeader">
                <h4>Přiřazení story</h4>
            </div>
            <div class="StoryConnectionBody">
                <div class="teamBody">
                    <span>Vybrat team</span>
                    <button>Programmers <img src="../assets/arrow.svg"></button>
                </div>
                <div class="sprintBody">
                    <span>Vybrat sprint</span>
                    <button>Sprint 1 <img src="../assets/arrow.svg"> </button>
                </div>
            </div>
            <div class="StoryConnectionFooter">
                <button class="save" v-on:click="$emit('save', 'Planned')">Uložit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StoryConnectionWindow",
    props:{
        SelectedProgramer : String,
        ProgrammersTeams: Array, 
        SelectedSprintName : String,
        SprintsName: Array,
    },

    data(){
        return{
            
        }
    }
}
</script>

<style scoped lang="css">
    .teamBody button{
        width: 174px;
    }
    .StoryConnectionBody div button{
        background-color: #F2F2F2;
        box-shadow: none;
        color: #2E2E2E;
    }
    .StoryConnectionBody div span{
        margin-left: 40px;
    }
    .save{
        margin-top: 50px;
        box-shadow: none;
        width: 75px;
    }
    .StoryConnectionBody{
        display: flex;
        margin-top: 40px;
    }
    .StoryConnectionBody div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
    span{
        color: #939393;
    }
    h4{
        font-size: 24px;
    }
    .StoryConnectionWindow{
        position: absolute;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(1, 1, 1, 0.1);
        left: 0;
        top: 0;
        z-index: 11;
    }
    .window{
        height: 273px;
        width: 513px;
        background-color: #FFFFFF;
        border-radius: 16px;
    }
    .StoryConnectionHeader{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-left: 32px;
        margin-top: 24px;
    }
</style>