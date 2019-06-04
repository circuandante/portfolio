import img1 from '../img/behance.png'
import img2 from '../img/instagram.png'
import img3 from '../img/git.png'
import img4 from '../img/linked.png'
import img5 from '../img/twitter.png'

function redes (name, urlImage, url, value, alt){
    this.name = name;
    this.urlImage = urlImage;
    this.url = url;
    this.value = value;
    this.alt = alt;
} 

var behance = new redes('behance', img1, 'https://www.behance.net/anriaco', 'behance', 'behance')
var instagram = new redes('instagram', img2 , 'https://www.instagram.com/circuandante', 'instagram', 'instagram')
var github = new redes('github', img3, 'https://www.github.com/anriaco', 'github', 'github')
var linkedin = new redes('linkedin', img4, 'https://www.linkedin.com/in/anriaco', 'linkedin', 'linkedin')
var twitter = new redes('twitter', img5, 'https://www.twitter.com/circuandante', 'twitter', 'twitter')


var redessociales =[behance, instagram, github, linkedin, twitter]

export default redessociales