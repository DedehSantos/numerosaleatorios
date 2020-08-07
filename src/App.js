
import React  from 'react';
import {View, StyleSheet} from 'react-native';

import Aleatorio from './componentes/Contador'
import Contador from './componentes/Contador';
import { useState } from 'react';
//import Botao from './componentes/Botao'
//import Titulo from './componentes/Titulo'
//import Aleatorio from './componentes/aleatirio'
/* import Comppadrao, { Comp1, Comp2 } from './componentes/Multi'
import Primeiro from './componentes/primeiro' */
//import MinMax from './componentes/MinMax'

export default () =>  (
<View style={style.App}> 
  
   
    
    <Contador inicial={100}/>
    {/*
    <Botao/>
    <Titulo principal="Cadastro Produto"
   segundario="Tela de Cadastro"/>
    <Aleatorio min={1} max={60}/>
   <Aleatorio min={1} max={60}/>
   <Aleatorio min={1} max={60}/>
   <Aleatorio min={1} max={60}/>
   <Aleatorio min={1} max={60}/>
   <Aleatorio min={1} max={60}/>
    <MinMax min={3} max={20}/>
    <MinMax min={1} max={94}/> 
    <Comppadrao/>
    {/* <Comppadrao/>
    padrao/>
    <Comp1/>
    <Comp2/>
   <Primeiro/> */}
</View>

)

const style =  StyleSheet.create({
      App:{
      
        flexGrow:1,
        justifyContent: "center",
        alignItems: "center",
      }

})