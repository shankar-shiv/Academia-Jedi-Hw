{
  "version": "1.2",
  "package": {
    "name": "AND-circuit-scramble",
    "version": "0.1",
    "description": "Puerta AND con la apariencia del Circuit Scramble",
    "author": "Juan González-Gómez (Obijuan)",
    "image": "%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22338.603%22%20height=%22161.502%22%20viewBox=%220%200%20317.44059%20151.40838%22%3E%3Cg%20transform=%22translate(206.424%20-601.672)%22%3E%3Cpath%20d=%22M-178.408%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM-147.277%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM-115.675%20617.238l2.595-15.559%208.726-.007%202.457%2015.477zM-84.544%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM-23.225%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM7.905%20617.238l2.595-15.559%208.726-.007%202.458%2015.477zM39.508%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM70.639%20617.238l2.594-15.559%208.726-.007%202.458%2015.477zM-190.858%20732.141l-15.558-2.594-.008-8.726%2015.477-2.458zM-190.858%20701.01l-15.558-2.594-.008-8.726%2015.477-2.458zM-190.858%20669.408l-15.558-2.594-.008-8.726%2015.477-2.458zM-190.858%20638.277l-15.558-2.594-.008-8.726%2015.477-2.458zM95.452%20729.783l15.558-2.594.007-8.726-15.477-2.458zM95.452%20698.652l15.558-2.594.007-8.726-15.477-2.458zM95.452%20667.05l15.558-2.595.007-8.726-15.477-2.458zM95.452%20635.919l15.558-2.595.007-8.726-15.477-2.458zM-115.675%20737.516l2.595%2015.558%208.726.007%202.457-15.477zM-84.544%20737.516l2.594%2015.558%208.726.007%202.458-15.477zM-52.941%20737.516l2.594%2015.558%208.726.007%202.458-15.477zM-21.81%20737.516l2.594%2015.558%208.726.007%202.458-15.477zM10.264%20737.516l2.594%2015.558%208.726.007%202.458-15.477zM72.3%20737.516l2.594%2015.558%208.726.007%202.458-15.477zM-178.044%20737.516l2.594%2015.558%208.726.007%202.458-15.477z%22%20fill=%22#e6e6e6%22/%3E%3Crect%20width=%22282.331%22%20height=%22118.569%22%20x=%22-188.762%22%20y=%22618.424%22%20ry=%222.83%22%20fill=%22#333%22%20stroke=%22#000%22%20stroke-width=%223.736%22%20stroke-linecap=%22square%22%20stroke-linejoin=%22round%22/%3E%3C/g%3E%3Cpath%20d=%22M20.233%2019.103v77.12s8.019%2013.442%2022.64%2017.216c14.623%203.773%2071.46%208.726%20106.129%209.197%2034.668.472%20102.59-.471%20126.174-8.726%2023.584-8.254%2023.82-20.518%2023.82-20.518l-.472-74.29z%22%20fill=%22#4d4d4d%22/%3E%3Cg%20transform=%22translate(206.424%20-601.672)%22%20fill=%22#fff%22%3E%3Crect%20width=%2212.146%22%20height=%2256.366%22%20x=%22-79.945%22%20y=%22649.901%22%20ry=%220%22/%3E%3Crect%20width=%2212.146%22%20height=%2256.366%22%20x=%22-35.607%22%20y=%22649.901%22%20ry=%220%22/%3E%3Cpath%20d=%22M-68.025%20660.782h11.507v11.673h-11.507z%22/%3E%3Cpath%20d=%22M-57.058%20672.102h11.507v11.673h-11.507z%22/%3E%3Cpath%20d=%22M-46.092%20683.186h11.507v11.673h-11.507z%22/%3E%3Crect%20width=%2212.146%22%20height=%2234.323%22%20x=%2227.126%22%20y=%22660.986%22%20ry=%220%22/%3E%3Cpath%20d=%22M-17.577%20650.008v11.203h.062v33.962h-.062v11.203h.062v.058h12.144v-.058h33.784v-11.203H-5.371v-33.962h33.784v-11.203h-45.99zM-142.522%20649.608v12.144h.08v10.024h-.08v12.144h.08v22.348h12.144V683.92h31.956v22.348h12.148V683.92h.036v-12.144h-.036v-10.024h.036v-12.144h-56.364zm12.224%2012.144h31.956v10.024h-31.956v-10.024z%22/%3E%3C/g%3E%3C/svg%3E"
  },
  "design": {
    "board": "icezum",
    "graph": {
      "blocks": [
        {
          "id": "a7903a82-c65a-460d-bcba-8190a02cd40e",
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
            "x": 184,
            "y": 272
          }
        },
        {
          "id": "801a7f13-af23-49df-b960-b7ba96560036",
          "type": "basic.output",
          "data": {
            "name": "",
            "pins": [
              {
                "index": "0",
                "name": "",
                "value": "0"
              }
            ],
            "virtual": true
          },
          "position": {
            "x": 528,
            "y": 288
          }
        },
        {
          "id": "1c308104-1c2c-4d9d-8fda-30db0b198166",
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
            "x": 184,
            "y": 360
          }
        },
        {
          "id": "e3a8a062-b5d3-491f-85f9-53cae9e63096",
          "type": "basic.info",
          "data": {
            "info": "**Solución ejercicio 21.2:** (5 Bitpoints) Bloque AND del Circuit Scramble\n\nCrear una puerta AND, a partir de la AND que hemos usado, que tenga el  \nicono de las puertas AND del Circuit Scramble",
            "readonly": true
          },
          "position": {
            "x": 176,
            "y": 88
          },
          "size": {
            "width": 584,
            "height": 112
          }
        },
        {
          "id": "b5fd13a8-40b7-466b-a695-5401859d7642",
          "type": "basic.info",
          "data": {
            "info": "Este fichero contiene la **implementación del bloque** \n",
            "readonly": true
          },
          "position": {
            "x": 176,
            "y": 200
          },
          "size": {
            "width": 584,
            "height": 48
          }
        },
        {
          "id": "8e0a1831-4453-401c-8bf5-73c60825d1f1",
          "type": "b2090f68ef94fd3c5c0eaea93eb6ba7e80aff0b6",
          "position": {
            "x": 360,
            "y": 288
          },
          "size": {
            "width": 96,
            "height": 64
          }
        }
      ],
      "wires": [
        {
          "source": {
            "block": "a7903a82-c65a-460d-bcba-8190a02cd40e",
            "port": "out"
          },
          "target": {
            "block": "8e0a1831-4453-401c-8bf5-73c60825d1f1",
            "port": "18c2ebc7-5152-439c-9b3f-851c59bac834"
          }
        },
        {
          "source": {
            "block": "1c308104-1c2c-4d9d-8fda-30db0b198166",
            "port": "out"
          },
          "target": {
            "block": "8e0a1831-4453-401c-8bf5-73c60825d1f1",
            "port": "97b51945-d716-4b6c-9db9-970d08541249"
          }
        },
        {
          "source": {
            "block": "8e0a1831-4453-401c-8bf5-73c60825d1f1",
            "port": "664caf9e-5f40-4df4-800a-b626af702e62"
          },
          "target": {
            "block": "801a7f13-af23-49df-b960-b7ba96560036",
            "port": "in"
          }
        }
      ]
    }
  },
  "dependencies": {
    "b2090f68ef94fd3c5c0eaea93eb6ba7e80aff0b6": {
      "package": {
        "name": "AND",
        "version": "1.0.1",
        "description": "Puerta AND",
        "author": "Jesús Arroyo, Juan González",
        "image": "%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22336.09%22%20height=%22194.045%22%20version=%221%22%3E%3Cpath%20d=%22M174.656%20190.045H78.304V4h96.352s87.463%208.625%2087.463%2091.94c0%2083.311-87.463%2094.105-87.463%2094.105z%22%20fill=%22none%22%20stroke=%22#000%22%20stroke-width=%228%22%20stroke-linejoin=%22round%22/%3E%3Cpath%20d=%22M4.057%2045.668h74.018M4.057%20144.812h74.018m184.632-50.034h69.326%22%20fill=%22none%22%20stroke=%22#000%22%20stroke-width=%228%22%20stroke-linecap=%22round%22/%3E%3Ctext%20style=%22line-height:125%25%22%20x=%2292.894%22%20y=%22114.587%22%20font-weight=%22400%22%20font-size=%2258.054%22%20font-family=%22sans-serif%22%20letter-spacing=%220%22%20word-spacing=%220%22%20fill=%22#00f%22%3E%3Ctspan%20x=%2292.894%22%20y=%22114.587%22%20style=%22-inkscape-font-specification:'sans-serif%20Bold'%22%20font-weight=%22700%22%3EAND%3C/tspan%3E%3C/text%3E%3C/svg%3E"
      },
      "design": {
        "graph": {
          "blocks": [
            {
              "id": "18c2ebc7-5152-439c-9b3f-851c59bac834",
              "type": "basic.input",
              "data": {
                "name": ""
              },
              "position": {
                "x": 64,
                "y": 88
              }
            },
            {
              "id": "664caf9e-5f40-4df4-800a-b626af702e62",
              "type": "basic.output",
              "data": {
                "name": ""
              },
              "position": {
                "x": 784,
                "y": 152
              }
            },
            {
              "id": "97b51945-d716-4b6c-9db9-970d08541249",
              "type": "basic.input",
              "data": {
                "name": ""
              },
              "position": {
                "x": 64,
                "y": 224
              }
            },
            {
              "id": "00925b04-5004-4307-a737-fa4e97c8b6ab",
              "type": "basic.code",
              "data": {
                "code": "//-- Puerta AND\n\n//-- module and (input wire a, input wire b,\n//--             output wire c);\n\nassign c = a & b;\n\n//-- endmodule",
                "params": [],
                "ports": {
                  "in": [
                    {
                      "name": "a"
                    },
                    {
                      "name": "b"
                    }
                  ],
                  "out": [
                    {
                      "name": "c"
                    }
                  ]
                }
              },
              "position": {
                "x": 256,
                "y": 48
              },
              "size": {
                "width": 464,
                "height": 272
              }
            }
          ],
          "wires": [
            {
              "source": {
                "block": "18c2ebc7-5152-439c-9b3f-851c59bac834",
                "port": "out"
              },
              "target": {
                "block": "00925b04-5004-4307-a737-fa4e97c8b6ab",
                "port": "a"
              }
            },
            {
              "source": {
                "block": "97b51945-d716-4b6c-9db9-970d08541249",
                "port": "out"
              },
              "target": {
                "block": "00925b04-5004-4307-a737-fa4e97c8b6ab",
                "port": "b"
              }
            },
            {
              "source": {
                "block": "00925b04-5004-4307-a737-fa4e97c8b6ab",
                "port": "c"
              },
              "target": {
                "block": "664caf9e-5f40-4df4-800a-b626af702e62",
                "port": "in"
              }
            }
          ]
        }
      }
    }
  }
}