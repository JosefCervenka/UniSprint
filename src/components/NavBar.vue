<template>
    <div class="window">
        <h1><a href="/">{{navName}}</a></h1>
        <div class="buttons">
            <div v-for="button in buttons" :key="button.name" class="button">
                <a v-bind:href="button.link">{{button.name}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props:{
        navName: String,
        buttons: Array
    }
}
</script>

<style scoped lang="css">
    * {
        margin: 0;
        padding: 0;
    }
    .window{
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        background-color: #1E1B1B;
        height: 64px;
        align-items: center;
    }
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }
    h1 a{
        font-size: 22px;
        color: #FFFFFF;
        margin-left: 40px;
        text-decoration: none;
    }
    .buttons{
        display: flex;
        margin-left: 64px;
    }
    .button{
        margin-right: 32px;
    }
    .button a{
        color: #A8A8A8;
        text-decoration: none;
    }
    .button a:hover{
        color: #FFFFFF;
        transition: ease all 0.4s;
    }
</style>