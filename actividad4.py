import streamlit as st

st.title("Conversión de temperaturas")
st.write("Instrucciones: Introducir una temperatura y seleccionar Celsius o Fahrenheit")

temperatura = st.text_input("Introducir el número de la temperatura")
accion = st.selectbox("Convertir", ["Celsius", "Fahrenheit"])

if st.button("Convertir"):
    if temperatura:
        try:
            temperatura = float(temperatura)  # Convertimos a float para permitir decimales
            if accion == "Celsius":
                resultado = (temperatura - 32) * 5 / 9
                st.write(f"El resultado es {resultado:,.2f}°C")
            else:  # Si no es Celsius, debe ser Fahrenheit
                resultado = temperatura * (9/5) + 32
                st.write(f"El resultado es {resultado:,.2f}°F")
        except ValueError:
            st.warning("Ingresa un número válido para la temperatura.")
    else:
        st.warning("Ingresa una temperatura válida.")

st.button("Hey")
for i in range(3):
    if st.button(str(i)):
        st.info(f"Has elegido {i}")

  

