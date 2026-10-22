import unittest

from calculadora import calcular_media


class CalcularMediaTests(unittest.TestCase):
    def test_calcula_la_media_de_enteros(self):
        self.assertEqual(calcular_media([3, 4, 4, 15]), 6.5)

    def test_devuelve_cero_para_una_lista_vacia(self):
        self.assertEqual(calcular_media([]), 0)

    def test_calcula_la_media_de_numeros_negativos(self):
        self.assertEqual(calcular_media([-2, 0, 2]), 0)

    def test_calcula_la_media_de_numeros_decimales(self):
        self.assertEqual(calcular_media([1.5, 2.5]), 2.0)


if __name__ == "__main__":
    unittest.main()
