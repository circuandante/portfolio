<template>
    <div class="about_me">
        <div class="name">
            <div class="title_about">
                <h1 class="title_about_name">
                    Andrés
                </h1>
            </div>
            <div class="title_about">
                <h1 class="title_about_lastname">
                    Rivera:
                </h1>
            </div>
        </div>
        <div class="text_about">
            <hr class="line_about">
            <p class="text_about_txt">
                <span class="profesion">Diseñador Gráfico</span><br>
                <span class="profesion">Desarrollo web</span><br>
                 De personalidad amigable 
                y pro-activa, con espíritu emprendedor, mentalidad abierta y analítica 
                que me permite enfrentar los retos en un sistema altamente dinámico.
                Realizo mis actividades con entusiasmo y disposición, para adquirir
                nuevos conocimientos, y junto con el conocimiento adquirido de forma autodidacta,
                por medio de
                    <router-link to="/" class="link_cursos">libros, cursos y documenatción online</router-link>, 
                contribuir eficaz y eficientemente con los objetivos de la empresa.
            </p>
        </div>
        <pmmenu></pmmenu>
    </div>
</template>
<script>
import pmmenu from './menu.vue'
export default {
    components:{
        pmmenu
    }
}
</script>

<style scoped>
    .profesion{
        font-weight:600;
        font-size: 21px
    }
    .about_me{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title_about{
        overflow: hidden;
        margin: -45px;
    }
    .title_about_name, .title_about_lastname{
        font-size:8rem;
        margin: 0px;
        animation: 1s name;
    }
    .text_about{
        max-width: 500px;
        position: relative;
        top: 130px;
        right: -55px;
        animation: 1s name;
        animation-delay: .2s;
        overflow: hidden;
    }
    .link_cursos{
        font-weight: 600;
        /* text-decoration: none; */
        color: black;
    }
    .line_about{
        animation-duration: 1s ;
        animation-name: line, disable;
        animation-delay: 1s;
        opacity: 0;
        animation-fill-mode: forwards;

    }
    
    @keyframes line {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
    @keyframes disable {
        from{
           opacity: 0;
        }
        to{
           opacity: 1;
        }
    }
    @keyframes name {
        from{
            transform: translateY(100%);
        }
        to{
            transform: translateY(0);
        }
    }
</style>
<style>
.inicio{
        position: absolute;
        bottom: 5%;
        right: 5%;
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
    }
</style>

