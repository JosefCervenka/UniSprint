<template>
    <div class="sprintsMain">
        <div class="sprintHeader">
            <h1>Přehled sprintů</h1> <button> <img src="../assets/settings.svg"> Spravovat </button>
        </div>
        <div class="sprints">
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
        </div>
    </div>
</template>

<script>
import SprintWindow from '../components/SprintWindow.vue'

export default {
    name: "Sprints",
    components:{
        SprintWindow
    }
}
</script>

<style scoped lang="css">
    button{
        margin: 0;
        margin-left: 40px;
        padding: 0;
    }
    .sprintHeader{
        align-items: center;
        display: flex;
    }
    .sprints{
        display: flex;
        flex-wrap: wrap;
        padding-top: 40px;
        flex-direction: row;
    }
    .sprintsMain{
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        margin-top: 43px;
    }
    .main{
        margin-bottom: 40px;
        margin-right: 40px;
    }
</style>