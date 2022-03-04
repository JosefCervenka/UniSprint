<template>
    <div class="mainScroll">
        <h3>Aktuální sprinty</h3>
        <div class="scrollBar" style="width: 100%">
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="ac2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="ab2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="ae2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
            <SprintWindow Name="Testování a odhalování chyb aplikace" :UserCount="6" :Description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo enim quis egestas tristique blandit montes, cursus mauris. Sed tortor neque, vitae bibendum diam est fermentum.'" :DateFrom="'20.1.2021 8:00'" :DateTo="'21.1.2021 16:00'" id="af2213aa-a66a-48f2-98ce-89745f39d477"></SprintWindow>
        </div>
        <button> <img src="../assets/settings.svg"> Spravovat </button>
    </div>
</template>

<script>

import SprintWindow from "../components/SprintWindow.vue"


export default {
    components: {
    SprintWindow
    }
}
</script>   

<style scoped lang="css">
    * {
        margin: 0;
        padding: 0;
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
    }
    .scrollBar{
        margin-top: 16px;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        padding: 2px;
    }
    .scrollBar > div:nth-of-type(1){
        margin-left: 40px;


    }

    .scrollBar::-webkit-scrollbar {
        display: none;
    }   
    .mainScroll{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }
    h3{
        color: #525252;
        margin-top: 30px;
        font-weight: 400;
        margin-left: 40px;
    }

</style>