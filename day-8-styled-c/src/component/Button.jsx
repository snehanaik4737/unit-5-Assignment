



import styled from "styled-components"

const Buttons=styled.button`

margin:10px;
padding:10px;
font-size:smaller;

background-color:${(props)=>(props.type==="primary"?"blue":"white")};
color:${(props)=>(props.type==="primary"?"white": props.type==="link"? "blue":"black")};


border:${(props)=>( props.type==="default"? "1px solid gray": props.type==="dashed"? "0.7px dashed":"none")};

`
export {Buttons}





