{
  "version": "1.1",
  "package": {
    "name": "mi-tabla1-4",
    "version": "0.1",
    "description": "Circuito combinacional de 1 entradas y 4 salidas",
    "author": "IceFactory 0.1",
    "image": "%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22184.803%22%20height=%22197.944%22%20viewBox=%220%200%20173.25325%20185.57257%22%3E%3Cg%20transform=%22translate(-181.933%20-240.254)%22%20stroke=%22#000%22%20stroke-linecap=%22square%22%20stroke-linejoin=%22round%22%3E%3Crect%20width=%22170.253%22%20height=%22182.573%22%20x=%22183.433%22%20y=%22241.754%22%20ry=%2219.969%22%20fill=%22#3e8db8%22%20stroke-width=%223%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22274.019%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22274.413%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22274.413%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22309.826%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22310.219%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22310.219%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22346.025%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22346.419%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22346.419%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22381.832%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22382.225%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22382.225%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3C/g%3E%3C/svg%3E"
  },
  "design": {
    "board": "icezum",
    "graph": {
      "blocks": [
        {
          "id": "f9c58d8f-75fc-4483-b0d2-d584a555b1c5",
          "type": "basic.output",
          "data": {
            "name": "q",
            "range": "[3:0]",
            "pins": [
              {
                "index": 0,
                "name": "",
                "value": "0"
              },
              {
                "index": 1,
                "name": "",
                "value": "0"
              },
              {
                "index": 2,
                "name": "",
                "value": "0"
              },
              {
                "index": 3,
                "name": "",
                "value": "0"
              }
            ],
            "virtual": true
          },
          "position": {
            "x": 632,
            "y": 424
          }
        },
        {
          "id": "2dd9d62a-ce73-4e2e-82e9-e53ea1281d14",
          "type": "basic.input",
          "data": {
            "name": "",
            "pins": [
              {
                "index": "0",
                "name": "",
                "value": "0"
              }
            ],
            "virtual": true,
            "clock": false
          },
          "position": {
            "x": -8,
            "y": 424
          }
        },
        {
          "id": "c71c44ac-0500-4eb5-9c1c-4ea21cd78377",
          "type": "basic.memory",
          "data": {
            "name": "",
            "list": "0\n0\n0\n0",
            "local": false
          },
          "position": {
            "x": 328,
            "y": 96
          },
          "size": {
            "width": 96,
            "height": 104
          }
        },
        {
          "id": "48c38eba-4e12-44d9-a55b-a93def6a27db",
          "type": "basic.code",
          "data": {
            "code": "\n//-- Bits del bus de entrada\nlocalparam N = 1;\n\n//-- Bits del bus de salida\nlocalparam M = 4;\n\n//-- Calcular tamaño de la tabla\n//-- (filas) segun los bits de entrada\nlocalparam TAM = 2 ** N;\n\n//-- Definición de la tabla\n//-- Tabla de TAM elementos de M bits\nreg [M-1:0] tabla[0:TAM-1];\n\n//-- Read the table\nassign q = tabla[i];\n\n//-- Init table from DATA parameters\ninitial begin\n  if (DATA) $readmemh(DATA, tabla);\nend",
            "params": [
              {
                "name": "DATA"
              }
            ],
            "ports": {
              "in": [
                {
                  "name": "i",
                  "range": "[0:0]",
                  "size": 1
                }
              ],
              "out": [
                {
                  "name": "q",
                  "range": "[3:0]",
                  "size": 4
                }
              ]
            }
          },
          "position": {
            "x": 176,
            "y": 264
          },
          "size": {
            "width": 392,
            "height": 384
          }
        }
      ],
      "wires": [
        {
          "source": {
            "block": "c71c44ac-0500-4eb5-9c1c-4ea21cd78377",
            "port": "memory-out"
          },
          "target": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "DATA"
          }
        },
        {
          "source": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "q"
          },
          "target": {
            "block": "f9c58d8f-75fc-4483-b0d2-d584a555b1c5",
            "port": "in"
          },
          "size": 4
        },
        {
          "source": {
            "block": "2dd9d62a-ce73-4e2e-82e9-e53ea1281d14",
            "port": "out"
          },
          "target": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "i"
          }
        }
      ]
    }
  },
  "dependencies": {}
}