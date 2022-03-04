<template>
    <div class="StoryConnectionWindow">
        <div class="window">
            <div class="StoryConnectionHeader">
                <h4>Přiřazení story</h4>
            </div>
            <div class="StoryConnectionBody">
                <button>Vybrat team</button>
                <button>Vybrat sprint</button>
            </div>
            <div class="StoryConnectionFooter">
                <button class="save">Uložit</button>
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
        border-radius: 8px;
    }
</style>