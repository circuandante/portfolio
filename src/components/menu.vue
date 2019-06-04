<template>
    <div>
        <div class="circuandante">
            <router-link to="/">
                <figure>
                    <img src="../img/circuandante_black.png" class="circuandante_img" alt="">
                </figure>
            </router-link>      
        </div>      
        <ul class="menu">
                <li class="menu_link">
                    <router-link to="/" class="link">Inicio</router-link>
                </li>
                <li class="menu_link">
                    <router-link to="/sobre-mi" class="link" >Sobre mi</router-link>
                </li>
                <li class="menu_link">
                    <router-link to="/contacto" class="link" >Contacto</router-link>
                </li>
            </ul>
    </div>
</template>
<style>
li{
    display: block
}
.menu{
    display: block;
    width: 121px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: black;
    font-size: 1.5rem;
}
.menu .link{
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
}
.menu_link{
    margin: 3px 0;
    transform-origin: left bottom;
}
.menu_link:hover{
    transition: .8s cubic-bezier(0, 0, 0.16, 1.01);
    transform: scale(1.2);
    font-weight: 400;
}
.circuandante{
  position: absolute;
  z-index: 5;
}

.circuandante_img{
  background-color: white;
  position: fixed;
  top: 40px;
  left: 40px;
  width:100px;
  border-radius: 50%;
}

</style>

