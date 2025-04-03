import streamlit as st

st.title("Hola clase")
st.write("Estoy aqui")

st.markdown("# Titulo 1")
st.markdown("## Titulo 2")
st.markdown("```python print('Hola')```")
st.code("print('¡Hola Mundo!')", language="python")

# Crear entrada de texto
user_input = st.text_input("Ingresa tu nombre:")

# Crear botón para mostrar saludo
if st.button("¡Salúdame!"):
    st.write(f"¡Hola, {user_input}!")