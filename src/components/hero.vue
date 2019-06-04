<template>
  <div class="hero">
    <div class="circuandante">
      <router-link to="/">
          <figure>
              <img src="../img/circuandante_black.png" class="circuandante_img" alt="">
          </figure>
      </router-link>      
    </div>
    <div class="hero_content">
      <div class="yo_img">
        <router-link to="sobre-mi">
          <figure>
              <img src="../img/yo_bn2.png" to="about" alt="Andrés Rivera" class="yo">
          </figure>
          <p class="about" to="me">Sobre mi</p>
        </router-link>
      </div>
      <div class="redesSociales"> 
          <div class="hero_redes">
            <a href="https://www.behance.net/anriaco" class="rrss" target="_blank" >
              <figure>
                <img src="../img/behance.png" class="behance" alt="">
              </figure>
            </a>
          </div>
          <div class="hero_redes">
            <a href="https://www.github.com/anriaco" target="_blank">
              <figure>
                <img src="../img/git.png" class="behance" alt="">
              </figure>
            </a>
          </div>
          <div class="hero_redes">
            <a href="https://www.instagram.com/circuandante" target="_blank">
              <figure>
                <img src="../img/instagram.png" class="behance" alt="">
              </figure>
            </a>
          </div>
          <div class="hero_redes">
            <a href="https://www.linkedin.com/in/anriaco/" target="_blank">
              <figure>
                <img src="../img/linked.png" class="behance" alt="">
              </figure>
            </a>
          </div>
          <div class="hero_redes">
            <a href="https://www.twitter.com/circuandante" target="_blank">
              <figure>
                <img src="../img/twitter.png" class="behance" alt="">
              </figure>
            </a>
          </div>
      </div>
      <!-- <div>
          <ul>
              <li v-for="rrss in redessociales" :key="rrss.id">{{rrss.name}}</li>
          </ul>
      </div> -->
    </div>
    <ul class="menu">
      <li class="menu_link">
        <router-link to="/contacto" class="link" >Contacto</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import redessociales from '../assets/redes_sociales.js'
export default {
    data(){
        return{
            redessociales: [],
            }
            // rredess: redessociales[i].name        }
    },
    components:{ 
        redessociales,
    }
}
</script>

<style scoped>

    figure{
      margin:5px;
    }
    .circuandante_img{
      background-color:transparent;
    }
    .yo_img{
      margin-bottom:8%;
    }
    .yo{
        width: 250px;
        border-radius: 50%;
    }
    .hero{
      background: linear-gradient(300deg, white 50%, #bdbdbd 95% );
      width: 100vw;
      height: 100vh;
      display: flex;
      /* align-content: center; */
      align-items: center;
      justify-content: center;
    }
    .hero_content{
      text-align: center;
      width: 40%;
      width: 100%;
      max-width: 767px;
      position: relative;
    }
    .redesSociales{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hero_redes{
      border-radius: 50%;
      margin:0 13px;
    }
    .hero_redes figure img{
      width: 80px
    }
    .hero_redes:hover{
      transform: scale(1.3);
      box-shadow: 0px 30px 70px #888, inset  8px 6px 10px 0px #c5c4c4;
      transition: .5s cubic-bezier(0, 0, 0.16, 1.01);
    }
    .about{
      position: absolute;
      top: 11%;
      right: 0;
      opacity: 0;
      font-size: 3.5rem;
      transform: translateX(-100%);
      text-decoration: none;
      color: grey
    }
    .yo_img:hover .about{
      transition: 1s cubic-bezier(0, 0, 0.16, 1.01);;
      opacity:1;
      transform: translateX(0)
      
    }
</style>
