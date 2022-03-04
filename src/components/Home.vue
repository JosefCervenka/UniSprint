<template>
    <div class="main">
        <h2>Aktuální přehled</h2>
        <ScrollBar></ScrollBar>
        <StoriesMain></StoriesMain>
    </div>
</template>

<script>
import ScrollBar from "../components/ScrollBar.vue"
import StoriesMain from "../components/StoriesMain.vue"

export default {
    name: "Home",
    props:{
        navName: String,
        buttons: Array
    },
    components:{
        ScrollBar,
        StoriesMain
    }
}
</script>

<style scoped lang="css">
    * {
        margin: 0;
        padding: 0;
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
    h3{
        color: #525252;
        margin-left: 40px;
        margin-top: 32px;
    }

</style>