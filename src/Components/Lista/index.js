import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Cards from "../Cards";


const Lista = () =>{
    console.log(lista)
    return <Box>
        {
            lista.cargos.map((cargos, i)=>{
                return <Cards key={i} cargos={cargos}>
                </Cards>
            })
        }
        <Btn>Ver mas</Btn>
    </Box>
}


export default Lista;
