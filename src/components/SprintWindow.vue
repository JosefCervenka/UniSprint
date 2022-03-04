<template>
    <div class="main">
        <div class="card">
            <div class="top">
                <div class="header">
                    <h4>{{Name}}</h4>
                    <div class="user">
                        <span>{{UserCount}}</span>
                        <img src="../assets/user.svg">
                    </div>
                </div>
                <div class="description">
                    {{Description}}
                </div>
            </div>
            <div class="footer">
                <span>{{DateFrom}} - {{DateTo}}</span>
                <span>Detail <img src="../assets/Vector.svg"/></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SprintWindow",
    props:{
        Name: String,
        UserCount: String,
        Description: String,
        DateFrom: String,
        DateTo: String,
        Id: String
    },
}
</script>

<style scoped lang="css">
    .footer span{
        display: flex;
        align-items: center;
        color: #9051A7;
        justify-content: space-between;
    }
    .footer span img{
        margin-left: 16px;
    }
    .description{
        margin-left: 16px;
        font-size: 14px;
        color: #939393;
        margin-right: 16px;
        margin-top:16px;
    }
    .header{
        height: 62px;
        margin-top: 16px;
        margin-right: 24px;
        margin-left: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h4{
        font-size: 22px;
        font-weight: 700;
    }
    .main{
        background-color: #9051A7;
        min-height: 246px;
        min-width: 406px;
        height: 246px;
        width: 406px;
        box-shadow: 1px 1px 2px 1px #888888;
        border-radius: 8px;
        margin-right: 20px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row-reverse;
    }
    .user{
        display: flex;
    }
    .footer{
        color: #1E1B1B;
        font-size: 14px;
        margin-left: 16px;
        margin-right: 16px;
        display: flex;
        align-items: center;
        height: 48px;
        display: flex;
        justify-content: space-between;
    }
    .user span{
        color: #939393;
        margin-right: 6px;
    }
    .card{
        background-color: white;
        width: 398px;
        height: 100%;
        border-radius: 0px 8px 8px 0px;
        display: flex;
        flex-direction: column;
    }
    .top{
        height: 190px;
    }
</style>