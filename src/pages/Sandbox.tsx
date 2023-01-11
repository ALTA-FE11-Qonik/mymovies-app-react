import { useState, useEffect  } from "react";
import axios from "axios";

import Layout from "components/Layout";
import Button from "components/Button";
import { useFetchGet } from "utils/hooks/useTitle";


const Sandbox = () =>{
    const [trigger, setTrigger] = useState(false);
    const [data] = useFetchGet("https://jsonplaceholder.typicode.com/todos/1");
    // ketika ada perubahan state pada saat useEffect berjalan, maka terjadi sebuah re-render component
    useEffect(()=>{
        fetchData();
    }, []);

    useEffect(()=>{
        // console.log("RUNNING");
    },[trigger]);


    function fetchData(){
        axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then((res)=>{
                // console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    console.log(data);
    
    return(
        <Layout>
            <p>Test</p>
            <Button label="BUTTON" />
        </Layout>
    )
}


export default Sandbox;