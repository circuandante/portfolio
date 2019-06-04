<template>
    <div class="icon">
        <a :href="icon.url" target="_blank">
            <figure>
                <img :src="icon.urlImage" alt="" class="icon_img">
            </figure>
            <!-- <div class="name">
                <p>{{icon.name}}</p>
            </div> -->
            <!-- <div>
                <img src="../img/behance.png" alt="">
            </div> -->
        </a>
    </div>
</template>
<script>
export default {
    props: {
        //nombre de la propiedad o propiedad y tipo
        icon: Object
    }
}
</script>

<style scoped>
    figure{
        margin:0
    }
    .icon{
        width:100px;
        
    }
    .icon_img{
        width:80px;
       
    }
</style>

