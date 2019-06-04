<template>
    <div class="content_contact">
        <pmmenu></pmmenu>
        <hr class="line1">
        <hr class="line2">
        <div class="content_contact_nav">
            <input type="text" v-model="name" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = '¿Cúal es tu nombre?'" placeholder="¿Cúal es tu nombre?" id="name_client">
            <div>
                <p>¿{{name}} Cómo quieres que te contacte?</p>
            </div>
            <div>
                <form name="option">
                    <input id="socialInput" type="radio" name="opcionesContacto" value="social" v-on:click="showSelect">
                    <label for="socialInput">Redes sociales</label>
                    <input id="correoInput" type="radio" name="opcionesContacto" value="correo" v-on:change="showSelect">
                    <label for="correoInput">Correo</label>
                </form>
            </div>
            <div>
                <transition name="move">
                    <div v-show="red_contacto">
                        <ul>
                            <li v-show="rrss && rrss.urlImage" v-for="rrss in redessociales" :key="rrss.id">
                                <pmicon :icon="rrss"></pmicon>    
                            </li>
                            <br>
                        </ul>
                        <p><i>Escribeme por interno a mis redes sociales.</i></p>
                    </div>
                </transition>
                <transition name="move">
                    <!-- <p>Escribeme<a v-show="correoContacto" href="mailto:anriaco@gmail.com">hola@circuandante.xyz</a></p> -->
                    <input type="email" name="correo" id="correo"
                    @keyup.enter="sendMail" v-show="correoContacto" 
                    v-model="userMail" placeholder="¿Cúal es tu correo electronico?"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = '¿Cúal es tu correo electronico?'">
                </transition>
            </div>
            <!-- <img v-for="rrss in redessociales" :key="rrss.id" :src="rrss.urlImage" v-show="red_contacto"> -->
        </div>
    </div>
</template>
<script>
import redessociales from '../assets/redes_sociales.js'
import pmicon from './iconrrss.vue'
import pmmenu from './menu.vue'

export default {
    // userData( name, mail){
    //         this.name= name
    //         this.mail= mail
        // },
    data(){
        return{
            name: '',
            correoContacto: false,
            red_contacto: false,
            redessociales,
            userMail: '',
        }
    },
    
    components:{
        redessociales,
        pmicon,
        pmmenu
    },
    methods:{
        showSelect(){
            
            if (document.forms.option[0].checked){
                this.red_contacto = true
                this.correoContacto = false
                console.log('ya');
                
            }
            else if(document.forms.option[1].checked){
                this.correoContacto = true
                this.red_contacto = false
            }
        },
        sendMail(){
            // var user1 = new userData (this.name, this.userMail)
            console.log(`El correo de ${this.name} es ${this.userMail}` );
                   }        
    },
    // computed:{
        // sendMailObj(){
        //     return
        //     // return
        //     // var user1 = new userData (name1, mail1)
        //     // alert( `El correo de ${this.name} es ${this.userMail}`)
        //     // alert( user1)
        // }
    // }
}

</script>

<style>
/* @import 'src/css/main.css' */
    #name_client{
        border-color: #0000002e;
        text-align: center;
        font-size: 4em;
        border-radius: 45px;
        padding: 15px;
        margin:18px
    }
    #correo{
        border-color: transparent;
        margin: 20px 0;
        font-size: 2em;
        width: 100%;
        text-align: center;
    }
    .content_contact{
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
    }
    .content_contact_nav{
        text-align: center;
        height: 400px;
    }
   
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }
    li{
        margin: 5px;
    }
    input, label{
        cursor: pointer
    }
    .move-enter-active, .move-leave-active{
        transform: translateY(100%);
        /* transition-delay: .1s; */
        opacity: 0;
}
    .move-enter-to{
            transition: 1s cubic-bezier(0, 0, 0.16, 1.01);

    }
    .move-enter-to, .move-leave-to{
        transform: translateY(0);
        /* transition-delay: .2s; */
        opacity: 1;

}
.line1, .line2{
    position: absolute;
    width: 500px;
    transform-origin: 0;
    top: 75px;
    left: 75px;
}
.line2{
    transform: rotate(90deg);
   }
   @media only screen and (max-width: 767px) {
        .circuandante_img{
           width: 50px;
        }
        #name_client{
            font-size: 1.5em
        }
   }
</style>
