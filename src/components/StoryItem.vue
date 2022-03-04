<template>
    <div class="main">
        <div class="header">
            <div class="id">
                <span>{{ID}}</span>
            </div>
            <div class="titles">
                <div class="name">
                    <span>{{Name}}</span>
                </div>
                <div class="sprint">
                    <span>{{Sprint}}</span>
                </div>
                <div class="workOn">
                    <span>{{WorkOut}}/{{WorkRemain}} hodin</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StoriesMain",
    props:{
        ID : String,
        Name : String,
        Sprint: String,
        WorkOut: String,
        WorkRemain : String, 
    },
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
        font-weight: 400;
    }
    .titles{
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-right: 0px;

        font-weight: 400;
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
</style>