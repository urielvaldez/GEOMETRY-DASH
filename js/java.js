const titulo_completo= document.querySelector(".center h2");
const informacion= document.querySelector(".datos-generales p");
const list=document.querySelector(".datos-generales ol");
const nivel_isla=document.getElementById("nivel_isla");
let img_g1= document.querySelector(".datos-generales img");
function Dash(){
    img_g1.src="IMAGENES/gd.webp";
    titulo_completo.innerHTML="Geometry Dash";
    informacion.innerHTML="Geometry Dash,es un videojuego creado en 2013 por Robert Topala, El objetivo de este juego es manejar un pequeño  cubo y distintos vehículos por una serie de obstáculos para llegar al final del nivel. El único control es presionar la pantalla, esto hace  que el pequeño cubo  de  un pequeño salto.este , también puede cambiar la forma a naves, ruedas, naves extraterrestre, una flecha, un robot, y una araña; cada uno con  diferentes mecánicas.Mientras que para el 13 de agosto de 2013 fue desarrollado por su empresa independiente(<a https://www.robtopgames.com target=_blank>Rob Top Games</a>)para la jugavilidad en dispositivos moviles,para posteriormente en el 22 de diciembre de 2014 ser lanzado para la plataforma de distribucion digital (<a href=https://es.wikipedia.org/wiki/Steam target=_blank>Steam</a>).Con mas de 5,000,000(cinco millones) de descargas.";   
    nivel_isla.innerHTML="Nivel-Dificultad";
    list.innerHTML="<li>Stereo Madness-Easy</li><li>Back on Track-Easy</li><li>Polargeist-Normal</li><li>Dry Out-Normal</li><li>Base After Base-Hard</li><li>Cant Let Go'-Hard</li><li>Jumper-Harder</li><li>Time Machine-Harder</li><li>Cycles-Harder</li> <li>xStep-Insane</li><li>Clutterfunk-Insane</li><li>Theory of Everything-Insane</li><li>Electroman Adventures-Insane</li><li>Clubstep-Demon;se    desbloquea recolectando 10 monedas secretas.</li><li>Electrodynamix-Insane</li><li>Hexagon Force-Insane</li><li>Blast Processing-Harder</li> <li>Theory of Everything 2-Demon;se desbloquea recolectando 20 monedas secretas.</li><li>Geometrical Dominator-Harder</li><li>Deadlocked-Demon;se desbloquea recolectando 30 monedas secretas. <li>Fingerdash-Insane</li>";   
}
    function Lite  (){
        img_g1.src="IMAGENES/l.webp";
        titulo_completo.innerHTML="Geometry Dash Lite ";
        informacion.innerHTML=" Geometry Dash Lite, es la version gratuita de  Geometry Dash,tambien creada por Rob Top Games,en agosto de 2013 lanzada para dispositivos moviles, el cual solo incluye 13 niveles de la version completa,ademas de no poseer editor de niveles loque impide publicar y crear tus propios niveles.Con mas de 100,000,000(cien millones) de descargas.";  
        nivel_isla.innerHTML="Nivel-Dificultad";
        list.innerHTML="<li>Stereo Madness-Easy</li><li>Back on Track-Easy</li><li>Polargeist-Normal</li><li>Dry Out-Normal</li><li>Base After Base-Hard</li><li>Cant Let Go'-Hard</li><li>Jumper-Harder</li><li>Time Machine-Harder</li><li>Cycles-Harder</li><li>xStep-Insane</li><li>Clutterfunk-Insane</li><li>Theory of Everything-Insane</li><li>Electroman Adventures-Insane</li><li>Clubstep-Demon;se desbloquea recolectando 10 monedas secretas.</li><li>Electrodynamix-Insane</li>";
    }
        function Meltdown (){
            img_g1.src="IMAGENES/m.jpg";
            titulo_completo.innerHTML="Geometry Dash Meltdown";
            informacion.innerHTML="Geometry Dash Meltdown,fue creado el 19 de diciembre de 2015 por Rob Top Games para dispositivos  moviles (¡OS y Android), en la que esta vercion tan solo cuenta con tres niveles con mas de 50,000,000 (cincuenta millones) de descargas.Las canciones que incluyen los diferentes niveles fueron creadas por:F-777,Ocular Nebula y algunas modificadas por Rob Top Games.";
            nivel_isla.innerHTML="Nivel-Dificultad";
            list.innerHTML="<li> The Seven Seas-Easy </li> <li>Viking Arena-Normal </li> <li>Airborne Robots-Hard</li> ";
        }
function Word (){
    img_g1.src="IMAGENES/w.jpg";
    titulo_completo.innerHTML="Geometry Dash Word";
    informacion.innerHTML=" Geometry Dash Word,fue creado el 21 de diciembre  de 2016 para Android y para el dia siguiente   para ¡OS por Rob Top Games con una diferente presentacion, esto a que esta presentada con dos islas(Dashlands y Toxic Factory) las cuales incluyen cinco niveles cada una  con mas de 50,000,000(cincuenta millones) de descargas.Las canciones de los niveles fueron echas por:Dex Arson,Walterflanme,Ocular Nebula y algunas modificadas por Rob Top Games.";
    nivel_isla.innerHTML="Nivel-Isla";
    list.innerHTML="<li>Payload-Dashlands</li><li>Beast Mode-Dashlands</li><li>Machina-Dashlands</li><li>Years-Dashlands</li><li>Frontlines-Dashlands</li><li>Space Pirates-Toxic Factory</li><li>Striker-Toxic Factory</li> <li>Embers-Toxic Factory</li><li>Round 1-Toxic Factory</li><li>Monster Dance Off-Toxic Factory</li>";
    }
    function  Subzero (){
    img_g1.src="IMAGENES/s.webp";
    titulo_completo.innerHTML="Geometry Dash Subzero";
    informacion.innerHTML=" Geometry Dash Subzero, fue creado el 21 de diciembre de 2017 por Rob Top Games para ¡OS y Android,esta version solo cuenta con tres niveles  con mas de 50,000,000(cincuenta millones) de descargas. Los niveles cuentan con musica de MDK,Bossfight,BoomKitty,Ocular Nebula y algunas modificadas por Rob Top Games.";
    nivel_isla.innerHTML="Nivel-Dificultad";
    list.innerHTML="<li>Press Start-Normal</li><li>Nock Em-Hard</li><li>Power Trip-Harder</li>";
    }
