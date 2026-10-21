def calcular_media(numeros):
    # Devuelve la media de una lista de números.
    if not numeros:
        return 0
    return sum(numeros) / len(numeros)

datos = [3,4,4,15]
print(calcular_media(datos))