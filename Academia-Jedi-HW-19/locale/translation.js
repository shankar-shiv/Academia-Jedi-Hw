// Translation document for the collection
// =======================================
// This file contains the texts
// annotated for translation
//
// Instructions:
// 1. Open the PO file with Poedit
// 2. Press "Update" to update from sources

gettext('Bits');
gettext('Comb');
gettext('Varios');
gettext('0');
gettext('Un bit constante a 0');
gettext('1');
gettext('Un bit constante a 1');
gettext('Mux');
gettext('Puertas');
gettext('Tablas');
gettext('Mux-2-1-flip');
gettext('Multiplexor de 2 a 1');
gettext('Mux-2-1');
gettext('Mux-4-1-flip');
gettext('Multiplexor de 4 a 1. Implementado en verilog');
gettext('Mux-4-1');
gettext('and');
gettext('Puerta AND');
gettext('nand');
gettext('Puerta NAND');
gettext('nor');
gettext('Puerta NOR');
gettext('not');
gettext('Puerta NOT');
gettext('or');
gettext('Puerta OR');
gettext('xnor');
gettext('Puerta XNOR');
gettext('xor');
gettext('Puerta XOR');
gettext('tabla-1-1');
gettext('Circuito combinacional de 1 entrada y 1 salida');
gettext('tabla-2-1');
gettext('Circuito combinacional de 2 entradas y 1 salida');
gettext('tabla-2-2');
gettext('Circuito combinacional de 2 entradas y 2 salida');
gettext('tabla-3-1');
gettext('Circuito combinacional de 3 entradas y 1 salida');
gettext('tabla-4-1');
gettext('Circuito combinacional de 4 entradas y 1 salida');
gettext('Bombeo');
gettext('Motor');
gettext('Retardo');
gettext('Servos');
gettext('Fijos');
gettext('Corazon_Hz');
gettext('Corazon genérico para bombear bits a la frecuencia fijada en Hz (por defecto 1Hz)');
gettext('Corazon_Seg');
gettext('Bombear 1 bit con el periodo especificado en el parámetro. Por defecto el periodo es de 1 segundos');
gettext('Corazon_10Hz');
gettext('Bombear 10 bits por segundo');
gettext('Creado a partir de un **corazón  \ngenérico**, dando el valor adecuado  \na su parámetro frecuencia');
gettext('Corazon_1Hz');
gettext('Bombear 1 bit por segundo');
gettext('Corazon_1KHz');
gettext('Bombear 1000 bits por segundo');
gettext('Corazon_2Hz');
gettext('Bombear 2 bits por segundo');
gettext('Corazon_2KHz');
gettext('Bombear 2000 bits por segundo');
gettext('Corazon_3Hz');
gettext('Bombear 3 bits por segundo');
gettext('Corazon_4Hz');
gettext('Bombear 4 bits por segundo');
gettext('Corazon_5Hz');
gettext('Bombear 5 bits por segundo');
gettext('Corazon_7Hz');
gettext('Bombear 7 bits por segundo');
gettext('Corazon_DO4');
gettext('Bombear bits a la frecuencia del DO de la cuarta octava');
gettext('Corazon_MI4');
gettext('Bombear bits a la frecuencia del MI de la cuarta octava');
gettext('Corazon_RE4');
gettext('Bombear bits a la frecuencia del RE de la cuarta octava');
gettext('SM-S4303R');
gettext('MotorBit');
gettext('Controlador para servo de rotacion continua SprintRC SM-S4303R. Con on=1, el motor avanza. Dir=1 sentido agujas reloj/ 0 el contrario. V1 y V2 son los pulsos para las velocidades horaria y antihoraria (en micro-sec). V0 para que esté parado');
gettext('Mux 2:1. Bus de 7 bits. ');
gettext('Mux 2:1. Bus de 4 bits. ');
gettext('Agregador de 4 cables a bus de 4bits');
gettext('Separador de bus de 4bits en 4 cables (1 + 1 + 1 + 1)');
gettext('Multiplexor 2:1 de 1-bit');
gettext('NAND logic gate');
gettext('Transistor');
gettext('Transistor cmos hecho a partir de semiconductores');
gettext('Cristal de Siicio');
gettext('Atomos de silicio');
gettext('Separador de bus de 8bits en 2 (4 + 4)');
gettext('Agregador de 2 buses de 4 a bus de 8bits');
gettext('Controlador PWM para posicionar servos de 20ms. Las unidades de pos son de 10usec');
gettext('**Velocidad 1**: Velocidad para el  \nsentido de giro horario\n');
gettext('**Velocidad 2**: Velocidad para el \nsentido de giro antirhorario');
gettext('**Entrada on/off**: Motor en  \nmovimiento o parado');
gettext('**Motorbit paramétrico** para los **SM-S4303R** o compatibles\n\nTiene 3 parámetros, especificados en micro-segundos. **V1** y **V2** son las posiciones (ancho del pulso)  \npara las velocidades de giro en sentido horario y antihorario respectivamente\n\n**V0** es la posición en la que el servo está parado (velocidad 0)\n\nPor defecto se asignan los valores para las velocidades máximas, tanto en sentido horario como antihorario\n\n* V1max = 1900\n* V2max = 1100\n* V0 = 1500');
gettext('**Velocidad en sentido horario**\n\n* Si V1 >= 1900, la velocidad es máxima\n* Si 1900 > V1 > 1500, la velocidad estará  \nentre la máxima y 0');
gettext('**Velocidad en sentido antihorario**\n\n* Si V2 <= 1100, la velocidad es máxima\n* Si 1100 < V2 < 1500, la velocidad estará  \nentre la máxima y 0');
gettext('**dir**: Sentido de giro  \n1: horario / 0: antihorario');
gettext('**Velocidad 0**: Posición para que  \nel servo esté parado');
gettext('Mux 2:1 with logic gates');
gettext('Entrada 1');
gettext('Entrada 0');
gettext('Selección');
gettext('Implementación en Verilog');
gettext('Las puertas están construidas a\npartir de transistores');
gettext('Pincha en algún transistor para\nbajar de nivel');
gettext('Nivel 3: Semiconductores');
gettext('Los transistores se crean a \npartir de uniones entre \nsemiconductores, de tipo P y N\nEstán integrados en los dados de\nsilicio en los circuitos integrados');
gettext('Pincha en el bloque para bajar de nivel');
gettext('Nivel 2: MATERIALES');
gettext('Cristal de silicio');
gettext('Los semiconductores se crean a partir de cristales\nde Silicio (Si) que se dopans con impurezas\npara darle las propiedades de semiconductores');
gettext('Pincha en los bloques para bajar de nivel');
gettext('Átomos de Silicio');
gettext('Nivel 1: ATOMOS');
gettext('Los cristales de silicio se forman a \npartir del enlace covalente entre los\nátomos de silicio. Cada uno de ellos \nestá rodeado por 4 átomos de silicio\nformando un tetraedro');
gettext('<B>Posicion del servo</B>\n\nSe especifica en unidades de 10micro-segundos\nEj. pos = 100 --> Pulso de achura 1ms');
gettext('<B>Generación de una señal PWM para posicionamiento de Servos</B>\nEl periodo es de 20ms\nEl ancho del pulso varía entre 0 - 255 (0 - 2.5ms)');
gettext('Tortuga-2');
gettext('Divisor entre dos');
gettext('Biestable T síncrono, inicializado a 0');
gettext('Biestable T síncrono, inicializado por parametro INI');
gettext('Biestable tipo D con entrada de enable, inicializado al parámetro INI');
gettext('Biestable D con inicialización paramétrica');
gettext('Generar un pulso de reloj al recibir un flanco por la entrada');
gettext('Biestable D inicializado a 0');
gettext('Delay flip-flop');
gettext('Tortuga: Divisor entre 2\n\nImplementado a partir de un\nbiestable T síncrono');
gettext('Hacer que solo responda a los flancos\nde subida de la señal de entrada');
gettext('Emax-ES08A');
gettext('Futaba-3003');
gettext('TowerPro-SG90');
gettext('ServoBit-90');
gettext('ServoBit para microservos EMAX ES08A. Controlador de 1 bit para mover el servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('ServoBit para microservos EMAX ES08A. Controlador de 1 bit para mover el servo a las 2 posiciones POS0 y POS1');
gettext('**Posición 1**: Posición del servo cuando  \nse introduce un 1\n\nEl valor por defecto es de 135 grados\n');
gettext('**Posición 0**: Posición del servo cuando  \nse introduce un 0\n\nEl valor por defecto es de 45 grados');
gettext('**Entrada**: posición a donde llevar  \nel servo (posición 0 ó 1)');
gettext('**Servobit paramétrico** para los microservos **EMAX-ES08A** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **580 usec**  \n* Extremo izquierdo **2550 usec**\n');
gettext('ServoBit');
gettext('Servobit-90');
gettext('ServoBit para Futaba 3003. Controlador de 1 bit para mover un servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('ServoBit paramétrico para Futaba 3003. Controlador de 1 bit para mover el servo a las 2 posiciones P0 y P1');
gettext('**Servobit** para Servos Futaba 3003 o comaptibles\nLas dos posiciones están distanciadas **90 grados**  \n\n* **Posicion 0**: 45 grados  \n* **Posicion 1**: 135 grados  ');
gettext('**Servobit paramétrico** para los microservos **Futaba 3003** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **380 usec**  \n* Extremo izquierdo **2410 usec**\n');
gettext('Servobit');
gettext('Servobit-90');
gettext('ServoBit para micrservo TowerPro-SG90. Controlador de 1 bit para mover un servo a 2 posiciones. El ángulo entre una posición y otra es de 90 grados');
gettext('**Servobit paramétrico** para los microservos **TowerPro SG-90** o compatibles\n\nLos parámetros **P1** y **P0** son las posiciones asociadas a un valor de la entrada de 1 ó 0  \nEstán expresados en **micro-segundos** (usec). Este tiempo es el ancho del pulso\n\nSus **valores** deben estar comprendidos en este rango: \n\n* Extremo derecho: **500 usec**  \n* Extremo izquierdo **2350 usec**\n');
gettext('Servobit');
gettext('0-Soluciones-Tutorial-18');
gettext('1-Ejemplos');
gettext('2-Ejercicios');
gettext('Sol-18-1');
gettext('**Tocar nota**');
gettext('**Selección de nota**');
gettext('**Solución ejercicio 18.1:** Notas DO-RE-MI-FA\n\nDiseñar un circuito digital que pueda tocar **4 notas** diferentes: Do-re-mi-fa  \nLas notas se seleccionan mediante **2 interruptores externos**. Al apretarse  \nun **pulsador externo** sonará la nota seleccionada\n\nLas **frecuencias** de las notas a tocar son:\n\n* **Do**:  131 Hz\n* **Re**:  147 Hz\n* **Mi**:  165 Hz\n* **Fa**:  175 Hz\n\nConsejo: Utilizar un multiplexor 4:1');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=vpLthAkkWCM');
gettext('[![](http://img.youtube.com/vi/vpLthAkkWCM/0.jpg)](https://www.youtube.com/watch?v=vpLthAkkWCM)\n');
gettext('Sol-18-2');
gettext('Selección del modo:  \n* Angulo pequeño\n* Angulo grande');
gettext('Pulsador de posición para  \nel servo');
gettext('**Ángulo pequeño**');
gettext('**Ángulo grande**');
gettext('**Solución ejercicio 18.2:** Movimiento de un Servo con ángulos pequeño y grande\n\nDiseñar un circuito digital para mover el servo a dos posiciones diferentes,  \ncontroladas por un **pulsador**. Mediante un **interruptor externo** seleccionaremos  \nentre dos modos: **ángulo pequeño** y **ángulo grande**.  En el modo ángulo pequeño,  \nel servo se mueve entre dos posiciones, separadas un ángulo pequeño, menor de 90.  \nEn el modo ángulo grande, el servo se moverá entre sus **dos extremos**\n');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=uMLxEvIMIeM');
gettext('[![](http://img.youtube.com/vi/uMLxEvIMIeM/0.jpg)](https://www.youtube.com/watch?v=uMLxEvIMIeM)\n');
gettext('Sol-18-3');
gettext('Selección de la velocidad:  \n* Lenta\n* Rápida');
gettext('Pulsador para mover/para  \nel motor');
gettext('**Velocidad lenta**');
gettext('**Velocidad rápida**');
gettext('**Solución ejercicio 18.3:** Motor con dos velocidades en cada sentido\n\nDiseñar un circuito digital para mover un servo de **rotación continua** con **dos  \nvelocidades** diferentes en cada entido. Se utilizarán **dos interruptores externos**  \nuno para establecer la **velocidad**: rápida/lenta, y otro para fijar el  \n**sentido de giro**: horario/antohorario. Usaremos un **pulsador externo** para que  \nel motor se mueva al pulsarlo, o esté parado al soltarlo\n');
gettext('**Vídeo en Youtube**:\n\nURL:  https://www.youtube.com/watch?v=M9iuAXRoF8g');
gettext('[![](http://img.youtube.com/vi/M9iuAXRoF8g/0.jpg)](https://www.youtube.com/watch?v=M9iuAXRoF8g)\n');
gettext('Selección sentido giro:  \nhorario/antihorario');
gettext('01-tabla-1-1-NOT');
gettext('**Ejemplo 1**: Circuito combinaciona con una entrada  \ny una salida: Puerta NOT');
gettext('**Tabla de verdad**\n\n| Entrada | Salida |\n|---------|--------|\n| 0       |   1    |\n| 1       |   0    |');
gettext('02-tabla-1-1-cable');
gettext('**Ejemplo 2**: Circuito combinaciona con una entrada  \ny una salida: Puerta identidad (cable)');
gettext('**Tabla de verdad**\n\n| Entrada | Salida |\n|---------|--------|\n| 0       |   0   |\n| 1       |   1    |');
gettext('03-tabla-2-1-comparador-bits');
gettext('**Ejemplo 3**: Circuito combinaciona con dos entradas  \ny una salida: **Comparador de bits**');
gettext('**Tabla de verdad**\n\n|Fila| i1   | i0 | Salida |\n|------|----|----|--------|\n|**0** | 0  | 0  |  1     |\n|**1** | 0  | 1  |  0     |\n|**2** | 1  | 0  |  0     |\n|**3** | 1  | 1  |  1     |');
gettext('04-tabla-2-1-puerta-XOR');
gettext('**Ejemplo 4**: Puerta XOR definida mediante su   \ntabla de verdad');
gettext('**Tabla de verdad**\n\n|Fila| i1   | i0 | Salida |\n|------|----|----|--------|\n|**0** | 0  | 0  |  0     |\n|**1** | 0  | 1  |  1     |\n|**2** | 1  | 0  |  1     |\n|**3** | 1  | 1  |  0     |');
gettext('05-1-mux-2-1-normal');
gettext('**Ejemplo 5-1**: Ejemplo típico de un multiplexor 2:1\n\nLED que parpadea a dos velocidades según la posición  \ndel interruptor');
gettext('05-2-tabla-3-1-mux-2-1');
gettext('**Ejemplo 5-2**: Multiplexor 2:1 implementado mediante tabla de verdad  \n\nLED que parpadea a dos velocidades según la posición  \ndel interruptor');
gettext('**Tabla de verdad**\n\n| Fila | i2  |  i1  | i0  | Salida |\n|------|-----|------|-----|--------|\n|  0   |  0  |   0  |  0  |    0   |\n|  1   |  0  |   0  |  1  |    0   |\n|  2   |  0  |   1  |  0  |    1   |\n|  3   |  0  |   1  |  1  |    0   |\n|  4   |  1  |   0  |  0  |    0   |\n|  5   |  1  |   0  |  1  |    1   |\n|  6   |  1  |   1  |  0  |    1   |\n|  7   |  1  |   1  |  1  |    1   |');
gettext('06-tabla-4-1-comparador');
gettext('**Ejemplo 6**: Comparador de 2 bits  \n\nEl LED se enciende cuando los numeros correspondientes a los bits i3, i2 y  \ni1,i0 son iguales');
gettext('**Tabla de verdad**\n\n| Fila | i3     | i2     | i1     | i0     | Salida |\n|------|--------|--------|--------|--------|--------|\n|  0   |  **0** | **0**  |  **0** |  **0** | **1**  |\n|  1   |  0     | 0      |  0     |  1     |   0    |\n|  2   |  0     | 0      |  1     |  0     |   0    |\n|  3   |  0     | 0      |  1     |  1     |   0    |\n|  4   |  0     | 1      |  0     |  0     |   0    |\n|  5   |  **0** | **1**  | **0**  | **1**  |  **1** |\n|  6   |  0     | 1      |  1     |  0     |   0    |\n|  7   |  0     | 1      |  1     |  1     |   0    |\n|  8   |  1     | 0      |  0     |  0     |   0    |\n|  9   |  1     | 0      |  0     |  1     |   0    |\n| 10   |  **1** | **0**  | **1**  | **0**  |  **1** |\n| 11   |  1     | 0      |  1     |  1     |   0    |\n| 12   |  1     | 1      |  0     |  0     |   0    |\n| 13   |  1     | 1      |  0     |  1     |   0    |\n| 14   |  1     | 1      |  1     |  0     |   0    |\n| 15   |  **1** | **1**  | **1**  | **1**  |  **1** |\n');
gettext('**Número 1**');
gettext('**Número 2**');
gettext('Ejercicio-19-1');
gettext('**Entregar**:\n\n  -1 Pantallazo del circuito (2 Bitpoints)\n  \n  -1 Vídeo del funcionamiento (2 Bitpoints)\n  \n  Enviarlos por redes sociales (Twitter, G+) con mención \n  a @Obijuan_cube. El vídeo puede estar en youtube o directamente en el tuit/post\n  ');
gettext('**GITHUB**:\n\n  1 Bitpoint adicional si lo entregáis por Github (sólo pantallazo, el vídeo\n  no hace falta, para que no ocupe tanto espacio)');
gettext('**Ejercicio 19.1:** (5 Bitpoints) Fraky en modo defensivo\n\nDiseñar un **circuito combinacional**, mediante su **tabla de verdad**, para controlar  \nla posición del cuello de Franky mediante dos **sensores de infrarrojos**:  \nizquierdo y derecho. Cuando ningún sensor esté activado, o sólo lo esté izquierdo,    \nFranky mirará hacia la izquierda. Cuando el sensor derecho está activado, o  \nambos (izquierdo y derecho), Franky mirará hacia la derecha');
gettext('Ejercicio-19-2');
gettext('**Ejercicio 19.2:** (5 Bitpoints) Apertura de caja fuerte\n\nDiseñar un **circuito combinacional**, mediante su **tabla de verdad**, para abrir  \nla puerta de una caja fuerte cuando se introducen los códigos correctos. Se usarán  \n3 interruptores externos para introducir la clave. Cuando esta clave sea **101** ó  \n**011** se moverá un servo a la otra posición, simulando la apertura de la caja');
gettext('Ejercicio-19-3');
gettext('**Solución ejercicio 19.3:** (5 Bitpoints) Detector de paridad de 4 bits\n\nDiseñar un **circuito combinacional** de **4 bits de entrada** y uno de salida  \ncapaz de detectar si el número de 1's en sus entradas es **par**. En ese caso, se  \nencenderá el LED conectado a su salida. Si el número es impar, se apagará  \nEste tipo de circuitos se llaman **detectores de paridad**, y se usan mucho en  \ncomunicaciones para comprobar la integridad de la información recibida. La  \nentrada **0000** tiene **paridad par** (0 es par)');
