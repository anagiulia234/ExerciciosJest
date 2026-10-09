const sistema = require('./sistema');

describe("Testes do arquivo sistema.js", () => {
test("Deve testar as idades de 15, 18 e 21 anos", () => {
    expect(sistema.verificarMaioridade(15)).toBe(false);
    expect(sistema.verificarMaioridade(18)).toBe(true);
    expect(sistema.verificarMaioridade(21)).toBe(true);
  });
});

describe("calcular o IMC", () => {
    test("Deve testar se peso 70 e altura 1.75 retorna 22.86", () => {
        expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
    });
});

describe("formatarNome", () => {
    test("Deve testar se 'Lucas' e 'Silva' retorna 'Silva, Lucas'", () => {
        expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    }); 
});

describe("ehPar", () => {
    test(" Teste um número par, um ímpar e o número 0", () => {
        expect(sistema.ehPar(4)).toBe(true);
        expect(sistema.ehPar(5)).toBe(false);
        expect(sistema.ehPar(0)).toBe(true);
    });
});

describe("celsiusParaFahrenheit", () => {
    test("Deve testar se 0°C, 100°C e -40°C", () => {
        expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
        expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
        expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
    });
});

describe("adicionarHobby", () => {
    test("Deve testar se o array aumenta de tamanho e se contém o novo ", () => {
        const lista = ['volei', 'leitura'];
        const hobby = 'música';
        expect(sistema.adicionarHobby(lista, hobby)).toEqual(['volei', 'leitura', 'música']);
    }
);
});

 describe('testar a divisão de dois números', () => {
test('Testar uma divisão normal e valide se o erro é lançado ao dividir por zero', () => {
    expect(sistema.dividir(10, 2)).toBe(5);
    expect((() => sistema.dividir(10, 0))).toThrow('Divisão por zero não permitida');
});
 })

    describe("criarAluno", () => {
        test("Deve testar se a estrutura e dados do objeto retornado usando toEqual", () => {
            const aluno = sistema.criarAluno('Alejandro', 'Mecanica');
            expect(aluno).toEqual({ nome: 'Alejandro', curso: 'Mecanica', ativo: true });
        });
    });
    
describe("aplicarDesconto", () => {
    test("Deve testar os descontos de 10% e 0%", () => {
        expect(sistema.aplicarDesconto(100, 10)).toBe(90);
        expect(sistema.aplicarDesconto(200, 25)).toBe(150);
    });
});     

describe("validarTamanhoSenha", () => {
    test("Deve testar senhas com 5 e 8 caracteres", () => {
        expect(sistema.validarTamanhoSenha('senha453')).toBe(true);
        expect(sistema.validarTamanhoSenha('senha')).toBe(false);
    });
});