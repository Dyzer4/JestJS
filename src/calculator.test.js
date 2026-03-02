import { Sum, Divide, Subtract, isEven } from "./calculator";

describe("Estou testando apenas as funções do calculator.js", () => {
    test("Sum: deve somar corretamente", () => {
        expect(Sum(2, 37)).toBe(39)
    })

    test("Divide: deve identificar erro ao dividir", () => {
        expect(() => Divide(8, 0)).toThrow("Não pode ser 0.")
    })

    test("Subtract: Deve subtrair corretamente", () => {
        expect(Subtract(4, 2)).toBe(2)
    })

    test("isEven: o número deve ser par", () => {
        expect(isEven(4)).toBe(true)
    })
})
