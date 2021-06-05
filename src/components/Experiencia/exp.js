import React, {useState} from 'react'
import './exp.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import JS from '../../fotos/JS.png';
import react from '../../fotos/react.png';
import bootstrap from '../../fotos/bootstrap.png';
import css3 from '../../fotos/css3.png';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Exp = () => {
const classes = useStyles();

   
    return (
        <>
        <div className = 'exp-container' id="experiencia">
                <div className = "exp-desc">
                    <h3>Mis habilidades en el desarrollo web</h3>
                    <h4>Continuo aprendizaje de mis habilidades 
                       </h4>
                       <div className="imgs">
      <Grid container spacing={3}>
      
        <Grid item xs={3}>
            <img className="icon1" src = {JS} alt="" width = "50px" height = "50px"></img>
        </Grid>
        <Grid item xs={3}>
        <img className="icon1" src = {react} alt="" width = "50px" height = "50px"></img>

        </Grid>
        <Grid item xs={3}>
        <img className="icon1" src = {bootstrap} alt="" width = "50px" height = "50px"></img>

        </Grid>
        <Grid item xs={3}>
        <img className="icon1" src = {css3} alt="" width = "50px" height = "50px"></img>
        </Grid>
        
      </Grid>
    </div>


                </div>

                


                
                        
            </div>
            </>
           

        
    )
}

export default Exp;
