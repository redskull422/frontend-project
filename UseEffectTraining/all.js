const baseURL = "https://www.dnd5eapi.co/api/races/"
function RenderApi(){
    const [data , setData]=React.useState({})
    React.useEffect(()=>{
        fetch(baseURL).then(response=>response.json()).then(json => setData(json))
    },[])
    console.log(data)
    return(
        <div></div>
    )
}
   