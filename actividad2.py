def celsius_a_fahrenheit(celsius):
    return celsius * 9/5 + 32

def fahrenheit_a_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

print(" Celsius a Fahrenheit")


opcion = input("Elige una opción (1 o 2): ")

if opcion == "1":
    celsius = float(input("Introduce la temperatura en Celsius: "))
    print(f"{celsius}°C equivale a {celsius_a_fahrenheit(celsius):.2f}°F")
elif opcion == "2":
    fahrenheit = float(input("Introduce la temperatura en Fahrenheit: "))
    print(f"{fahrenheit}°F equivale a {fahrenheit_a_celsius(fahrenheit):.2f}°C")
else:
    print("Opción no válida.")
