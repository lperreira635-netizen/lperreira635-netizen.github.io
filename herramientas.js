// Herramientas prácticas: modelos de documentos listos para adaptar.
// Contenido original, con fines educativos. No reemplaza la revisión de un abogado
// para un caso concreto — cada documento real depende de los hechos específicos.

// Casos prácticos: escenarios de aplicación real. Pensados para estudiantes avanzados
// y abogados en ejercicio — no repasan definiciones, ponen a prueba el criterio de
// elegir la vía o figura jurídica correcta ante un caso concreto.
const CASOS_PRACTICOS = [
  {
    caso: "La EPS de un paciente le niega un tratamiento oncológico ordenado por su médico tratante, y cada día de demora agrava su condición.",
    pregunta: "¿Cuál es la vía más adecuada para actuar de inmediato?",
    opciones: ["Derecho de petición ante la EPS", "Acción de tutela", "Demanda ordinaria ante juez civil", "Queja ante la Superintendencia de Salud"],
    correcta: 1,
    explicacion: "La tutela protege derechos fundamentales (salud, vida digna) cuando hay urgencia y el otro medio de defensa no es igual de eficaz. Se resuelve en máximo 10 días hábiles.",
  },
  {
    caso: "Un ciudadano quiere saber por qué un banco privado le negó una tarjeta de crédito y pedir que le expliquen los criterios usados.",
    pregunta: "¿Qué mecanismo debe usar primero?",
    opciones: ["Acción de tutela", "Habeas data", "Derecho de petición", "Acción popular"],
    correcta: 2,
    explicacion: "El derecho de petición también procede ante particulares que prestan un servicio de interés público o frente a los cuales el peticionario está en situación de indefensión, como suele ocurrir con entidades financieras. No hay una amenaza inminente a un derecho fundamental que justifique tutela directa.",
  },
  {
    caso: "Un acreedor deja pasar 12 años sin cobrar ni interrumpir un plazo de una deuda civil que prescribe a los 10 años, y ahora demanda al deudor.",
    pregunta: "¿Qué puede alegar el deudor en su defensa?",
    opciones: ["Caducidad de la acción", "Prescripción extintiva", "Cosa juzgada", "Nulidad del contrato"],
    correcta: 1,
    explicacion: "Al ser un derecho de contenido patrimonial que se extingue por el paso del tiempo sin ejercerlo (y que además admite interrupción, cosa que aquí no ocurrió), la figura aplicable es la prescripción extintiva, no la caducidad.",
  },
  {
    caso: "A alguien lo capturan sin orden judicial ni flagrancia, y su familia no logra que le informen ante qué autoridad está ni por qué.",
    pregunta: "¿Cuál es el mecanismo específico para este caso?",
    opciones: ["Acción de tutela", "Habeas corpus", "Derecho de petición", "Acción de cumplimiento"],
    correcta: 1,
    explicacion: "El habeas corpus protege específicamente la libertad personal frente a una privación ilegal, y debe resolverse en un máximo de 36 horas — más rápido incluso que la tutela.",
  },
  {
    caso: "Una persona descubre que una central de riesgo la reporta como morosa por una deuda que ya pagó hace dos años.",
    pregunta: "¿Qué mecanismo corrige directamente el dato incorrecto?",
    opciones: ["Habeas data", "Derecho de petición", "Acción popular", "Acción de grupo"],
    correcta: 0,
    explicacion: "El habeas data es el derecho a conocer, actualizar y rectificar la información que las entidades tienen sobre uno, especialmente en bases de datos financieras.",
  },
  {
    caso: "Una comunidad entera se ve afectada porque una fábrica contamina el río del que se abastece todo el pueblo.",
    pregunta: "¿Qué acción protege este derecho colectivo hacia el futuro?",
    opciones: ["Acción de tutela", "Acción de grupo", "Acción popular", "Derecho de petición"],
    correcta: 2,
    explicacion: "La acción popular protege derechos e intereses colectivos (como el ambiente sano) y busca evitar o hacer cesar el daño, sin importar cuántas personas afectadas haya.",
  },
  {
    caso: "200 familias compraron el mismo electrodoméstico defectuoso de una marca y todas sufrieron el mismo daño patrimonial.",
    pregunta: "¿Qué acción busca la indemnización de todo el grupo de afectados?",
    opciones: ["Acción popular", "Acción de grupo", "Acción de cumplimiento", "Acción de tutela"],
    correcta: 1,
    explicacion: "La acción de grupo busca la reparación de un daño (a diferencia de la popular, que busca evitarlo) sufrido por un número plural de personas con condiciones uniformes frente a una misma causa.",
  },
  {
    caso: "Un ciudadano exige que el Ministerio de Ambiente aplique una norma vigente que le ordena expedir cierto reglamento, y la entidad simplemente no lo ha hecho.",
    pregunta: "¿Qué acción obliga a la entidad a cumplir una norma ya existente?",
    opciones: ["Acción de tutela", "Acción de cumplimiento", "Acción de nulidad", "Derecho de petición"],
    correcta: 1,
    explicacion: "La acción de cumplimiento sirve exactamente para exigirle a una autoridad que cumpla una norma con fuerza de ley o un acto administrativo que ya existe — no para crear un derecho nuevo.",
  },
  {
    caso: "Dos comerciantes tienen un litigio por el incumplimiento de un contrato de arrendamiento de un local.",
    pregunta: "¿Ante qué jurisdicción se tramita este conflicto?",
    opciones: ["Jurisdicción contencioso-administrativa", "Jurisdicción ordinaria civil", "Jurisdicción ordinaria laboral", "Jurisdicción constitucional"],
    correcta: 1,
    explicacion: "Un conflicto contractual entre particulares (sin que participe el Estado como autoridad) es un asunto civil, y se tramita ante la jurisdicción ordinaria en su especialidad civil.",
  },
  {
    caso: "Un ciudadano demanda al Estado porque un hueco en una vía nacional mal señalizada causó un accidente y le generó perjuicios.",
    pregunta: "¿Ante qué jurisdicción debe presentar la demanda?",
    opciones: ["Jurisdicción ordinaria civil", "Jurisdicción contencioso-administrativa", "Jurisdicción penal", "Jurisdicción disciplinaria"],
    correcta: 1,
    explicacion: "Cuando la controversia involucra la responsabilidad del Estado por la prestación (o falla) de un servicio público, corresponde a la jurisdicción contencioso-administrativa, no a la civil ordinaria.",
  },
  {
    caso: "Una empresa despide a un trabajador sin justa causa y sin pagarle la indemnización correspondiente.",
    pregunta: "¿Ante qué jurisdicción reclama el trabajador?",
    opciones: ["Jurisdicción ordinaria laboral", "Jurisdicción contencioso-administrativa", "Jurisdicción civil", "Jurisdicción constitucional"],
    correcta: 0,
    explicacion: "Los conflictos derivados de una relación laboral entre particulares se resuelven ante la jurisdicción ordinaria, en su especialidad laboral.",
  },
  {
    caso: "En un proceso penal, alguien pregunta quién dirige la investigación y decide si formular acusación.",
    pregunta: "¿A quién le corresponde esa función?",
    opciones: ["Al juez de conocimiento", "A la Fiscalía General de la Nación", "A la Procuraduría", "A la Policía Nacional"],
    correcta: 1,
    explicacion: "En el sistema penal acusatorio colombiano, la Fiscalía investiga y acusa; el juez decide sobre garantías durante la investigación y falla el caso, pero no dirige la investigación.",
  },
  {
    caso: "Un juez municipal falla una tutela en contra del accionante, quien no está de acuerdo con la decisión.",
    pregunta: "¿Cuál es el siguiente paso correcto para el accionante inconforme?",
    opciones: [
      "Presentar otra tutela idéntica ante otro juez",
      "Impugnar ante el superior jerárquico (por ejemplo, el juez de circuito)",
      "Ir directamente a la Corte Constitucional",
      "Esperar a que la Corte la seleccione de oficio",
    ],
    correcta: 1,
    explicacion: "El fallo de tutela se impugna ante el superior jerárquico del juez que lo dictó. La Corte Constitucional solo entra si el caso es seleccionado para revisión eventual — no es una instancia a la que se acuda directamente.",
  },
  {
    caso: "Un ciudadano quiere que se declare inconstitucional una ley completa por violar la Constitución, sin tener un caso particular en curso.",
    pregunta: "¿Qué mecanismo usa?",
    opciones: ["Acción de tutela", "Acción pública de inconstitucionalidad", "Excepción de inconstitucionalidad", "Acción de cumplimiento"],
    correcta: 1,
    explicacion: "La acción pública de inconstitucionalidad la puede presentar cualquier ciudadano directamente ante la Corte Constitucional, sin necesidad de un caso concreto ni de abogado.",
  },
  {
    caso: "Dentro de un proceso concreto, un juez ordinario advierte que aplicar cierta norma al caso violaría la Constitución, pero esa norma en sí no ha sido declarada inconstitucional.",
    pregunta: "¿Qué puede hacer el juez frente a esa norma, solo para ese caso?",
    opciones: ["Acción pública de inconstitucionalidad", "Excepción de inconstitucionalidad", "Acción de tutela contra la norma", "Consulta previa"],
    correcta: 1,
    explicacion: "La excepción de inconstitucionalidad (art. 4 de la Constitución) permite inaplicar una norma en un caso concreto por ser contraria a la Constitución, sin sacarla del ordenamiento para los demás casos — eso solo lo hace la Corte con la acción pública.",
  },
];

