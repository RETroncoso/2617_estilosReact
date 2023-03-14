import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import React from 'react'

const MaterialUI = () => {

  const objetoModelo = [
    {
      titulo: "Como rompo",
      contenido: "Usa MUI"
    },
    {
      titulo: "Como no rompo?",
      contenido: "No uses MUI"
    },
    {
      titulo: "Como aburrir a los alumnos?",
      contenido: "Usa un tercer objeto"
    }
  ]

  return (
      <div>
        {
          objetoModelo.map((pregunta) => {
          return  <Accordion>
          <AccordionSummary
            expandIcon={<AccessAlarmIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{pregunta.titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {pregunta.contenido}
            </Typography>
          </AccordionDetails>
        </Accordion>
          })
        }
        
      </div>
    );
}

export default MaterialUI