import { useEffect } from "react"


const useTitle=(title)=>{
    useEffect(()=>{

        document.title = `${title} - News Dragons`
    },[title])
}


export default useTitle