import streamlit as st
import pandas as pd

st.write("Nombre de cientificos")
st.write(
    pd.DataFrame(
        {
            "Nombre": ["Isaac Newton",
                       "Albert Einstein",
                       "Maria Curie",
                       "Galileo Galilei"],
            "Descripcion": ["Fue un físico, teólogo, inventor, alquimista y matemático inglés. Es autor de los Philosophiæ naturalis principia mathematica, más conocidos como los Principia, donde describe la ley de la gravitación universal y estableció las bases de la mecánica clásica mediante las leyes que llevan su nombre.",
                            "fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.​​",
                            "más conocida como Marie Curie​​ o Madame Curie, fue una física y química de origen polaco. Pionera en el campo de la radiactividad, es la primera y única persona en recibir dos premios Nobel en distintas especialidades científicas: Física y Química.​",
                            "fue un astrónomo, ingeniero, ​​ matemático​ y físico italiano, relacionado estrechamente con la revolución científica. Eminente hombre del Renacimiento, mostró interés por casi todas las ciencias y artes. "],
        }
    )
)

    