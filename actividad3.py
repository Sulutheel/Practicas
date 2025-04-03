dato = int(input("Introducir temperatura"))
accion = input("Introducir celcius (c) o fahrenheit (f)")

if accion.lower() == "f":
    resultado = dato * (9/5) + 32
    print(f"la temperatura en farenheit es {resultado:,.2f}")
elif accion.lower() == "c":
    resultado = (dato -32) * 5/9
    print(f"la temperatura en celcius es {resultado:,.2f}")
else:
    print("opcion no valida")



"""
Prueba	Input	    Output esperado	  Output actual	        PASS/FAIL
1	    Celsius     31	              Fahrenheit 87.8		pass    
2	    Celsius     12	              Fahrenheit 53.6		pass
3	    Fahrenheit  99	              Celsius 37.22		    pass
"""
