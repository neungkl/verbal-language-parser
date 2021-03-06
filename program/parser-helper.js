/*
  Generate by http://hackingoff.com/compilers/ll-1-parser-generator
*/

var exports = module.exports = {
  scanNumber: 35,
  table: [
    [0, "function", "FUNC_NAME", "has", "input", "VARIABLE", "and", "begin", "end", "do", "return", "show", "declare", "equal", "assign", "run", "minus", "plus", "multiple", "by", "divided", "NUMBER", "$"],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36],
    [0, 2, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 3],
    [0, 4, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36],
    [0, 37, 37, 5, 37, 37, 37, 6, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 37, 7, 8, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 36, 37, 37, 37, 37, 37, 9, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36],
    [0, 37, 37, 37, 37, 37, 37, 37, 36, 10, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 12, 11, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 14, 37, 37, 36, 36, 16, 17, 13, 37, 15, 14, 37, 37, 37, 37, 37, 14, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 18, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 20, 20, 37, 37, 37, 19, 37, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 21, 37, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 22, 37, 37, 36, 36, 37, 37, 37, 37, 37, 23, 37, 37, 37, 37, 37, 22, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 25, 25, 37, 37, 37, 37, 37, 37, 24, 24, 24, 37, 24, 37, 37],
    [0, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 26, 37, 37, 37, 37, 37, 37, 37],
    [0, 37, 37, 37, 37, 27, 37, 37, 28, 28, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 27, 37],
    [0, 37, 37, 37, 37, 29, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36, 36, 36, 37, 36, 29, 37],
    [0, 37, 37, 37, 37, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 30, 31, 32, 37, 33, 36, 37],
    [0, 37, 37, 37, 37, 34, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36, 36, 36, 37, 36, 35, 37]
  ],
  pushMap: {
    "1": [2],
    "2": [2, 3],
    "4": [6, 4, -2, -1],
    "5": [5, -5, -4, -3],
    "7": [-5, -6],
    "9": [-8, 7, -7],
    "10": [8],
    "11": [8, 9, -9],
    "13": [10],
    "14": [13],
    "15": [12],
    "16": [13, -10],
    "17": [13, -11],
    "18": [11, -5, -12],
    "19": [19, -13],
    "21": [13, -13, -5, -14],
    "22": [14, 17],
    "23": [15],
    "24": [17, 18],
    "26": [16, -2, -15],
    "27": [16, 19],
    "29": [19],
    "30": [-16],
    "31": [-17],
    "32": [-19, -18],
    "33": [-19, -20],
    "34": [-5],
    "35": [-21]
  },
  rule: {
    "1": "S → CODE_BLOCK",
    "2": "CODE_BLOCK → FUNC CODE_BLOCK",
    "3": "CODE_BLOCK → λ",
    "4": "FUNC → function FUNC_NAME PARAMETER FUNC_BLOCK",
    "5": "PARAMETER → has input VARIABLE PARAMETER'",
    "6": "PARAMETER → λ",
    "7": "PARAMETER' → and VARIABLE",
    "8": "PARAMETER' → λ",
    "9": "FUNC_BLOCK → begin FUNC_STATEMENT end",
    "10": "FUNC_STATEMENT → DO_BLOCK",
    "11": "DO_BLOCK → do STATEMENT DO_BLOCK",
    "12": "DO_BLOCK → λ",
    "13": "STATEMENT → DECLARE",
    "14": "STATEMENT → EXPRESSION",
    "15": "STATEMENT → ASSIGNMENT",
    "16": "STATEMENT → return EXPRESSION",
    "17": "STATEMENT → show EXPRESSION",
    "18": "DECLARE → declare VARIABLE DECLARE_DEFAULT",
    "19": "DECLARE_DEFAULT → equal VALUE",
    "20": "DECLARE_DEFAULT → λ",
    "21": "ASSIGNMENT → assign VARIABLE equal EXPRESSION",
    "22": "EXPRESSION → OPERAND EXPRESSION'",
    "23": "EXPRESSION → RUN_FUNC",
    "24": "EXPRESSION' → OPERATOR OPERAND",
    "25": "EXPRESSION' → λ",
    "26": "RUN_FUNC → run FUNC_NAME PARAMS",
    "27": "PARAMS → VALUE PARAMS",
    "28": "PARAMS → λ",
    "29": "OPERAND → VALUE",
    "30": "OPERATOR → minus",
    "31": "OPERATOR → plus",
    "32": "OPERATOR → multiple by",
    "33": "OPERATOR → divided by",
    "34": "VALUE → VARIABLE",
    "35": "VALUE → NUMBER"
  }
}
