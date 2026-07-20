import "./TechStack.css";

import {
FaReact,
FaNodeJs,
FaJava,
FaGitAlt,
FaBootstrap
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiLaravel
} from "react-icons/si";

function TechStack(){

const tech=[

{icon:<FaReact/>,name:"React"},

{icon:<FaNodeJs/>,name:"Node.js"},

{icon:<SiExpress/>,name:"Express"},

{icon:<SiMongodb/>,name:"MongoDB"},

{icon:<FaJava/>,name:"Java"},

{icon:<SiMysql/>,name:"MySQL"},

{icon:<SiJavascript/>,name:"JavaScript"},

{icon:<SiHtml5/>,name:"HTML5"},

{ icon: <SiCss />, name: "CSS3" },

{icon:<FaBootstrap/>,name:"Bootstrap"},

{icon:<SiPhp/>,name:"PHP"},

{icon:<SiLaravel/>,name:"Laravel"},

{icon:<FaGitAlt/>,name:"Git"}

];

return(

<section className="tech-section">

<div className="marquee">

<div className="track">

{tech.map((item,index)=>(

<div className="tech-card" key={index}>

{item.icon}

<span>{item.name}</span>

</div>

))}

{tech.map((item,index)=>(

<div className="tech-card" key={"copy"+index}>

{item.icon}

<span>{item.name}</span>

</div>

))}

</div>

</div>

</section>

);

}

export default TechStack;