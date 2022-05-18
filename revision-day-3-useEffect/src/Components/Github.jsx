


import React, { useEffect, useState } from 'react'

import axios from 'axios';


export const Github = () => {
    const [loading,setLoading] =useState(true);
    const[error,setError]=useState(false);
    const [data,setData]=useState([])

    const[query,setQuery] = useState("masai");
    const [page,setPage] =useState(1)

    useEffect(()=>{
       getGithubUsers(query,page)
    },[query,page])


const getGithubUsers=(q="albseb511",page=1)=>{
    axios( "https://api.github.com/search/users",{
        method:"GET",
        params:{
            q:q,
            per_page:5,
            page:page,
        }
    }).then(res=>{
        setLoading(true)
     setData(res.data.items);
     setError(false);
    }).catch(err=>{
        setError(true);
        console.log(err);
    })
}

 const handleClick=(query)=>setQuery(query)


 //if you want to set the page you can do as same as above ie
 //const handlePageChange=page=>setPage(page)
 //and you have to give this function to the button for prev and next

 console.log(query)
console.log("data",data)
  return (
    <div>
        
<h2>Github Users</h2>
{loading && <div>...loading</div>}
{error && <div>...error</div>}
<SearchBox handleClick={handleClick}/>
{/* <button onClick={()=>setLoading(!loading)}>Toggle</button> */}

{/* //if while getting data i set the data as res.data inspite of res.data.items then i have to do this optional chaining and spreading  */}

{/* {data?.items?.map(item=>
    <GithubCard key={item.id}{...item}/>
    
    )} */}
   {data.map((item)=>[
       <GithubCard key={item.id} avatar_url={item.avatar_url} login={item.login}/> 
   ])}
    <div>

        <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
        <button  onClick={()=>setPage(page+1)}>Next</button>
    </div>

    </div>
  )
}


const SearchBox=({handleClick})=>{

    const [text,setText] =useState("");
    return(
        <div>
            <input  value={text} onChange={(e)=>setText(e.target.value)} ></input>
            <button onClick={()=>handleClick(text)}>Search</button>
        </div>
    )

}

const GithubCard=({avatar_url,login})=>{
    return(
        <div style={{display:"flex",gap:"2rem"}}>
           <img src={avatar_url} width="50px"alt={login}></img>
            <div>{login}</div>

        </div>
    )

}

