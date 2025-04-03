name = input("¿Cuál es tu nombre? ")
age = 18
altura = 1.76
bollProg = False
mensaje = ""

try:
    age = int(input("¿Cuántos años tienes? "))
    altura = float(input("¿Cuánto mides en metros? "))
except ValueError:
    print("Por favor, ingresa valores numéricos válidos.")
    exit()

programacion = input("¿Te gusta la programación (si/no)? ").strip().lower()
if programacion == "si":
    bollProg = True

mensaje += "Tu nombre es " + name + ". Veo que tienes " + str(age) + " años, y mides " + str(altura * 100) + " cm, y " + ("te gusta" if bollProg else "no te gusta") + " la programación."

print(mensaje)

