
import gramatica as g
from  solveExpresions import *


def validate(input):
    g.parse(input)
    from ts import output as outputTs
    from gramatica import output as outputG
    return outputTs + outputG 
    
def execute(input):
    instrucciones = g.parse(input)
    ts_global = TS.TablaDeSimbolos()
    procesar_instrucciones(instrucciones, ts_global)
    from solveExpresions import output
    return (output)

f = open("compiler/entrada.txt", "r")
input = f.read()
print(execute(input))
