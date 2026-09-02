// Herramientas prácticas: modelos de documentos listos para adaptar.
// Contenido original, con fines educativos. No reemplaza la revisión de un abogado
// para un caso concreto — cada documento real depende de los hechos específicos.

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