const PLANTILLAS = [
  {
    id: "derecho-peticion",
    titulo: "Derecho de petición",
    resumen: "Para pedir información o una respuesta a cualquier entidad pública (y a algunas privadas).",
    guia: "Debe responderse en máximo 15 días hábiles (10 si es solo pedir información, 30 si es una consulta). Puedes presentarlo sin abogado, en físico o por correo electrónico de la entidad.",
    texto: `Señores
[NOMBRE DE LA ENTIDAD]
[Ciudad]

Referencia: Derecho de petición

[NOMBRE COMPLETO DEL PETICIONARIO], identificado con cédula de ciudadanía No. [NÚMERO], con domicilio en [DIRECCIÓN], correo electrónico [CORREO] y teléfono [TELÉFONO], de la manera más respetuosa me dirijo a ustedes con el fin de ejercer mi derecho fundamental de petición, consagrado en el artículo 23 de la Constitución Política, para solicitar lo siguiente:

HECHOS
1. [Describe brevemente la situación que motiva la petición]
2. [Agrega los hechos relevantes que sean necesarios]

PETICIÓN
Con fundamento en lo anterior, solicito respetuosamente:
[Escribe exactamente qué información, documento o actuación estás pidiendo — sé concreto]

FUNDAMENTOS DE DERECHO
Artículo 23 de la Constitución Política de Colombia y Ley 1755 de 2015 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo, Título II).

NOTIFICACIONES
Recibiré notificaciones en [DIRECCIÓN] o al correo electrónico [CORREO].

Atentamente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]`,
  },
  {
    id: "accion-tutela",
    titulo: "Acción de tutela",
    resumen: "Para proteger un derecho fundamental que está siendo vulnerado o amenazado, cuando no hay otro medio de defensa igual de rápido.",
    guia: "Debe resolverse en máximo 10 días hábiles. Se presenta ante cualquier juez (normalmente el más cercano a donde ocurrieron los hechos), sin necesidad de abogado ni de pagar nada.",
    texto: `Señor(a) Juez [Civil / Penal / Laboral, según reparto] Municipal de [Ciudad] (Reparto)

Referencia: Acción de tutela

[NOMBRE COMPLETO], identificado con cédula de ciudadanía No. [NÚMERO], con domicilio en [DIRECCIÓN], correo electrónico [CORREO] y teléfono [TELÉFONO], actuando en nombre propio, presento ante su despacho ACCIÓN DE TUTELA en contra de [NOMBRE DE LA ENTIDAD O PERSONA ACCIONADA], con fundamento en los siguientes:

HECHOS
1. [Describe qué pasó, en orden cronológico y con fechas]
2. [Agrega los hechos que falten]

DERECHOS FUNDAMENTALES VULNERADOS O AMENAZADOS
[Ej: derecho a la salud (art. 49), derecho de petición (art. 23), debido proceso (art. 29), etc.]

PETICIÓN
Solicito respetuosamente al despacho:
PRIMERO: Tutelar mi derecho fundamental a [...]
SEGUNDO: Ordenar a [ENTIDAD ACCIONADA] que [qué acción concreta debe hacer, y en qué plazo]

PRUEBAS
[Enumera los documentos que anexas: respuestas de la entidad, historia clínica, correos, etc.]

JURAMENTO
Manifiesto bajo la gravedad del juramento que no he presentado otra acción de tutela por estos mismos hechos y derechos ante ningún otro despacho judicial.

NOTIFICACIONES
Al accionante: [DIRECCIÓN / CORREO]
Al accionado: [DIRECCIÓN / CORREO DE LA ENTIDAD]

Atentamente,

[FIRMA]
[NOMBRE COMPLETO]
C.C. [NÚMERO]`,
  },
  {
    id: "poder-simple",
    titulo: "Poder especial",
    resumen: "Para autorizar a un abogado (o a otra persona, según el trámite) a representarte en un proceso o gestión específica.",
    guia: "Para la mayoría de trámites judiciales el poder debe ser otorgado a un abogado titulado. Se recomienda autenticar la firma ante notaría cuando la entidad o el trámite lo exija.",
    texto: `PODER ESPECIAL

Yo, [NOMBRE COMPLETO DEL PODERDANTE], mayor de edad, identificado con cédula de ciudadanía No. [NÚMERO] expedida en [CIUDAD], obrando en nombre propio, por medio del presente escrito confiero PODER ESPECIAL, amplio y suficiente, al abogado [NOMBRE COMPLETO DEL APODERADO], identificado con cédula de ciudadanía No. [NÚMERO] y tarjeta profesional No. [NÚMERO] expedida por el Consejo Superior de la Judicatura, para que en mi nombre y representación:

[Describe el alcance exacto: por ejemplo "adelante todas las actuaciones necesarias dentro del proceso de [tipo de proceso] que se tramita/se va a tramitar ante [entidad o juzgado], incluyendo la presentación de la demanda, la recepción de notificaciones, la conciliación y demás actuaciones inherentes al trámite"]

El apoderado queda facultado para [sustituir el poder / recibir el bien o suma que resulte del proceso / transigir / desistir — deja solo lo que realmente autorizas].

Para constancia se firma en [CIUDAD], a los [DÍA] días del mes de [MES] de [AÑO].

______________________________
[FIRMA DEL PODERDANTE]
[NOMBRE COMPLETO]
C.C. [NÚMERO]

Acepto el poder conferido:

______________________________
[FIRMA DEL APODERADO]
[NOMBRE COMPLETO]
T.P. [NÚMERO]`,
  },
];
