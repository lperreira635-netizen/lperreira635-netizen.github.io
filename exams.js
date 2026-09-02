// Examen por capítulo (varias preguntas reales, generadas a partir del contenido de cada tema).
// Hay que acertar TODAS las preguntas para aprobar; si no, hay que repasar el capítulo e intentar de nuevo.
const EXAMENES = {
  "que-es-el-derecho": [
    {
      "pregunta": "Sobre \"¿Qué es el derecho y para qué sirve?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería.",
        "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable.",
        "Colombia es un Estado Social de Derecho desde 1991.",
        "El derecho regula la convivencia y resuelve conflictos."
      ],
      "correcta": 3,
      "explicacion": "El derecho regula la convivencia y resuelve conflictos."
    },
    {
      "pregunta": "Sobre \"¿Qué es el derecho y para qué sirve?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los consultorios jurídicos universitarios dan asesoría gratuita y supervisada.",
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "Una petición debe pedir algo concreto, no solo describir un problema.",
        "La Constitución está por encima de cualquier otra norma."
      ],
      "correcta": 3,
      "explicacion": "La Constitución está por encima de cualquier otra norma."
    },
    {
      "pregunta": "Sobre \"¿Qué es el derecho y para qué sirve?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable.",
        "Corte Suprema, Consejo de Estado y Corte Constitucional son las máximas autoridades de cada una.",
        "Busca el 'problema jurídico': suele estar planteado como pregunta.",
        "Las leyes las hace el Congreso; los jueces las interpretan."
      ],
      "correcta": 3,
      "explicacion": "Las leyes las hace el Congreso; los jueces las interpretan."
    }
  ],
  "constitucion-politica": [
    {
      "pregunta": "Sobre \"La Constitución Política de Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cuatro debates: dos en Senado, dos en Cámara.",
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "La Constitución está por encima de cualquier otra norma.",
        "Es la norma jerárquicamente superior a todas las demás."
      ],
      "correcta": 3,
      "explicacion": "Es la norma jerárquicamente superior a todas las demás."
    },
    {
      "pregunta": "Sobre \"La Constitución Política de Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Defensoría del Pueblo asigna defensor público gratuito en materia penal.",
        "Antecedentes → consideraciones → parte resolutiva.",
        "No son absolutos: tienen límites frente a otros derechos.",
        "Colombia es un Estado Social de Derecho desde 1991."
      ],
      "correcta": 3,
      "explicacion": "Colombia es un Estado Social de Derecho desde 1991."
    },
    {
      "pregunta": "Sobre \"La Constitución Política de Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "15 días hábiles es el plazo general de respuesta; 10 para consultas, 3 para documentos.",
        "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería.",
        "Se defienden mediante la acción de tutela.",
        "Creó la Corte Constitucional y la acción de tutela."
      ],
      "correcta": 3,
      "explicacion": "Creó la Corte Constitucional y la acción de tutela."
    }
  ],
  "derechos-fundamentales": [
    {
      "pregunta": "Sobre \"Derechos fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Ante pérdida de documentos, denuncia primero y luego solicita el duplicado.",
        "Una petición debe pedir algo concreto, no solo describir un problema.",
        "Tres ramas: Legislativa, Ejecutiva y Judicial.",
        "Protegen la dignidad humana básica."
      ],
      "correcta": 3,
      "explicacion": "Protegen la dignidad humana básica."
    },
    {
      "pregunta": "Sobre \"Derechos fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las leyes estatutarias requieren revisión previa de la Corte Constitucional.",
        "La comisaría de familia puede dictar medida de protección en horas, sin esperar el proceso penal.",
        "Creó la Corte Constitucional y la acción de tutela.",
        "Se defienden mediante la acción de tutela."
      ],
      "correcta": 3,
      "explicacion": "Se defienden mediante la acción de tutela."
    },
    {
      "pregunta": "Sobre \"Derechos fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los derechos de unos terminan donde empiezan los de otros.",
        "Lee todo antes de firmar, especialmente las cláusulas de penalización.",
        "El registro civil de nacimiento es la base de la que dependen los demás documentos.",
        "No son absolutos: tienen límites frente a otros derechos."
      ],
      "correcta": 3,
      "explicacion": "No son absolutos: tienen límites frente a otros derechos."
    }
  ],
  "ramas-del-poder": [
    {
      "pregunta": "Sobre \"Las ramas del poder público\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "Protegen la dignidad humana básica.",
        "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería.",
        "Tres ramas: Legislativa, Ejecutiva y Judicial."
      ],
      "correcta": 3,
      "explicacion": "Tres ramas: Legislativa, Ejecutiva y Judicial."
    },
    {
      "pregunta": "Sobre \"Las ramas del poder público\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los casos suelen tener primera instancia, segunda instancia y, a veces, casación.",
        "La Constitución está por encima de cualquier otra norma.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Se controlan entre sí (pesos y contrapesos)."
      ],
      "correcta": 3,
      "explicacion": "Se controlan entre sí (pesos y contrapesos)."
    },
    {
      "pregunta": "Sobre \"Las ramas del poder público\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "No son absolutos: tienen límites frente a otros derechos.",
        "Incumplir una medida de protección es, en sí mismo, otro delito.",
        "Protegen la dignidad humana básica.",
        "Procuraduría, Contraloría y Defensoría son órganos de control aparte."
      ],
      "correcta": 3,
      "explicacion": "Procuraduría, Contraloría y Defensoría son órganos de control aparte."
    }
  ],
  "como-se-hace-una-ley": [
    {
      "pregunta": "Sobre \"¿Cómo se hace una ley?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los casos suelen tener primera instancia, segunda instancia y, a veces, casación.",
        "Corte Suprema, Consejo de Estado y Corte Constitucional son las máximas autoridades de cada una.",
        "La Constitución está por encima de cualquier otra norma.",
        "Cuatro debates: dos en Senado, dos en Cámara."
      ],
      "correcta": 3,
      "explicacion": "Cuatro debates: dos en Senado, dos en Cámara."
    },
    {
      "pregunta": "Sobre \"¿Cómo se hace una ley?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tres ramas: Legislativa, Ejecutiva y Judicial.",
        "Votar en Colombia es un derecho, no una obligación legal.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "El Presidente sanciona la ley o la objeta."
      ],
      "correcta": 3,
      "explicacion": "El Presidente sanciona la ley o la objeta."
    },
    {
      "pregunta": "Sobre \"¿Cómo se hace una ley?\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Es la norma jerárquicamente superior a todas las demás.",
        "Creó la Corte Constitucional y la acción de tutela.",
        "Incumplir una medida de protección es, en sí mismo, otro delito.",
        "Las leyes estatutarias requieren revisión previa de la Corte Constitucional."
      ],
      "correcta": 3,
      "explicacion": "Las leyes estatutarias requieren revisión previa de la Corte Constitucional."
    }
  ],
  "deberes-ciudadano": [
    {
      "pregunta": "Sobre \"Derechos y deberes del ciudadano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Antecedentes → consideraciones → parte resolutiva.",
        "Incumplir una medida de protección es, en sí mismo, otro delito.",
        "El Presidente sanciona la ley o la objeta.",
        "El artículo 95 de la Constitución lista los deberes del ciudadano."
      ],
      "correcta": 3,
      "explicacion": "El artículo 95 de la Constitución lista los deberes del ciudadano."
    },
    {
      "pregunta": "Sobre \"Derechos y deberes del ciudadano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cuatro debates: dos en Senado, dos en Cámara.",
        "La Constitución está por encima de cualquier otra norma.",
        "Incumplir una medida de protección es, en sí mismo, otro delito.",
        "Votar en Colombia es un derecho, no una obligación legal."
      ],
      "correcta": 3,
      "explicacion": "Votar en Colombia es un derecho, no una obligación legal."
    },
    {
      "pregunta": "Sobre \"Derechos y deberes del ciudadano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Protegen la dignidad humana básica.",
        "Las Casas de Justicia reúnen varios servicios gratuitos en un solo lugar.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Los derechos de unos terminan donde empiezan los de otros."
      ],
      "correcta": 3,
      "explicacion": "Los derechos de unos terminan donde empiezan los de otros."
    }
  ],
  "sistema-judicial": [
    {
      "pregunta": "Sobre \"Cómo funciona el sistema judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El contrato escrito no siempre es obligatorio, pero sí recomendable.",
        "Se controlan entre sí (pesos y contrapesos).",
        "Un contrato válido requiere capacidad, consentimiento libre, objeto y causa lícitos.",
        "Cuatro grandes jurisdicciones: ordinaria, contencioso-administrativa, constitucional y especiales."
      ],
      "correcta": 3,
      "explicacion": "Cuatro grandes jurisdicciones: ordinaria, contencioso-administrativa, constitucional y especiales."
    },
    {
      "pregunta": "Sobre \"Cómo funciona el sistema judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "El contrato escrito no siempre es obligatorio, pero sí recomendable.",
        "Creó la Corte Constitucional y la acción de tutela.",
        "Corte Suprema, Consejo de Estado y Corte Constitucional son las máximas autoridades de cada una."
      ],
      "correcta": 3,
      "explicacion": "Corte Suprema, Consejo de Estado y Corte Constitucional son las máximas autoridades de cada una."
    },
    {
      "pregunta": "Sobre \"Cómo funciona el sistema judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las Casas de Justicia reúnen varios servicios gratuitos en un solo lugar.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Busca el 'problema jurídico': suele estar planteado como pregunta.",
        "Los casos suelen tener primera instancia, segunda instancia y, a veces, casación."
      ],
      "correcta": 3,
      "explicacion": "Los casos suelen tener primera instancia, segunda instancia y, a veces, casación."
    }
  ],
  "contratos-basico": [
    {
      "pregunta": "Sobre \"Contratos: lo básico que debes saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cuatro grandes jurisdicciones: ordinaria, contencioso-administrativa, constitucional y especiales.",
        "El registro civil de nacimiento es la base de la que dependen los demás documentos.",
        "El Presidente sanciona la ley o la objeta.",
        "Un contrato válido requiere capacidad, consentimiento libre, objeto y causa lícitos."
      ],
      "correcta": 3,
      "explicacion": "Un contrato válido requiere capacidad, consentimiento libre, objeto y causa lícitos."
    },
    {
      "pregunta": "Sobre \"Contratos: lo básico que debes saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "Creó la Corte Constitucional y la acción de tutela.",
        "Antecedentes → consideraciones → parte resolutiva.",
        "El contrato escrito no siempre es obligatorio, pero sí recomendable."
      ],
      "correcta": 3,
      "explicacion": "El contrato escrito no siempre es obligatorio, pero sí recomendable."
    },
    {
      "pregunta": "Sobre \"Contratos: lo básico que debes saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Procuraduría, Contraloría y Defensoría son órganos de control aparte.",
        "Lee todo antes de firmar, especialmente las cláusulas de penalización."
      ],
      "correcta": 3,
      "explicacion": "Lee todo antes de firmar, especialmente las cláusulas de penalización."
    }
  ],
  "leer-una-sentencia": [
    {
      "pregunta": "Sobre \"Cómo leer una sentencia judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "El Presidente sanciona la ley o la objeta.",
        "Lee todo antes de firmar, especialmente las cláusulas de penalización.",
        "Antecedentes → consideraciones → parte resolutiva."
      ],
      "correcta": 3,
      "explicacion": "Antecedentes → consideraciones → parte resolutiva."
    },
    {
      "pregunta": "Sobre \"Cómo leer una sentencia judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable.",
        "Cuatro debates: dos en Senado, dos en Cámara.",
        "Busca el 'problema jurídico': suele estar planteado como pregunta."
      ],
      "correcta": 3,
      "explicacion": "Busca el 'problema jurídico': suele estar planteado como pregunta."
    },
    {
      "pregunta": "Sobre \"Cómo leer una sentencia judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "15 días hábiles es el plazo general de respuesta; 10 para consultas, 3 para documentos.",
        "Cuatro grandes jurisdicciones: ordinaria, contencioso-administrativa, constitucional y especiales.",
        "T- es tutela, C- es constitucionalidad, SU- es unificación."
      ],
      "correcta": 3,
      "explicacion": "T- es tutela, C- es constitucionalidad, SU- es unificación."
    }
  ],
  "ayuda-legal-gratuita": [
    {
      "pregunta": "Sobre \"Dónde buscar ayuda legal gratuita\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Es la norma jerárquicamente superior a todas las demás.",
        "Antecedentes → consideraciones → parte resolutiva.",
        "Una petición debe pedir algo concreto, no solo describir un problema.",
        "Los consultorios jurídicos universitarios dan asesoría gratuita y supervisada."
      ],
      "correcta": 3,
      "explicacion": "Los consultorios jurídicos universitarios dan asesoría gratuita y supervisada."
    },
    {
      "pregunta": "Sobre \"Dónde buscar ayuda legal gratuita\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia es un Estado Social de Derecho desde 1991.",
        "Las leyes estatutarias requieren revisión previa de la Corte Constitucional.",
        "Ante pérdida de documentos, denuncia primero y luego solicita el duplicado.",
        "Las Casas de Justicia reúnen varios servicios gratuitos en un solo lugar."
      ],
      "correcta": 3,
      "explicacion": "Las Casas de Justicia reúnen varios servicios gratuitos en un solo lugar."
    },
    {
      "pregunta": "Sobre \"Dónde buscar ayuda legal gratuita\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "La comisaría de familia puede dictar medida de protección en horas, sin esperar el proceso penal.",
        "La falta de respuesta habilita tutela directamente, por ser un derecho fundamental.",
        "La Defensoría del Pueblo asigna defensor público gratuito en materia penal."
      ],
      "correcta": 3,
      "explicacion": "La Defensoría del Pueblo asigna defensor público gratuito en materia penal."
    }
  ],
  "documentos-identidad-registro-civil": [
    {
      "pregunta": "Sobre \"Documentos de identidad y registro civil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "T- es tutela, C- es constitucionalidad, SU- es unificación.",
        "Busca el 'problema jurídico': suele estar planteado como pregunta.",
        "La Constitución está por encima de cualquier otra norma.",
        "El registro civil de nacimiento es la base de la que dependen los demás documentos."
      ],
      "correcta": 3,
      "explicacion": "El registro civil de nacimiento es la base de la que dependen los demás documentos."
    },
    {
      "pregunta": "Sobre \"Documentos de identidad y registro civil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los derechos de unos terminan donde empiezan los de otros.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Los casos suelen tener primera instancia, segunda instancia y, a veces, casación.",
        "La Registraduría Nacional expide registro civil, tarjeta de identidad y cédula."
      ],
      "correcta": 3,
      "explicacion": "La Registraduría Nacional expide registro civil, tarjeta de identidad y cédula."
    },
    {
      "pregunta": "Sobre \"Documentos de identidad y registro civil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Se controlan entre sí (pesos y contrapesos).",
        "Los derechos de unos terminan donde empiezan los de otros.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Ante pérdida de documentos, denuncia primero y luego solicita el duplicado."
      ],
      "correcta": 3,
      "explicacion": "Ante pérdida de documentos, denuncia primero y luego solicita el duplicado."
    }
  ],
  "como-denunciar-o-quejarse": [
    {
      "pregunta": "Sobre \"Cómo hacer una denuncia o una queja\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "Cuatro grandes jurisdicciones: ordinaria, contencioso-administrativa, constitucional y especiales.",
        "La Constitución está por encima de cualquier otra norma.",
        "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable."
      ],
      "correcta": 3,
      "explicacion": "Denuncia = delito, ante la Fiscalía. Queja/PQRS = mal servicio, ante la entidad responsable."
    },
    {
      "pregunta": "Sobre \"Cómo hacer una denuncia o una queja\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tres ramas: Legislativa, Ejecutiva y Judicial.",
        "La Defensoría del Pueblo asigna defensor público gratuito en materia penal.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "No se necesita abogado para denunciar un delito."
      ],
      "correcta": 3,
      "explicacion": "No se necesita abogado para denunciar un delito."
    },
    {
      "pregunta": "Sobre \"Cómo hacer una denuncia o una queja\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Corte Suprema, Consejo de Estado y Corte Constitucional son las máximas autoridades de cada una.",
        "Tres ramas: Legislativa, Ejecutiva y Judicial.",
        "Incumplir una medida de protección es, en sí mismo, otro delito.",
        "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería."
      ],
      "correcta": 3,
      "explicacion": "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería."
    }
  ],
  "derecho-peticion-paso-a-paso": [
    {
      "pregunta": "Sobre \"El derecho de petición, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención.",
        "Los consultorios jurídicos universitarios dan asesoría gratuita y supervisada.",
        "Ante pérdida de documentos, denuncia primero y luego solicita el duplicado.",
        "Una petición debe pedir algo concreto, no solo describir un problema."
      ],
      "correcta": 3,
      "explicacion": "Una petición debe pedir algo concreto, no solo describir un problema."
    },
    {
      "pregunta": "Sobre \"El derecho de petición, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tres ramas: Legislativa, Ejecutiva y Judicial.",
        "Se controlan entre sí (pesos y contrapesos).",
        "Los derechos de unos terminan donde empiezan los de otros.",
        "15 días hábiles es el plazo general de respuesta; 10 para consultas, 3 para documentos."
      ],
      "correcta": 3,
      "explicacion": "15 días hábiles es el plazo general de respuesta; 10 para consultas, 3 para documentos."
    },
    {
      "pregunta": "Sobre \"El derecho de petición, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Creó la Corte Constitucional y la acción de tutela.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "La Defensoría del Pueblo asigna defensor público gratuito en materia penal.",
        "La falta de respuesta habilita tutela directamente, por ser un derecho fundamental."
      ],
      "correcta": 3,
      "explicacion": "La falta de respuesta habilita tutela directamente, por ser un derecho fundamental."
    }
  ],
  "violencia-intrafamiliar-que-hacer": [
    {
      "pregunta": "Sobre \"Violencia intrafamiliar: qué hacer y a dónde acudir\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Corrupción de servidores públicos se denuncia ante Procuraduría o Personería.",
        "La comisaría de familia puede dictar medida de protección en horas, sin esperar el proceso penal."
      ],
      "correcta": 3,
      "explicacion": "La comisaría de familia puede dictar medida de protección en horas, sin esperar el proceso penal."
    },
    {
      "pregunta": "Sobre \"Violencia intrafamiliar: qué hacer y a dónde acudir\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los derechos de unos terminan donde empiezan los de otros.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "T- es tutela, C- es constitucionalidad, SU- es unificación.",
        "Incumplir una medida de protección es, en sí mismo, otro delito."
      ],
      "correcta": 3,
      "explicacion": "Incumplir una medida de protección es, en sí mismo, otro delito."
    },
    {
      "pregunta": "Sobre \"Violencia intrafamiliar: qué hacer y a dónde acudir\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución está por encima de cualquier otra norma.",
        "No se necesita abogado para denunciar un delito.",
        "Es la norma jerárquicamente superior a todas las demás.",
        "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención."
      ],
      "correcta": 3,
      "explicacion": "Las líneas 155 y 123 funcionan 24/7 para activar la ruta de atención."
    }
  ],
  "obligaciones-contratos": [
    {
      "pregunta": "Sobre \"Derecho Civil: obligaciones y contratos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Todo lo relacionado con hijos se decide bajo el interés superior del menor.",
        "Matrimonio y unión marital de hecho generan efectos patrimoniales similares.",
        "La apelación la resuelve el juez o tribunal superior.",
        "Una obligación puede nacer de contrato, ley, delito o cuasicontrato."
      ],
      "correcta": 3,
      "explicacion": "Una obligación puede nacer de contrato, ley, delito o cuasicontrato."
    },
    {
      "pregunta": "Sobre \"Derecho Civil: obligaciones y contratos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "El Registro Mercantil es obligatorio para quien ejerce el comercio.",
        "Matrimonio y unión marital de hecho generan efectos patrimoniales similares.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización."
      ],
      "correcta": 3,
      "explicacion": "El incumplimiento habilita exigir cumplimiento, resolución e indemnización."
    },
    {
      "pregunta": "Sobre \"Derecho Civil: obligaciones y contratos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa.",
        "La Ley 675 de 2001 regula la propiedad horizontal en Colombia.",
        "El SG-SST y la afiliación a una ARL son obligatorios para todo empleador, sin importar su tamaño.",
        "La autonomía de la voluntad permite crear contratos no regulados expresamente."
      ],
      "correcta": 3,
      "explicacion": "La autonomía de la voluntad permite crear contratos no regulados expresamente."
    }
  ],
  "derecho-laboral": [
    {
      "pregunta": "Sobre \"Derecho Laboral: contrato, prestaciones y despido\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo.",
        "El poder a un abogado es, jurídicamente, un contrato de mandato.",
        "La propiedad cumple una función social y ecológica: no es un derecho absoluto.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre."
      ],
      "correcta": 3,
      "explicacion": "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre."
    },
    {
      "pregunta": "Sobre \"Derecho Laboral: contrato, prestaciones y despido\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El trabajo doméstico tiene protección reforzada, incluida la afiliación por trabajo por días.",
        "Un inmueble solo cambia de dueño frente a terceros cuando la escritura queda registrada.",
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "Prima, cesantías, vacaciones y seguridad social son derechos mínimos irrenunciables."
      ],
      "correcta": 3,
      "explicacion": "Prima, cesantías, vacaciones y seguridad social son derechos mínimos irrenunciables."
    },
    {
      "pregunta": "Sobre \"Derecho Laboral: contrato, prestaciones y despido\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los títulos valores (cheque, pagaré, letra) tienen reglas propias de cobro.",
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo.",
        "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial."
      ],
      "correcta": 3,
      "explicacion": "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial."
    }
  ],
  "derecho-familia": [
    {
      "pregunta": "Sobre \"Derecho de Familia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas.",
        "La licitación pública es la regla general; existen modalidades distintas para casos específicos.",
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "Matrimonio y unión marital de hecho generan efectos patrimoniales similares."
      ],
      "correcta": 3,
      "explicacion": "Matrimonio y unión marital de hecho generan efectos patrimoniales similares."
    },
    {
      "pregunta": "Sobre \"Derecho de Familia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación.",
        "El divorcio/cesación de mutuo acuerdo sin hijos menores puede hacerse ante notario."
      ],
      "correcta": 3,
      "explicacion": "El divorcio/cesación de mutuo acuerdo sin hijos menores puede hacerse ante notario."
    },
    {
      "pregunta": "Sobre \"Derecho de Familia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Todo lo relacionado con hijos se decide bajo el interés superior del menor."
      ],
      "correcta": 3,
      "explicacion": "Todo lo relacionado con hijos se decide bajo el interés superior del menor."
    }
  ],
  "derecho-penal": [
    {
      "pregunta": "Sobre \"Derecho Penal: delitos y proceso básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Puedes conocer, actualizar, rectificar, suprimir y revocar el uso de tus datos.",
        "El interés superior del menor y la protección integral son los ejes del Código de Infancia.",
        "Delito = conducta típica, antijurídica y culpable."
      ],
      "correcta": 3,
      "explicacion": "Delito = conducta típica, antijurídica y culpable."
    },
    {
      "pregunta": "Sobre \"Derecho Penal: delitos y proceso básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas.",
        "Puedes conocer, actualizar, rectificar, suprimir y revocar el uso de tus datos.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide."
      ],
      "correcta": 3,
      "explicacion": "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide."
    },
    {
      "pregunta": "Sobre \"Derecho Penal: delitos y proceso básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El poder a un abogado es, jurídicamente, un contrato de mandato.",
        "La presunción de inocencia rige todo el proceso."
      ],
      "correcta": 3,
      "explicacion": "La presunción de inocencia rige todo el proceso."
    }
  ],
  "derecho-comercial": [
    {
      "pregunta": "Sobre \"Derecho Comercial: sociedades y comerciantes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Procede contra el Estado y, en casos específicos, contra particulares.",
        "El contrato de aprendizaje no es un contrato de trabajo: hay apoyo de sostenimiento, no salario.",
        "El Registro Mercantil es obligatorio para quien ejerce el comercio."
      ],
      "correcta": 3,
      "explicacion": "El Registro Mercantil es obligatorio para quien ejerce el comercio."
    },
    {
      "pregunta": "Sobre \"Derecho Comercial: sociedades y comerciantes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La propiedad cumple una función social y ecológica: no es un derecho absoluto.",
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide.",
        "La SAS es la forma societaria más usada hoy en Colombia."
      ],
      "correcta": 3,
      "explicacion": "La SAS es la forma societaria más usada hoy en Colombia."
    },
    {
      "pregunta": "Sobre \"Derecho Comercial: sociedades y comerciantes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los proyectos con impacto significativo requieren licencia ambiental previa.",
        "Delito = conducta típica, antijurídica y culpable.",
        "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas.",
        "Los títulos valores (cheque, pagaré, letra) tienen reglas propias de cobro."
      ],
      "correcta": 3,
      "explicacion": "Los títulos valores (cheque, pagaré, letra) tienen reglas propias de cobro."
    }
  ],
  "accion-tutela-profundidad": [
    {
      "pregunta": "Sobre \"La acción de tutela en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La portabilidad numérica permite cambiar de operador conservando el mismo número.",
        "El renting suele incluir servicios adicionales y no contempla opción de compra.",
        "Debe resolverse en máximo 10 días hábiles."
      ],
      "correcta": 3,
      "explicacion": "Debe resolverse en máximo 10 días hábiles."
    },
    {
      "pregunta": "Sobre \"La acción de tutela en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El menor con suficiente madurez debe ser escuchado, aunque su opinión no es automáticamente vinculante.",
        "Sin testamento, la ley define el orden de herederos (sucesión intestada).",
        "La portabilidad numérica permite cambiar de operador conservando el mismo número.",
        "Procede contra el Estado y, en casos específicos, contra particulares."
      ],
      "correcta": 3,
      "explicacion": "Procede contra el Estado y, en casos específicos, contra particulares."
    },
    {
      "pregunta": "Sobre \"La acción de tutela en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La adopción es una medida de protección del menor, no un derecho del adulto a adoptar.",
        "La aseguradora tiene un mes para objetar o pagar tras recibir los documentos completos del siniestro.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional."
      ],
      "correcta": 3,
      "explicacion": "Todos los fallos van a eventual revisión de la Corte Constitucional."
    }
  ],
  "derecho-administrativo": [
    {
      "pregunta": "Sobre \"Derecho Administrativo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo.",
        "La portabilidad numérica permite cambiar de operador conservando el mismo número.",
        "El daño ambiental puede generar sanción administrativa, acción popular y responsabilidad penal.",
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles."
      ],
      "correcta": 3,
      "explicacion": "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles."
    },
    {
      "pregunta": "Sobre \"Derecho Administrativo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez."
      ],
      "correcta": 3,
      "explicacion": "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez."
    },
    {
      "pregunta": "Sobre \"Derecho Administrativo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La SAS es la forma societaria más usada hoy en Colombia.",
        "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría.",
        "La jurisdicción contencioso-administrativa resuelve los conflictos con el Estado."
      ],
      "correcta": 3,
      "explicacion": "La jurisdicción contencioso-administrativa resuelve los conflictos con el Estado."
    }
  ],
  "proceso-judicial-paso-a-paso": [
    {
      "pregunta": "Sobre \"El proceso judicial, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La autonomía de la voluntad permite crear contratos no regulados expresamente.",
        "El trabajo doméstico tiene protección reforzada, incluida la afiliación por trabajo por días.",
        "En el leasing, el cliente puede comprar el bien al final por un valor residual pactado.",
        "Demanda → contestación → pruebas → alegatos → sentencia."
      ],
      "correcta": 3,
      "explicacion": "Demanda → contestación → pruebas → alegatos → sentencia."
    },
    {
      "pregunta": "Sobre \"El proceso judicial, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El tratamiento fiscal del leasing depende de si se clasifica como operativo o financiero.",
        "El defensor del consumidor financiero es el primer paso obligatorio antes de ir a la Superintendencia.",
        "La apelación la resuelve el juez o tribunal superior."
      ],
      "correcta": 3,
      "explicacion": "La apelación la resuelve el juez o tribunal superior."
    },
    {
      "pregunta": "Sobre \"El proceso judicial, paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario.",
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "La Agencia Nacional de Tierras administra hoy la política de tierras rurales.",
        "La casación revisa errores de derecho, no vuelve a juzgar los hechos."
      ],
      "correcta": 3,
      "explicacion": "La casación revisa errores de derecho, no vuelve a juzgar los hechos."
    }
  ],
  "derecho-tributario": [
    {
      "pregunta": "Sobre \"Derecho Tributario: lo que todo ciudadano debe saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La apelación la resuelve el juez o tribunal superior.",
        "El PPT regularizó masivamente a migrantes venezolanos sin necesidad de una visa tradicional.",
        "El poder general requiere escritura pública; el especial puede ser documento privado autenticado.",
        "No hay impuesto sin ley previa que lo establezca (principio de legalidad)."
      ],
      "correcta": 3,
      "explicacion": "No hay impuesto sin ley previa que lo establezca (principio de legalidad)."
    },
    {
      "pregunta": "Sobre \"Derecho Tributario: lo que todo ciudadano debe saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La garantía legal existe así el vendedor no ofrezca ninguna garantía comercial.",
        "El COPASST da a los trabajadores un rol activo de vigilancia en la prevención de riesgos.",
        "Declarar renta depende de topes de ingresos/patrimonio, no de tener empleo formal."
      ],
      "correcta": 3,
      "explicacion": "Declarar renta depende de topes de ingresos/patrimonio, no de tener empleo formal."
    },
    {
      "pregunta": "Sobre \"Derecho Tributario: lo que todo ciudadano debe saber\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La empresa transportadora responde también por los vehículos afiliados bajo su habilitación.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Un régimen de visitas específico y detallado previene más conflictos que uno ambiguo.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme."
      ],
      "correcta": 3,
      "explicacion": "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme."
    }
  ],
  "contratos-especiales": [
    {
      "pregunta": "Sobre \"Contratos especiales: arrendamiento, mandato y seguro\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD).",
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes.",
        "Las cláusulas exorbitantes dan al Estado poderes que no existen entre particulares.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador."
      ],
      "correcta": 3,
      "explicacion": "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador."
    },
    {
      "pregunta": "Sobre \"Contratos especiales: arrendamiento, mandato y seguro\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave.",
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo.",
        "La portabilidad numérica permite cambiar de operador conservando el mismo número.",
        "El poder a un abogado es, jurídicamente, un contrato de mandato."
      ],
      "correcta": 3,
      "explicacion": "El poder a un abogado es, jurídicamente, un contrato de mandato."
    },
    {
      "pregunta": "Sobre \"Contratos especiales: arrendamiento, mandato y seguro\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría.",
        "La CRC regula el mercado, el Ministerio TIC define política, y la ANE administra el espectro.",
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza."
      ],
      "correcta": 3,
      "explicacion": "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza."
    }
  ],
  "derechos-reales-propiedad": [
    {
      "pregunta": "Sobre \"Derechos reales y propiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin testamento, la ley define el orden de herederos (sucesión intestada).",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Delito = conducta típica, antijurídica y culpable.",
        "La propiedad cumple una función social y ecológica: no es un derecho absoluto."
      ],
      "correcta": 3,
      "explicacion": "La propiedad cumple una función social y ecológica: no es un derecho absoluto."
    },
    {
      "pregunta": "Sobre \"Derechos reales y propiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo.",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Poseer no es lo mismo que ser propietario; la posesión puede derivar en dominio."
      ],
      "correcta": 3,
      "explicacion": "Poseer no es lo mismo que ser propietario; la posesión puede derivar en dominio."
    },
    {
      "pregunta": "Sobre \"Derechos reales y propiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El transporte de carga suele protegerse con un seguro específico de mercancías.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "Un inmueble solo cambia de dueño frente a terceros cuando la escritura queda registrada."
      ],
      "correcta": 3,
      "explicacion": "Un inmueble solo cambia de dueño frente a terceros cuando la escritura queda registrada."
    }
  ],
  "sucesiones-herencias": [
    {
      "pregunta": "Sobre \"Sucesiones: herencias y testamentos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Marcas y patentes sí requieren registro previo ante la Superintendencia de Industria y Comercio.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Autenticar una firma no certifica el contenido del documento, solo la identidad de quien firmó.",
        "Sin testamento, la ley define el orden de herederos (sucesión intestada)."
      ],
      "correcta": 3,
      "explicacion": "Sin testamento, la ley define el orden de herederos (sucesión intestada)."
    },
    {
      "pregunta": "Sobre \"Sucesiones: herencias y testamentos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La empresa transportadora responde también por los vehículos afiliados bajo su habilitación.",
        "Delito = conducta típica, antijurídica y culpable.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Incluso con testamento, hay una porción protegida para ciertos herederos."
      ],
      "correcta": 3,
      "explicacion": "Incluso con testamento, hay una porción protegida para ciertos herederos."
    },
    {
      "pregunta": "Sobre \"Sucesiones: herencias y testamentos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El teletrabajo da los mismos derechos que el trabajo presencial, más obligaciones del empleador.",
        "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario.",
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador.",
        "La sucesión puede hacerse ante notario si hay acuerdo, o ante juez si hay conflicto."
      ],
      "correcta": 3,
      "explicacion": "La sucesión puede hacerse ante notario si hay acuerdo, o ante juez si hay conflicto."
    }
  ],
  "proteccion-consumidor": [
    {
      "pregunta": "Sobre \"Protección al consumidor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La aseguradora tiene un mes para objetar o pagar tras recibir los documentos completos del siniestro.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador.",
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo.",
        "La garantía legal existe así el vendedor no ofrezca ninguna garantía comercial."
      ],
      "correcta": 3,
      "explicacion": "La garantía legal existe así el vendedor no ofrezca ninguna garantía comercial."
    },
    {
      "pregunta": "Sobre \"Protección al consumidor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios.",
        "Usar obras o marcas sin autorización puede generar responsabilidad civil y hasta penal.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El consumidor elige entre reparación, cambio o devolución del dinero."
      ],
      "correcta": 3,
      "explicacion": "El consumidor elige entre reparación, cambio o devolución del dinero."
    },
    {
      "pregunta": "Sobre \"Protección al consumidor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Sucesiones y divorcios de mutuo acuerdo sin hijos menores pueden hacerse ante notario.",
        "La Superintendencia de Industria y Comercio resuelve quejas de consumo."
      ],
      "correcta": 3,
      "explicacion": "La Superintendencia de Industria y Comercio resuelve quejas de consumo."
    }
  ],
  "datos-personales-derecho-digital": [
    {
      "pregunta": "Sobre \"Datos personales y derecho digital\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El agua potable tiene protección reforzada por su carácter de derecho fundamental conexo.",
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo.",
        "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito.",
        "Recolectar tus datos personales exige, en general, tu autorización previa."
      ],
      "correcta": 3,
      "explicacion": "Recolectar tus datos personales exige, en general, tu autorización previa."
    },
    {
      "pregunta": "Sobre \"Datos personales y derecho digital\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La apelación la resuelve el juez o tribunal superior.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Puedes conocer, actualizar, rectificar, suprimir y revocar el uso de tus datos."
      ],
      "correcta": 3,
      "explicacion": "Puedes conocer, actualizar, rectificar, suprimir y revocar el uso de tus datos."
    },
    {
      "pregunta": "Sobre \"Datos personales y derecho digital\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El Registro Mercantil es obligatorio para quien ejerce el comercio.",
        "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto.",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia."
      ],
      "correcta": 3,
      "explicacion": "Los contratos y firmas electrónicas tienen validez legal en Colombia."
    }
  ],
  "codigo-general-del-proceso": [
    {
      "pregunta": "Sobre \"Derecho Procesal Civil: el Código General del Proceso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La decisión de custodia se basa en el interés superior del menor, no en preferencia legal por un padre.",
        "La apelación la resuelve el juez o tribunal superior.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador.",
        "La oralidad y las audiencias son la regla general del proceso civil actual."
      ],
      "correcta": 3,
      "explicacion": "La oralidad y las audiencias son la regla general del proceso civil actual."
    },
    {
      "pregunta": "Sobre \"Derecho Procesal Civil: el Código General del Proceso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes.",
        "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente.",
        "La franquicia es un contrato atípico en Colombia: se rige por lo pactado, no por una ley específica.",
        "Declarativo, ejecutivo y de liquidación son las tres grandes familias de procesos."
      ],
      "correcta": 3,
      "explicacion": "Declarativo, ejecutivo y de liquidación son las tres grandes familias de procesos."
    },
    {
      "pregunta": "Sobre \"Derecho Procesal Civil: el Código General del Proceso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "El Registro Mercantil es obligatorio para quien ejerce el comercio.",
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo."
      ],
      "correcta": 3,
      "explicacion": "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo."
    }
  ],
  "seguridad-social-integral": [
    {
      "pregunta": "Sobre \"Derecho de la Seguridad Social integral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Un contrato escrito y claro facilita enormemente probar el incumplimiento ante el juez.",
        "Tres subsistemas: salud, pensiones y riesgos laborales."
      ],
      "correcta": 3,
      "explicacion": "Tres subsistemas: salud, pensiones y riesgos laborales."
    },
    {
      "pregunta": "Sobre \"Derecho de la Seguridad Social integral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La escritura pública notarial suele ser requisito de validez, no solo de prueba.",
        "El registro hace oponible el acto frente a terceros; la escritura sola no basta para inmuebles.",
        "Con culpa comprobada del empleador, el trabajador puede reclamar indemnización plena adicional.",
        "Prima media (Colpensiones) y ahorro individual (fondos privados) compiten en pensiones."
      ],
      "correcta": 3,
      "explicacion": "Prima media (Colpensiones) y ahorro individual (fondos privados) compiten en pensiones."
    },
    {
      "pregunta": "Sobre \"Derecho de la Seguridad Social integral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave.",
        "La adopción internacional es subsidiaria: procede solo si no hubo familia adoptante en Colombia.",
        "Declarar renta depende de topes de ingresos/patrimonio, no de tener empleo formal.",
        "La tutela sigue siendo clave para exigir servicios de salud negados injustificadamente."
      ],
      "correcta": 3,
      "explicacion": "La tutela sigue siendo clave para exigir servicios de salud negados injustificadamente."
    }
  ],
  "derecho-ambiental-basico": [
    {
      "pregunta": "Sobre \"Derecho Ambiental básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD).",
        "La Ley 675 de 2001 regula la propiedad horizontal en Colombia.",
        "La presunción de inocencia rige todo el proceso.",
        "Los proyectos con impacto significativo requieren licencia ambiental previa."
      ],
      "correcta": 3,
      "explicacion": "Los proyectos con impacto significativo requieren licencia ambiental previa."
    },
    {
      "pregunta": "Sobre \"Derecho Ambiental básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El folio de matrícula inmobiliaria registra cronológicamente todo lo que afecta a un predio.",
        "Demanda → contestación → pruebas → alegatos → sentencia.",
        "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave."
      ],
      "correcta": 3,
      "explicacion": "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave."
    },
    {
      "pregunta": "Sobre \"Derecho Ambiental básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "Demanda → contestación → pruebas → alegatos → sentencia.",
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes.",
        "El daño ambiental puede generar sanción administrativa, acción popular y responsabilidad penal."
      ],
      "correcta": 3,
      "explicacion": "El daño ambiental puede generar sanción administrativa, acción popular y responsabilidad penal."
    }
  ],
  "notariado-registro": [
    {
      "pregunta": "Sobre \"Notariado y registro: trámites que todos hacemos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Marcas y patentes sí requieren registro previo ante la Superintendencia de Industria y Comercio.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La SAS es la forma societaria más usada hoy en Colombia.",
        "La escritura pública notarial suele ser requisito de validez, no solo de prueba."
      ],
      "correcta": 3,
      "explicacion": "La escritura pública notarial suele ser requisito de validez, no solo de prueba."
    },
    {
      "pregunta": "Sobre \"Notariado y registro: trámites que todos hacemos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "La Superintendencia de Industria y Comercio resuelve quejas de consumo.",
        "Incluso con testamento, hay una porción protegida para ciertos herederos.",
        "Sucesiones y divorcios de mutuo acuerdo sin hijos menores pueden hacerse ante notario."
      ],
      "correcta": 3,
      "explicacion": "Sucesiones y divorcios de mutuo acuerdo sin hijos menores pueden hacerse ante notario."
    },
    {
      "pregunta": "Sobre \"Notariado y registro: trámites que todos hacemos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El ICBF evalúa idoneidad de los solicitantes antes de asignar un niño en adopción.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La neutralidad de red obliga a tratar igual todo el tráfico de datos, salvo gestión técnica razonable.",
        "El registro hace oponible el acto frente a terceros; la escritura sola no basta para inmuebles."
      ],
      "correcta": 3,
      "explicacion": "El registro hace oponible el acto frente a terceros; la escritura sola no basta para inmuebles."
    }
  ],
  "propiedad-horizontal": [
    {
      "pregunta": "Sobre \"Propiedad horizontal: la ley de la copropiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La escritura pública notarial suele ser requisito de validez, no solo de prueba.",
        "Las infracciones cambiarias son sanciones administrativas de la DIAN, no delitos penales en general.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "La Ley 675 de 2001 regula la propiedad horizontal en Colombia."
      ],
      "correcta": 3,
      "explicacion": "La Ley 675 de 2001 regula la propiedad horizontal en Colombia."
    },
    {
      "pregunta": "Sobre \"Propiedad horizontal: la ley de la copropiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Delito = conducta típica, antijurídica y culpable.",
        "El ICBF evalúa idoneidad de los solicitantes antes de asignar un niño en adopción.",
        "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero.",
        "Asamblea, consejo de administración y administrador tienen roles distintos."
      ],
      "correcta": 3,
      "explicacion": "Asamblea, consejo de administración y administrador tienen roles distintos."
    },
    {
      "pregunta": "Sobre \"Propiedad horizontal: la ley de la copropiedad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Superintendencia Financiera y la de Salud tienen función jurisdiccional para resolver casos concretos.",
        "Delito = conducta típica, antijurídica y culpable.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "La mora en cuotas de administración es cobrable judicialmente, con intereses."
      ],
      "correcta": 3,
      "explicacion": "La mora en cuotas de administración es cobrable judicialmente, con intereses."
    }
  ],
  "derecho-transito-accidentes": [
    {
      "pregunta": "Sobre \"Derecho de tránsito y accidentes viales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito."
      ],
      "correcta": 3,
      "explicacion": "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito."
    },
    {
      "pregunta": "Sobre \"Derecho de tránsito y accidentes viales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La escritura pública notarial suele ser requisito de validez, no solo de prueba.",
        "El tratamiento fiscal del leasing depende de si se clasifica como operativo o financiero.",
        "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente."
      ],
      "correcta": 3,
      "explicacion": "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente."
    },
    {
      "pregunta": "Sobre \"Derecho de tránsito y accidentes viales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El defensor del consumidor financiero es el primer paso obligatorio antes de ir a la Superintendencia.",
        "El interés superior del menor y la protección integral son los ejes del Código de Infancia.",
        "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD).",
        "Accidentes con heridos pueden generar responsabilidad civil y, en casos graves, penal."
      ],
      "correcta": 3,
      "explicacion": "Accidentes con heridos pueden generar responsabilidad civil y, en casos graves, penal."
    }
  ],
  "contratacion-estatal-basica": [
    {
      "pregunta": "Sobre \"Contratación estatal básica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "El acta de conciliación con acuerdo tiene mérito ejecutivo, igual que una sentencia.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme.",
        "La licitación pública es la regla general; existen modalidades distintas para casos específicos."
      ],
      "correcta": 3,
      "explicacion": "La licitación pública es la regla general; existen modalidades distintas para casos específicos."
    },
    {
      "pregunta": "Sobre \"Contratación estatal básica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios.",
        "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría."
      ],
      "correcta": 3,
      "explicacion": "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría."
    },
    {
      "pregunta": "Sobre \"Contratación estatal básica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La escritura pública notarial suele ser requisito de validez, no solo de prueba.",
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "Las cláusulas exorbitantes dan al Estado poderes que no existen entre particulares."
      ],
      "correcta": 3,
      "explicacion": "Las cláusulas exorbitantes dan al Estado poderes que no existen entre particulares."
    }
  ],
  "propiedad-intelectual": [
    {
      "pregunta": "Sobre \"Propiedad intelectual: derechos de autor y marcas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin testamento, la ley define el orden de herederos (sucesión intestada).",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia.",
        "Con culpa comprobada del empleador, el trabajador puede reclamar indemnización plena adicional.",
        "El derecho de autor nace con la creación de la obra, sin necesidad de registro."
      ],
      "correcta": 3,
      "explicacion": "El derecho de autor nace con la creación de la obra, sin necesidad de registro."
    },
    {
      "pregunta": "Sobre \"Propiedad intelectual: derechos de autor y marcas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El menor con suficiente madurez debe ser escuchado, aunque su opinión no es automáticamente vinculante.",
        "La fiducia de preventas protege a los compradores si el proyecto no alcanza el punto de equilibrio.",
        "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente.",
        "Marcas y patentes sí requieren registro previo ante la Superintendencia de Industria y Comercio."
      ],
      "correcta": 3,
      "explicacion": "Marcas y patentes sí requieren registro previo ante la Superintendencia de Industria y Comercio."
    },
    {
      "pregunta": "Sobre \"Propiedad intelectual: derechos de autor y marcas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La adopción es una medida de protección del menor, no un derecho del adulto a adoptar.",
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo.",
        "Matrimonio y unión marital de hecho generan efectos patrimoniales similares.",
        "Usar obras o marcas sin autorización puede generar responsabilidad civil y hasta penal."
      ],
      "correcta": 3,
      "explicacion": "Usar obras o marcas sin autorización puede generar responsabilidad civil y hasta penal."
    }
  ],
  "insolvencia-persona-natural": [
    {
      "pregunta": "Sobre \"Insolvencia de persona natural no comerciante\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "La responsabilidad civil cubre daños a terceros; el cumplimiento garantiza obligaciones contractuales.",
        "Existe un trámite formal de insolvencia para personas naturales no comerciantes."
      ],
      "correcta": 3,
      "explicacion": "Existe un trámite formal de insolvencia para personas naturales no comerciantes."
    },
    {
      "pregunta": "Sobre \"Insolvencia de persona natural no comerciante\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Divulgar la invención antes de solicitar la patente puede destruir la novedad exigida.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría.",
        "Iniciar el trámite suspende los embargos y demandas en curso de los acreedores."
      ],
      "correcta": 3,
      "explicacion": "Iniciar el trámite suspende los embargos y demandas en curso de los acreedores."
    },
    {
      "pregunta": "Sobre \"Insolvencia de persona natural no comerciante\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La franquicia es un contrato atípico en Colombia: se rige por lo pactado, no por una ley específica.",
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes."
      ],
      "correcta": 3,
      "explicacion": "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes."
    }
  ],
  "derecho-agrario-basico": [
    {
      "pregunta": "Sobre \"Derecho Agrario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La adopción es una medida de protección del menor, no un derecho del adulto a adoptar.",
        "Puedes conocer, actualizar, rectificar, suprimir y revocar el uso de tus datos.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La Agencia Nacional de Tierras administra hoy la política de tierras rurales."
      ],
      "correcta": 3,
      "explicacion": "La Agencia Nacional de Tierras administra hoy la política de tierras rurales."
    },
    {
      "pregunta": "Sobre \"Derecho Agrario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave.",
        "La sucesión puede hacerse ante notario si hay acuerdo, o ante juez si hay conflicto.",
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa.",
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación."
      ],
      "correcta": 3,
      "explicacion": "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación."
    },
    {
      "pregunta": "Sobre \"Derecho Agrario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Matrimonio y unión marital de hecho generan efectos patrimoniales similares.",
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La Ley 1448 de 2011 creó un proceso especial para restituir tierras a víctimas del conflicto."
      ],
      "correcta": 3,
      "explicacion": "La Ley 1448 de 2011 creó un proceso especial para restituir tierras a víctimas del conflicto."
    }
  ],
  "derecho-ninez-adolescencia": [
    {
      "pregunta": "Sobre \"Derecho de la Niñez y la Adolescencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "Delito = conducta típica, antijurídica y culpable.",
        "El interés superior del menor y la protección integral son los ejes del Código de Infancia."
      ],
      "correcta": 3,
      "explicacion": "El interés superior del menor y la protección integral son los ejes del Código de Infancia."
    },
    {
      "pregunta": "Sobre \"Derecho de la Niñez y la Adolescencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador.",
        "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD)."
      ],
      "correcta": 3,
      "explicacion": "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD)."
    },
    {
      "pregunta": "Sobre \"Derecho de la Niñez y la Adolescencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Adolescentes de 14 a 18 responden ante el SRPA; menores de 14 son inimputables penalmente."
      ],
      "correcta": 3,
      "explicacion": "Adolescentes de 14 a 18 responden ante el SRPA; menores de 14 son inimputables penalmente."
    }
  ],
  "cooperativas-economia-solidaria": [
    {
      "pregunta": "Sobre \"Cooperativas y economía solidaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Superintendencia de Industria y Comercio resuelve quejas de consumo.",
        "Se puede objetar el cobro sin dejar de pagar la parte no discutida de la factura.",
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "Las cooperativas se rigen por un voto por asociado, no por participación de capital."
      ],
      "correcta": 3,
      "explicacion": "Las cooperativas se rigen por un voto por asociado, no por participación de capital."
    },
    {
      "pregunta": "Sobre \"Cooperativas y economía solidaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación revisa errores de derecho, no vuelve a juzgar los hechos.",
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "Los fondos de empleados son cooperativas cerradas a trabajadores de una empresa específica."
      ],
      "correcta": 3,
      "explicacion": "Los fondos de empleados son cooperativas cerradas a trabajadores de una empresa específica."
    },
    {
      "pregunta": "Sobre \"Cooperativas y economía solidaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El modelo de utilidad protege mejoras funcionales más modestas, con un estándar menos exigente.",
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles.",
        "Sin testamento, la ley define el orden de herederos (sucesión intestada).",
        "El sector solidario tiene beneficios tributarios a cambio de reinvertir excedentes en fines sociales."
      ],
      "correcta": 3,
      "explicacion": "El sector solidario tiene beneficios tributarios a cambio de reinvertir excedentes en fines sociales."
    }
  ],
  "contratacion-laboral-especial": [
    {
      "pregunta": "Sobre \"Contratación laboral especial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin ánimo de lucro no impide generar excedentes: impide repartirlos entre asociados o fundadores.",
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "Delito = conducta típica, antijurídica y culpable.",
        "El contrato de aprendizaje no es un contrato de trabajo: hay apoyo de sostenimiento, no salario."
      ],
      "correcta": 3,
      "explicacion": "El contrato de aprendizaje no es un contrato de trabajo: hay apoyo de sostenimiento, no salario."
    },
    {
      "pregunta": "Sobre \"Contratación laboral especial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector solidario tiene beneficios tributarios a cambio de reinvertir excedentes en fines sociales.",
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador.",
        "La autonomía de la voluntad permite crear contratos no regulados expresamente.",
        "El teletrabajo da los mismos derechos que el trabajo presencial, más obligaciones del empleador."
      ],
      "correcta": 3,
      "explicacion": "El teletrabajo da los mismos derechos que el trabajo presencial, más obligaciones del empleador."
    },
    {
      "pregunta": "Sobre \"Contratación laboral especial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "El COPASST da a los trabajadores un rol activo de vigilancia en la prevención de riesgos.",
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa.",
        "El trabajo doméstico tiene protección reforzada, incluida la afiliación por trabajo por días."
      ],
      "correcta": 3,
      "explicacion": "El trabajo doméstico tiene protección reforzada, incluida la afiliación por trabajo por días."
    }
  ],
  "regimen-cambiario-basico": [
    {
      "pregunta": "Sobre \"Régimen cambiario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La empresa transportadora responde también por los vehículos afiliados bajo su habilitación.",
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario."
      ],
      "correcta": 3,
      "explicacion": "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario."
    },
    {
      "pregunta": "Sobre \"Régimen cambiario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito.",
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "El folio de matrícula inmobiliaria registra cronológicamente todo lo que afecta a un predio.",
        "Registrar la inversión extranjera ante el Banco de la República es clave para poder repatriar capital."
      ],
      "correcta": 3,
      "explicacion": "Registrar la inversión extranjera ante el Banco de la República es clave para poder repatriar capital."
    },
    {
      "pregunta": "Sobre \"Régimen cambiario básico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación revisa errores de derecho, no vuelve a juzgar los hechos.",
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide.",
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes.",
        "Las infracciones cambiarias son sanciones administrativas de la DIAN, no delitos penales en general."
      ],
      "correcta": 3,
      "explicacion": "Las infracciones cambiarias son sanciones administrativas de la DIAN, no delitos penales en general."
    }
  ],
  "seguros-en-profundidad": [
    {
      "pregunta": "Sobre \"Derecho de seguros en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide.",
        "La patente exige novedad mundial, nivel inventivo y aplicación industrial, con veinte años de exclusividad.",
        "El defensor del consumidor financiero es el primer paso obligatorio antes de ir a la Superintendencia.",
        "La responsabilidad civil cubre daños a terceros; el cumplimiento garantiza obligaciones contractuales."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad civil cubre daños a terceros; el cumplimiento garantiza obligaciones contractuales."
    },
    {
      "pregunta": "Sobre \"Derecho de seguros en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Accidentes con heridos pueden generar responsabilidad civil y, en casos graves, penal.",
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La aseguradora tiene un mes para objetar o pagar tras recibir los documentos completos del siniestro."
      ],
      "correcta": 3,
      "explicacion": "La aseguradora tiene un mes para objetar o pagar tras recibir los documentos completos del siniestro."
    },
    {
      "pregunta": "Sobre \"Derecho de seguros en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Las exclusiones ambiguas se interpretan a favor del asegurado, no de la aseguradora."
      ],
      "correcta": 3,
      "explicacion": "Las exclusiones ambiguas se interpretan a favor del asegurado, no de la aseguradora."
    }
  ],
  "adopcion-proteccion-menores": [
    {
      "pregunta": "Sobre \"Adopción y protección de menores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Recolectar tus datos personales exige, en general, tu autorización previa.",
        "La adopción es una medida de protección del menor, no un derecho del adulto a adoptar."
      ],
      "correcta": 3,
      "explicacion": "La adopción es una medida de protección del menor, no un derecho del adulto a adoptar."
    },
    {
      "pregunta": "Sobre \"Adopción y protección de menores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El teletrabajo da los mismos derechos que el trabajo presencial, más obligaciones del empleador.",
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación.",
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "El ICBF evalúa idoneidad de los solicitantes antes de asignar un niño en adopción."
      ],
      "correcta": 3,
      "explicacion": "El ICBF evalúa idoneidad de los solicitantes antes de asignar un niño en adopción."
    },
    {
      "pregunta": "Sobre \"Adopción y protección de menores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Los títulos valores (cheque, pagaré, letra) tienen reglas propias de cobro.",
        "La adopción internacional es subsidiaria: procede solo si no hubo familia adoptante en Colombia."
      ],
      "correcta": 3,
      "explicacion": "La adopción internacional es subsidiaria: procede solo si no hubo familia adoptante en Colombia."
    }
  ],
  "fiducia-mercantil": [
    {
      "pregunta": "Sobre \"Fiducia mercantil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación.",
        "Un contrato escrito y claro facilita enormemente probar el incumplimiento ante el juez.",
        "Las visas se agrupan en visitante, migrante y residente, según el ánimo de permanencia.",
        "Los bienes en fiducia forman un patrimonio autónomo, separado del fiduciante y la fiduciaria."
      ],
      "correcta": 3,
      "explicacion": "Los bienes en fiducia forman un patrimonio autónomo, separado del fiduciante y la fiduciaria."
    },
    {
      "pregunta": "Sobre \"Fiducia mercantil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "La autonomía de la voluntad permite crear contratos no regulados expresamente.",
        "La neutralidad de red obliga a tratar igual todo el tráfico de datos, salvo gestión técnica razonable.",
        "La fiducia de preventas protege a los compradores si el proyecto no alcanza el punto de equilibrio."
      ],
      "correcta": 3,
      "explicacion": "La fiducia de preventas protege a los compradores si el proyecto no alcanza el punto de equilibrio."
    },
    {
      "pregunta": "Sobre \"Fiducia mercantil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia.",
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo."
      ],
      "correcta": 3,
      "explicacion": "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo."
    }
  ],
  "leasing-renting": [
    {
      "pregunta": "Sobre \"Leasing y renting\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En varias materias, conciliar antes es requisito de procedibilidad para poder demandar.",
        "Declarativo, ejecutivo y de liquidación son las tres grandes familias de procesos.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "En el leasing, el cliente puede comprar el bien al final por un valor residual pactado."
      ],
      "correcta": 3,
      "explicacion": "En el leasing, el cliente puede comprar el bien al final por un valor residual pactado."
    },
    {
      "pregunta": "Sobre \"Leasing y renting\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La tutela sigue siendo clave para exigir servicios de salud negados injustificadamente.",
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El tratamiento fiscal del leasing depende de si se clasifica como operativo o financiero."
      ],
      "correcta": 3,
      "explicacion": "El tratamiento fiscal del leasing depende de si se clasifica como operativo o financiero."
    },
    {
      "pregunta": "Sobre \"Leasing y renting\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación.",
        "El Régimen Tributario Especial da beneficios fiscales a cambio de controles reforzados de la DIAN.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El renting suele incluir servicios adicionales y no contempla opción de compra."
      ],
      "correcta": 3,
      "explicacion": "El renting suele incluir servicios adicionales y no contempla opción de compra."
    }
  ],
  "transporte-terrestre": [
    {
      "pregunta": "Sobre \"Derecho de transporte terrestre\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Demanda → contestación → pruebas → alegatos → sentencia.",
        "El conciliador propone fórmulas de arreglo; no impone una decisión como un juez o un árbitro.",
        "La SAS es la forma societaria más usada hoy en Colombia.",
        "La empresa transportadora responde también por los vehículos afiliados bajo su habilitación."
      ],
      "correcta": 3,
      "explicacion": "La empresa transportadora responde también por los vehículos afiliados bajo su habilitación."
    },
    {
      "pregunta": "Sobre \"Derecho de transporte terrestre\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad.",
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios.",
        "La Superintendencia de Industria y Comercio resuelve quejas de consumo.",
        "En pasajeros, el transportador debe probar una causa extraña para exonerarse de responsabilidad."
      ],
      "correcta": 3,
      "explicacion": "En pasajeros, el transportador debe probar una causa extraña para exonerarse de responsabilidad."
    },
    {
      "pregunta": "Sobre \"Derecho de transporte terrestre\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Accidentes con heridos pueden generar responsabilidad civil y, en casos graves, penal.",
        "Si no hay acuerdo, la liquidación patrimonial libera al deudor de las deudas restantes.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría.",
        "El transporte de carga suele protegerse con un seguro específico de mercancías."
      ],
      "correcta": 3,
      "explicacion": "El transporte de carga suele protegerse con un seguro específico de mercancías."
    }
  ],
  "registral-inmobiliario-detalle": [
    {
      "pregunta": "Sobre \"Derecho registral inmobiliario en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "El contrato de aprendizaje no es un contrato de trabajo: hay apoyo de sostenimiento, no salario.",
        "El SOAT cubre a las víctimas sin importar de quién fue la culpa del accidente.",
        "El folio de matrícula inmobiliaria registra cronológicamente todo lo que afecta a un predio."
      ],
      "correcta": 3,
      "explicacion": "El folio de matrícula inmobiliaria registra cronológicamente todo lo que afecta a un predio."
    },
    {
      "pregunta": "Sobre \"Derecho registral inmobiliario en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme.",
        "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario.",
        "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto."
      ],
      "correcta": 3,
      "explicacion": "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto."
    },
    {
      "pregunta": "Sobre \"Derecho registral inmobiliario en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles.",
        "El sector solidario tiene beneficios tributarios a cambio de reinvertir excedentes en fines sociales.",
        "Prima media (Colpensiones) y ahorro individual (fondos privados) compiten en pensiones.",
        "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero."
      ],
      "correcta": 3,
      "explicacion": "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero."
    }
  ],
  "esal-asociaciones": [
    {
      "pregunta": "Sobre \"Entidades sin ánimo de lucro (ESAL)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En pasajeros, el transportador debe probar una causa extraña para exonerarse de responsabilidad.",
        "El ICBF puede iniciar un Proceso Administrativo de Restablecimiento de Derechos (PARD).",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Sin ánimo de lucro no impide generar excedentes: impide repartirlos entre asociados o fundadores."
      ],
      "correcta": 3,
      "explicacion": "Sin ánimo de lucro no impide generar excedentes: impide repartirlos entre asociados o fundadores."
    },
    {
      "pregunta": "Sobre \"Entidades sin ánimo de lucro (ESAL)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa.",
        "Demanda → contestación → pruebas → alegatos → sentencia.",
        "La Agencia Nacional de Tierras administra hoy la política de tierras rurales.",
        "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas."
      ],
      "correcta": 3,
      "explicacion": "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas."
    },
    {
      "pregunta": "Sobre \"Entidades sin ánimo de lucro (ESAL)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El modelo de utilidad protege mejoras funcionales más modestas, con un estándar menos exigente.",
        "El Régimen Tributario Especial da beneficios fiscales a cambio de controles reforzados de la DIAN."
      ],
      "correcta": 3,
      "explicacion": "El Régimen Tributario Especial da beneficios fiscales a cambio de controles reforzados de la DIAN."
    }
  ],
  "franquicia-distribucion": [
    {
      "pregunta": "Sobre \"Contratos de franquicia y distribución\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "La tutela sigue siendo clave para exigir servicios de salud negados injustificadamente.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "La franquicia es un contrato atípico en Colombia: se rige por lo pactado, no por una ley específica."
      ],
      "correcta": 3,
      "explicacion": "La franquicia es un contrato atípico en Colombia: se rige por lo pactado, no por una ley específica."
    },
    {
      "pregunta": "Sobre \"Contratos de franquicia y distribución\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Se puede objetar el cobro sin dejar de pagar la parte no discutida de la factura.",
        "En el leasing, el cliente puede comprar el bien al final por un valor residual pactado.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El manual de operaciones protege la uniformidad de marca y su incumplimiento suele ser causal de terminación."
      ],
      "correcta": 3,
      "explicacion": "El manual de operaciones protege la uniformidad de marca y su incumplimiento suele ser causal de terminación."
    },
    {
      "pregunta": "Sobre \"Contratos de franquicia y distribución\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Existe un trámite formal de insolvencia para personas naturales no comerciantes.",
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato."
      ],
      "correcta": 3,
      "explicacion": "La agencia comercial da al agente una prestación económica especial al terminar el contrato."
    }
  ],
  "extranjeria-migracion": [
    {
      "pregunta": "Sobre \"Régimen de extranjería y migración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme.",
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez.",
        "Las visas se agrupan en visitante, migrante y residente, según el ánimo de permanencia."
      ],
      "correcta": 3,
      "explicacion": "Las visas se agrupan en visitante, migrante y residente, según el ánimo de permanencia."
    },
    {
      "pregunta": "Sobre \"Régimen de extranjería y migración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador."
      ],
      "correcta": 3,
      "explicacion": "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador."
    },
    {
      "pregunta": "Sobre \"Régimen de extranjería y migración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El manual de operaciones protege la uniformidad de marca y su incumplimiento suele ser causal de terminación.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "El PPT regularizó masivamente a migrantes venezolanos sin necesidad de una visa tradicional."
      ],
      "correcta": 3,
      "explicacion": "El PPT regularizó masivamente a migrantes venezolanos sin necesidad de una visa tradicional."
    }
  ],
  "telecomunicaciones-tic-basico": [
    {
      "pregunta": "Sobre \"Derecho de las telecomunicaciones y TIC\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez.",
        "La fiducia de preventas protege a los compradores si el proyecto no alcanza el punto de equilibrio.",
        "La Agencia Nacional de Tierras administra hoy la política de tierras rurales.",
        "La CRC regula el mercado, el Ministerio TIC define política, y la ANE administra el espectro."
      ],
      "correcta": 3,
      "explicacion": "La CRC regula el mercado, el Ministerio TIC define política, y la ANE administra el espectro."
    },
    {
      "pregunta": "Sobre \"Derecho de las telecomunicaciones y TIC\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El arrendador nunca puede desalojar por su cuenta: debe acudir al proceso judicial de restitución.",
        "La fiducia de preventas protege a los compradores si el proyecto no alcanza el punto de equilibrio.",
        "La SAS es la forma societaria más usada hoy en Colombia.",
        "La neutralidad de red obliga a tratar igual todo el tráfico de datos, salvo gestión técnica razonable."
      ],
      "correcta": 3,
      "explicacion": "La neutralidad de red obliga a tratar igual todo el tráfico de datos, salvo gestión técnica razonable."
    },
    {
      "pregunta": "Sobre \"Derecho de las telecomunicaciones y TIC\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "En varias materias, conciliar antes es requisito de procedibilidad para poder demandar.",
        "Con culpa comprobada del empleador, el trabajador puede reclamar indemnización plena adicional.",
        "La portabilidad numérica permite cambiar de operador conservando el mismo número."
      ],
      "correcta": 3,
      "explicacion": "La portabilidad numérica permite cambiar de operador conservando el mismo número."
    }
  ],
  "salud-ocupacional-detalle": [
    {
      "pregunta": "Sobre \"Salud ocupacional y riesgos laborales en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La neutralidad de red obliga a tratar igual todo el tráfico de datos, salvo gestión técnica razonable.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El concurso de méritos prioriza calidad técnica sobre precio, para servicios de consultoría.",
        "El SG-SST y la afiliación a una ARL son obligatorios para todo empleador, sin importar su tamaño."
      ],
      "correcta": 3,
      "explicacion": "El SG-SST y la afiliación a una ARL son obligatorios para todo empleador, sin importar su tamaño."
    },
    {
      "pregunta": "Sobre \"Salud ocupacional y riesgos laborales en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La presunción de inocencia rige todo el proceso.",
        "La aseguradora tiene un mes para objetar o pagar tras recibir los documentos completos del siniestro.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador.",
        "Con culpa comprobada del empleador, el trabajador puede reclamar indemnización plena adicional."
      ],
      "correcta": 3,
      "explicacion": "Con culpa comprobada del empleador, el trabajador puede reclamar indemnización plena adicional."
    },
    {
      "pregunta": "Sobre \"Salud ocupacional y riesgos laborales en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "Recolectar tus datos personales exige, en general, tu autorización previa.",
        "El COPASST da a los trabajadores un rol activo de vigilancia en la prevención de riesgos."
      ],
      "correcta": 3,
      "explicacion": "El COPASST da a los trabajadores un rol activo de vigilancia en la prevención de riesgos."
    }
  ],
  "notarial-poderes-autenticaciones": [
    {
      "pregunta": "Sobre \"Derecho notarial: poderes y autenticaciones\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "La regla general es la libertad cambiaria, pero ciertas operaciones deben canalizarse por el mercado cambiario.",
        "La Agencia Nacional de Tierras administra hoy la política de tierras rurales.",
        "El poder general requiere escritura pública; el especial puede ser documento privado autenticado."
      ],
      "correcta": 3,
      "explicacion": "El poder general requiere escritura pública; el especial puede ser documento privado autenticado."
    },
    {
      "pregunta": "Sobre \"Derecho notarial: poderes y autenticaciones\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Delito = conducta típica, antijurídica y culpable.",
        "La Superintendencia de Industria y Comercio resuelve quejas de consumo.",
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Autenticar una firma no certifica el contenido del documento, solo la identidad de quien firmó."
      ],
      "correcta": 3,
      "explicacion": "Autenticar una firma no certifica el contenido del documento, solo la identidad de quien firmó."
    },
    {
      "pregunta": "Sobre \"Derecho notarial: poderes y autenticaciones\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación."
      ],
      "correcta": 3,
      "explicacion": "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación."
    }
  ],
  "contrato-obra-responsabilidad-decenal": [
    {
      "pregunta": "Sobre \"Contrato de obra y responsabilidad decenal\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El reconocimiento de contenido y firma da mayor fuerza probatoria que la simple autenticación.",
        "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto.",
        "El arrendamiento de vivienda urbana tiene una ley especial que limita al arrendador.",
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios."
      ],
      "correcta": 3,
      "explicacion": "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios."
    },
    {
      "pregunta": "Sobre \"Contrato de obra y responsabilidad decenal\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "Un contrato escrito y claro facilita enormemente probar el incumplimiento ante el juez.",
        "La responsabilidad decenal cubre la ruina del edificio durante diez años y no se puede renunciar."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad decenal cubre la ruina del edificio durante diez años y no se puede renunciar."
    },
    {
      "pregunta": "Sobre \"Contrato de obra y responsabilidad decenal\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito.",
        "El daño ambiental puede generar sanción administrativa, acción popular y responsabilidad penal.",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia.",
        "El diseñador o director técnico puede responder solidariamente junto al constructor."
      ],
      "correcta": 3,
      "explicacion": "El diseñador o director técnico puede responder solidariamente junto al constructor."
    }
  ],
  "regimen-tributario-pymes": [
    {
      "pregunta": "Sobre \"Régimen tributario de las pequeñas empresas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La responsabilidad civil cubre daños a terceros; el cumplimiento garantiza obligaciones contractuales.",
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "Declarar renta depende de topes de ingresos/patrimonio, no de tener empleo formal.",
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa."
      ],
      "correcta": 3,
      "explicacion": "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa."
    },
    {
      "pregunta": "Sobre \"Régimen tributario de las pequeñas empresas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios.",
        "La presunción de inocencia rige todo el proceso.",
        "El Régimen Simple unifica varios impuestos en una declaración anual con anticipos bimestrales."
      ],
      "correcta": 3,
      "explicacion": "El Régimen Simple unifica varios impuestos en una declaración anual con anticipos bimestrales."
    },
    {
      "pregunta": "Sobre \"Régimen tributario de las pequeñas empresas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El agua potable tiene protección reforzada por su carácter de derecho fundamental conexo.",
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "El incumplimiento habilita exigir cumplimiento, resolución e indemnización.",
        "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad."
      ],
      "correcta": 3,
      "explicacion": "No todas las empresas pueden acogerse al Régimen Simple: hay límites de ingresos y actividad."
    }
  ],
  "restitucion-inmueble-arrendado": [
    {
      "pregunta": "Sobre \"Restitución de inmueble arrendado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin testamento, la ley define el orden de herederos (sucesión intestada).",
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "La oralidad y las audiencias son la regla general del proceso civil actual.",
        "El arrendador nunca puede desalojar por su cuenta: debe acudir al proceso judicial de restitución."
      ],
      "correcta": 3,
      "explicacion": "El arrendador nunca puede desalojar por su cuenta: debe acudir al proceso judicial de restitución."
    },
    {
      "pregunta": "Sobre \"Restitución de inmueble arrendado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Revisar todas las anotaciones del folio, no solo la última, evita comprar un problema oculto.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Sin ánimo de lucro no impide generar excedentes: impide repartirlos entre asociados o fundadores.",
        "El arrendatario puede evitar la restitución pagando la mora, pero solo una vez por año calendario."
      ],
      "correcta": 3,
      "explicacion": "El arrendatario puede evitar la restitución pagando la mora, pero solo una vez por año calendario."
    },
    {
      "pregunta": "Sobre \"Restitución de inmueble arrendado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El Régimen Simple unifica varios impuestos en una declaración anual con anticipos bimestrales.",
        "El COPASST da a los trabajadores un rol activo de vigilancia en la prevención de riesgos.",
        "El consumidor elige entre reparación, cambio o devolución del dinero.",
        "Un contrato escrito y claro facilita enormemente probar el incumplimiento ante el juez."
      ],
      "correcta": 3,
      "explicacion": "Un contrato escrito y claro facilita enormemente probar el incumplimiento ante el juez."
    }
  ],
  "quejas-superintendencias-financiera-salud": [
    {
      "pregunta": "Sobre \"Quejas ante las Superintendencias financiera y de salud\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La portabilidad numérica permite cambiar de operador conservando el mismo número.",
        "La fiducia de garantía permite cobrar una deuda vendiendo el bien sin proceso judicial largo.",
        "La autonomía de la voluntad permite crear contratos no regulados expresamente.",
        "El defensor del consumidor financiero es el primer paso obligatorio antes de ir a la Superintendencia."
      ],
      "correcta": 3,
      "explicacion": "El defensor del consumidor financiero es el primer paso obligatorio antes de ir a la Superintendencia."
    },
    {
      "pregunta": "Sobre \"Quejas ante las Superintendencias financiera y de salud\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La presunción de inocencia rige todo el proceso.",
        "Los proyectos con impacto significativo requieren licencia ambiental previa.",
        "La adopción internacional es subsidiaria: procede solo si no hubo familia adoptante en Colombia.",
        "La Superintendencia Financiera y la de Salud tienen función jurisdiccional para resolver casos concretos."
      ],
      "correcta": 3,
      "explicacion": "La Superintendencia Financiera y la de Salud tienen función jurisdiccional para resolver casos concretos."
    },
    {
      "pregunta": "Sobre \"Quejas ante las Superintendencias financiera y de salud\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Incluso con testamento, hay una porción protegida para ciertos herederos.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario.",
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación."
      ],
      "correcta": 3,
      "explicacion": "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación."
    }
  ],
  "custodia-compartida-regimen-visitas": [
    {
      "pregunta": "Sobre \"Custodia compartida y régimen de visitas en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La agencia comercial da al agente una prestación económica especial al terminar el contrato.",
        "Divulgar la invención antes de solicitar la patente puede destruir la novedad exigida.",
        "Las liquidaciones de la DIAN pueden controvertirse antes de quedar en firme.",
        "La decisión de custodia se basa en el interés superior del menor, no en preferencia legal por un padre."
      ],
      "correcta": 3,
      "explicacion": "La decisión de custodia se basa en el interés superior del menor, no en preferencia legal por un padre."
    },
    {
      "pregunta": "Sobre \"Custodia compartida y régimen de visitas en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Declarar el riesgo con sinceridad al asegurar evita que la aseguradora anule la póliza.",
        "El arrendador nunca puede desalojar por su cuenta: debe acudir al proceso judicial de restitución.",
        "Los contratos y firmas electrónicas tienen validez legal en Colombia.",
        "El menor con suficiente madurez debe ser escuchado, aunque su opinión no es automáticamente vinculante."
      ],
      "correcta": 3,
      "explicacion": "El menor con suficiente madurez debe ser escuchado, aunque su opinión no es automáticamente vinculante."
    },
    {
      "pregunta": "Sobre \"Custodia compartida y régimen de visitas en detalle\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los actos administrativos pueden recurrirse ante la misma entidad antes de ir a un juez.",
        "Trabajar sin visa habilitante genera sanciones tanto al extranjero como al empleador.",
        "El arrendador nunca puede desalojar por su cuenta: debe acudir al proceso judicial de restitución.",
        "Un régimen de visitas específico y detallado previene más conflictos que uno ambiguo."
      ],
      "correcta": 3,
      "explicacion": "Un régimen de visitas específico y detallado previene más conflictos que uno ambiguo."
    }
  ],
  "patentes-modelos-utilidad": [
    {
      "pregunta": "Sobre \"Patentes y modelos de utilidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Una fundación nace de un patrimonio afectado a un fin; una corporación nace de personas asociadas.",
        "Las cláusulas exorbitantes dan al Estado poderes que no existen entre particulares.",
        "El principio de prioridad registral premia a quien inscribe primero, no a quien firma primero.",
        "La patente exige novedad mundial, nivel inventivo y aplicación industrial, con veinte años de exclusividad."
      ],
      "correcta": 3,
      "explicacion": "La patente exige novedad mundial, nivel inventivo y aplicación industrial, con veinte años de exclusividad."
    },
    {
      "pregunta": "Sobre \"Patentes y modelos de utilidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de precaución permite actuar sin certeza científica absoluta ante riesgo grave.",
        "Los baldíos adjudicados tienen restricciones a su venta y límites de acumulación.",
        "La decisión de custodia se basa en el interés superior del menor, no en preferencia legal por un padre.",
        "El modelo de utilidad protege mejoras funcionales más modestas, con un estándar menos exigente."
      ],
      "correcta": 3,
      "explicacion": "El modelo de utilidad protege mejoras funcionales más modestas, con un estándar menos exigente."
    },
    {
      "pregunta": "Sobre \"Patentes y modelos de utilidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de petición debe responderse de fondo, normalmente en 15 días hábiles.",
        "Todos los fallos van a eventual revisión de la Corte Constitucional.",
        "Un inmueble solo cambia de dueño frente a terceros cuando la escritura queda registrada.",
        "Divulgar la invención antes de solicitar la patente puede destruir la novedad exigida."
      ],
      "correcta": 3,
      "explicacion": "Divulgar la invención antes de solicitar la patente puede destruir la novedad exigida."
    }
  ],
  "conciliacion-arreglo-directo": [
    {
      "pregunta": "Sobre \"Conciliación y mecanismos de arreglo directo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sistema acusatorio: Fiscalía investiga y acusa, el juez decide.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "Con daños menores y acuerdo entre las partes, no siempre se necesita la autoridad de tránsito.",
        "El conciliador propone fórmulas de arreglo; no impone una decisión como un juez o un árbitro."
      ],
      "correcta": 3,
      "explicacion": "El conciliador propone fórmulas de arreglo; no impone una decisión como un juez o un árbitro."
    },
    {
      "pregunta": "Sobre \"Conciliación y mecanismos de arreglo directo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El despido sin justa causa genera indemnización; algunos trabajadores tienen fuero especial.",
        "Se puede objetar el cobro sin dejar de pagar la parte no discutida de la factura.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "En varias materias, conciliar antes es requisito de procedibilidad para poder demandar."
      ],
      "correcta": 3,
      "explicacion": "En varias materias, conciliar antes es requisito de procedibilidad para poder demandar."
    },
    {
      "pregunta": "Sobre \"Conciliación y mecanismos de arreglo directo\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Guardar por escrito toda comunicación con la entidad facilita después cualquier reclamación.",
        "Delito = conducta típica, antijurídica y culpable.",
        "Renta, IVA y retención en la fuente son las tres capas tributarias básicas de cualquier empresa.",
        "El acta de conciliación con acuerdo tiene mérito ejecutivo, igual que una sentencia."
      ],
      "correcta": 3,
      "explicacion": "El acta de conciliación con acuerdo tiene mérito ejecutivo, igual que una sentencia."
    }
  ],
  "quejas-servicios-publicos-domiciliarios": [
    {
      "pregunta": "Sobre \"Quejas por servicios públicos domiciliarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El folio de matrícula inmobiliaria registra cronológicamente todo lo que afecta a un predio.",
        "En varias materias, conciliar antes es requisito de procedibilidad para poder demandar.",
        "Prestación personal + subordinación + salario = contrato de trabajo, sin importar el nombre.",
        "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario."
      ],
      "correcta": 3,
      "explicacion": "El reclamo directo a la empresa es el primer paso; si no responde en 15 días, gana el usuario."
    },
    {
      "pregunta": "Sobre \"Quejas por servicios públicos domiciliarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La presunción de inocencia rige todo el proceso.",
        "El contrato de obra compromete un resultado material específico, no solo una diligencia de medios.",
        "La jurisdicción contencioso-administrativa resuelve los conflictos con el Estado.",
        "Se puede objetar el cobro sin dejar de pagar la parte no discutida de la factura."
      ],
      "correcta": 3,
      "explicacion": "Se puede objetar el cobro sin dejar de pagar la parte no discutida de la factura."
    },
    {
      "pregunta": "Sobre \"Quejas por servicios públicos domiciliarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Registrar la inversión extranjera ante el Banco de la República es clave para poder repatriar capital.",
        "El proceso monitorio agiliza el cobro de deudas de poca cuantía sin título ejecutivo.",
        "En el leasing, el cliente puede comprar el bien al final por un valor residual pactado.",
        "El agua potable tiene protección reforzada por su carácter de derecho fundamental conexo."
      ],
      "correcta": 3,
      "explicacion": "El agua potable tiene protección reforzada por su carácter de derecho fundamental conexo."
    }
  ],
  "bloque-constitucionalidad": [
    {
      "pregunta": "Sobre \"Bloque de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Principios como in dubio pro reo resuelven dudas interpretativas irreductibles.",
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata.",
        "El consumo humano y doméstico tiene prioridad legal sobre otros usos en situaciones de escasez.",
        "Ciertos tratados de derechos humanos tienen rango constitucional (art. 93)."
      ],
      "correcta": 3,
      "explicacion": "Ciertos tratados de derechos humanos tienen rango constitucional (art. 93)."
    },
    {
      "pregunta": "Sobre \"Bloque de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La explotación ilícita de yacimiento minero se agrava cuando se vincula con grupos armados organizados.",
        "El predial grava la propiedad de inmuebles según avalúo catastral; el ICA grava actividades económicas por ingresos brutos.",
        "Principios como in dubio pro reo resuelven dudas interpretativas irreductibles.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio."
      ],
      "correcta": 3,
      "explicacion": "La Corte distingue bloque en sentido estricto y en sentido amplio."
    },
    {
      "pregunta": "Sobre \"Bloque de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo.",
        "Una imagen forense con hash criptográfico permite detectar cualquier alteración posterior de la evidencia digital.",
        "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana.",
        "Permite invocar directamente instrumentos internacionales en un proceso interno."
      ],
      "correcta": 3,
      "explicacion": "Permite invocar directamente instrumentos internacionales en un proceso interno."
    }
  ],
  "precedente-judicial": [
    {
      "pregunta": "Sobre \"Jurisprudencia y precedente judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las empresas también enfrentan responsabilidad administrativa por fallas de seguridad de datos.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos.",
        "El régimen de inhabilidades se interpreta restrictivamente por limitar el derecho fundamental a ser elegido.",
        "El precedente de las altas cortes es vinculante, no solo orientativo."
      ],
      "correcta": 3,
      "explicacion": "El precedente de las altas cortes es vinculante, no solo orientativo."
    },
    {
      "pregunta": "Sobre \"Jurisprudencia y precedente judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La acción de grupo busca indemnización individual; la acción popular protege el derecho colectivo en sí.",
        "Distinción clave: precedente horizontal vs. vertical."
      ],
      "correcta": 3,
      "explicacion": "Distinción clave: precedente horizontal vs. vertical."
    },
    {
      "pregunta": "Sobre \"Jurisprudencia y precedente judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal.",
        "La tutela procede excepcionalmente contra decisiones deportivas que vulneren garantías fundamentales del debido proceso.",
        "La SAS permite diseñar libremente su estructura de gobierno, con pocas normas imperativas frente a otros tipos societarios.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales."
      ],
      "correcta": 3,
      "explicacion": "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales."
    }
  ],
  "interpretacion-juridica": [
    {
      "pregunta": "Sobre \"Interpretación jurídica y hermenéutica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El arbitraje exige un pacto arbitral, previo o posterior al conflicto.",
        "La claridad para el lector es tan importante como la corrección jurídica.",
        "El litigio estratégico busca cambio estructural, no solo ganar el caso individual.",
        "Métodos clásicos: gramatical, sistemático, histórico y teleológico."
      ],
      "correcta": 3,
      "explicacion": "Métodos clásicos: gramatical, sistemático, histórico y teleológico."
    },
    {
      "pregunta": "Sobre \"Interpretación jurídica y hermenéutica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los tratados pasan por control previo y automático de la Corte antes de ratificarse.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba).",
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez.",
        "El test de proporcionalidad es clave en la jurisprudencia constitucional actual."
      ],
      "correcta": 3,
      "explicacion": "El test de proporcionalidad es clave en la jurisprudencia constitucional actual."
    },
    {
      "pregunta": "Sobre \"Interpretación jurídica y hermenéutica\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La explotación ilícita de yacimiento minero se agrava cuando se vincula con grupos armados organizados.",
        "Sectores regulados como el financiero tienen exigencias específicas de continuidad ante incidentes cibernéticos.",
        "Al leer una sentencia, separa la ratio decidendi (vinculante) del obiter dictum.",
        "Principios como in dubio pro reo resuelven dudas interpretativas irreductibles."
      ],
      "correcta": 3,
      "explicacion": "Principios como in dubio pro reo resuelven dudas interpretativas irreductibles."
    }
  ],
  "procesal-avanzado": [
    {
      "pregunta": "Sobre \"Derecho procesal avanzado: recursos extraordinarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las medidas preventivas pueden imponerse de inmediato, antes de concluir el proceso sancionatorio completo.",
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados."
      ],
      "correcta": 3,
      "explicacion": "La casación corrige errores de derecho, no reevalúa los hechos probados."
    },
    {
      "pregunta": "Sobre \"Derecho procesal avanzado: recursos extraordinarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad.",
        "La decisión de no sancionar debe subir en consulta obligatoria al superior jerárquico del juez.",
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago.",
        "La revisión anula sentencias en firme solo en causales taxativas."
      ],
      "correcta": 3,
      "explicacion": "La revisión anula sentencias en firme solo en causales taxativas."
    },
    {
      "pregunta": "Sobre \"Derecho procesal avanzado: recursos extraordinarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La JEP tiene competencia preferente sobre hechos del conflicto armado anteriores a diciembre de 2016.",
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes."
      ],
      "correcta": 3,
      "explicacion": "La selección de tutelas por la Corte es discrecional, no un derecho de las partes."
    }
  ],
  "derecho-internacional-tratados": [
    {
      "pregunta": "Sobre \"Derecho internacional y tratados ratificados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los contratos inteligentes plantean preguntas jurídicas aún sin respuesta legislativa definitiva en Colombia.",
        "Las medidas preventivas pueden imponerse de inmediato, antes de concluir el proceso sancionatorio completo.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos.",
        "Los tratados pasan por control previo y automático de la Corte antes de ratificarse."
      ],
      "correcta": 3,
      "explicacion": "Los tratados pasan por control previo y automático de la Corte antes de ratificarse."
    },
    {
      "pregunta": "Sobre \"Derecho internacional y tratados ratificados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados.",
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes."
      ],
      "correcta": 3,
      "explicacion": "Las sentencias de la Corte IDH contra Colombia son vinculantes."
    },
    {
      "pregunta": "Sobre \"Derecho internacional y tratados ratificados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La cadena de custodia digital debe documentar cada momento de recolección, copia, análisis y transporte de la evidencia.",
        "El contrabando y el lavado mediante sobre/subfacturación de comercio exterior son focos activos de control.",
        "El modelo estadounidense es de control difuso; el europeo (Kelseniano), concentrado en un tribunal especializado.",
        "Los convenios de la OIT ratificados integran el bloque de constitucionalidad laboral."
      ],
      "correcta": 3,
      "explicacion": "Los convenios de la OIT ratificados integran el bloque de constitucionalidad laboral."
    }
  ],
  "actualidad-legislativa": [
    {
      "pregunta": "Sobre \"Reformas y actualidad legislativa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El know-how se protege por confidencialidad contractual, no por un registro público como la patente.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El Diario Oficial y la Gaceta del Congreso son fuentes primarias confiables."
      ],
      "correcta": 3,
      "explicacion": "El Diario Oficial y la Gaceta del Congreso son fuentes primarias confiables."
    },
    {
      "pregunta": "Sobre \"Reformas y actualidad legislativa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba).",
        "Siempre verifica si una norma sigue vigente o fue derogada/inexequible."
      ],
      "correcta": 3,
      "explicacion": "Siempre verifica si una norma sigue vigente o fue derogada/inexequible."
    },
    {
      "pregunta": "Sobre \"Reformas y actualidad legislativa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos."
      ],
      "correcta": 3,
      "explicacion": "SUIN-Juriscol mantiene actualizado el estado de los códigos."
    }
  ],
  "sentencias-hito": [
    {
      "pregunta": "Sobre \"Análisis de sentencias hito de la Corte Constitucional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El beneficio tributario preferencial depende de cumplir continuamente compromisos de inversión y empleo.",
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez.",
        "La T-025/2004 creó la figura del 'estado de cosas inconstitucional'."
      ],
      "correcta": 3,
      "explicacion": "La T-025/2004 creó la figura del 'estado de cosas inconstitucional'."
    },
    {
      "pregunta": "Sobre \"Análisis de sentencias hito de la Corte Constitucional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Todo juez debe verificar la compatibilidad con la Convención Americana, incluso de oficio.",
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad.",
        "Ambas figuras suelen combinarse sobre el mismo inmueble para proteger frente a riesgos distintos y complementarios.",
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24."
      ],
      "correcta": 3,
      "explicacion": "La C-055/2022 amplió la despenalización del aborto hasta la semana 24."
    },
    {
      "pregunta": "Sobre \"Análisis de sentencias hito de la Corte Constitucional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal.",
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos.",
        "Al leer una sentencia, separa la ratio decidendi (vinculante) del obiter dictum."
      ],
      "correcta": 3,
      "explicacion": "Al leer una sentencia, separa la ratio decidendi (vinculante) del obiter dictum."
    }
  ],
  "etica-profesional": [
    {
      "pregunta": "Sobre \"Ética profesional y responsabilidad del abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos.",
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El secreto profesional se mantiene incluso después de terminado el caso."
      ],
      "correcta": 3,
      "explicacion": "El secreto profesional se mantiene incluso después de terminado el caso."
    },
    {
      "pregunta": "Sobre \"Ética profesional y responsabilidad del abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Trato justo y equitativo y expropiación indirecta son los estándares de protección más invocados.",
        "La Corte Constitucional colombiana es heredera de una tradición principialista, no solo formalista.",
        "Los conflictos de interés deben evitarse o revelarse claramente."
      ],
      "correcta": 3,
      "explicacion": "Los conflictos de interés deben evitarse o revelarse claramente."
    },
    {
      "pregunta": "Sobre \"Ética profesional y responsabilidad del abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La T-025/2004 creó la figura del 'estado de cosas inconstitucional'.",
        "La SAS puede constituirse con un solo accionista y por documento privado, sin escritura pública en general.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Las faltas disciplinarias pueden llegar hasta la exclusión de la profesión."
      ],
      "correcta": 3,
      "explicacion": "Las faltas disciplinarias pueden llegar hasta la exclusión de la profesión."
    }
  ],
  "control-convencionalidad": [
    {
      "pregunta": "Sobre \"Control de convencionalidad y diálogo judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "Carteles, abuso de posición dominante e integraciones sin notificar son las conductas centrales.",
        "Todo juez debe verificar la compatibilidad con la Convención Americana, incluso de oficio."
      ],
      "correcta": 3,
      "explicacion": "Todo juez debe verificar la compatibilidad con la Convención Americana, incluso de oficio."
    },
    {
      "pregunta": "Sobre \"Control de convencionalidad y diálogo judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Distingue justificación interna (lógica) de justificación externa (premisas bien fundadas).",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El régimen antidopaje es de responsabilidad objetiva: basta la presencia de la sustancia, sin necesidad de probar intención.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH."
      ],
      "correcta": 3,
      "explicacion": "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH."
    },
    {
      "pregunta": "Sobre \"Control de convencionalidad y diálogo judicial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Drag-along y tag-along son cláusulas estándar de acuerdos de accionistas que la SAS permite implementar con seguridad jurídica.",
        "La Superintendencia de Industria y Comercio es la única autoridad de competencia en Colombia.",
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad.",
        "El control de convencionalidad no reemplaza el control de constitucionalidad interno."
      ],
      "correcta": 3,
      "explicacion": "El control de convencionalidad no reemplaza el control de constitucionalidad interno."
    }
  ],
  "arbitraje-masc": [
    {
      "pregunta": "Sobre \"Arbitraje y mecanismos alternativos de solución de conflictos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata.",
        "La competencia desleal protege la lealtad entre competidores; el antitrust protege la estructura del mercado.",
        "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE.",
        "El artículo 116 de la Constitución habilita a los árbitros a administrar justicia transitoriamente."
      ],
      "correcta": 3,
      "explicacion": "El artículo 116 de la Constitución habilita a los árbitros a administrar justicia transitoriamente."
    },
    {
      "pregunta": "Sobre \"Arbitraje y mecanismos alternativos de solución de conflictos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc.",
        "La responsabilidad fiscal ante la Contraloría busca resarcir el daño patrimonial causado al Estado.",
        "El arbitraje exige un pacto arbitral, previo o posterior al conflicto."
      ],
      "correcta": 3,
      "explicacion": "El arbitraje exige un pacto arbitral, previo o posterior al conflicto."
    },
    {
      "pregunta": "Sobre \"Arbitraje y mecanismos alternativos de solución de conflictos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión."
      ],
      "correcta": 3,
      "explicacion": "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión."
    }
  ],
  "derecho-probatorio-avanzado": [
    {
      "pregunta": "Sobre \"Derecho probatorio avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En materia ambiental se presume la culpa del infractor, quien debe probar su diligencia para exonerarse.",
        "La T-025/2004 creó la figura del 'estado de cosas inconstitucional'.",
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba)."
      ],
      "correcta": 3,
      "explicacion": "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba)."
    },
    {
      "pregunta": "Sobre \"Derecho probatorio avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La historia clínica es la prueba central: su calidad favorece o perjudica al profesional en un eventual litigio.",
        "La revisión anula sentencias en firme solo en causales taxativas.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La carga dinámica traslada la prueba a quien está en mejor posición de aportarla."
      ],
      "correcta": 3,
      "explicacion": "La carga dinámica traslada la prueba a quien está en mejor posición de aportarla."
    },
    {
      "pregunta": "Sobre \"Derecho probatorio avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de plena competencia exige pactar entre vinculados como si fueran partes independientes.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "En supuestos calificados como graves, es el administrador quien debe probar que actuó diligentemente, no al revés.",
        "La sana crítica exige motivar la decisión con lógica, ciencia y experiencia, no arbitrariedad."
      ],
      "correcta": 3,
      "explicacion": "La sana crítica exige motivar la decisión con lógica, ciencia y experiencia, no arbitrariedad."
    }
  ],
  "responsabilidad-estado": [
    {
      "pregunta": "Sobre \"Responsabilidad extracontractual del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "Los contratos inteligentes plantean preguntas jurídicas aún sin respuesta legislativa definitiva en Colombia.",
        "El POT define qué se puede construir en cada zona; construir sin licencia o excediéndola es sancionable.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades."
      ],
      "correcta": 3,
      "explicacion": "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades."
    },
    {
      "pregunta": "Sobre \"Responsabilidad extracontractual del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El Consejo de Estado resuelve nulidades electorales y declara la pérdida de investidura de congresistas.",
        "El orden de prelación entre varias hipotecas sobre el mismo inmueble lo determina el orden de inscripción registral.",
        "Retirar aportes voluntarios antes de tiempo hace perder el beneficio tributario y genera el pago diferido del impuesto.",
        "Existen varios títulos de imputación: falla del servicio, riesgo excepcional y daño especial."
      ],
      "correcta": 3,
      "explicacion": "Existen varios títulos de imputación: falla del servicio, riesgo excepcional y daño especial."
    },
    {
      "pregunta": "Sobre \"Responsabilidad extracontractual del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El gobierno corporativo regula cómo se dirige y controla una empresa.",
        "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos.",
        "El litigio estratégico busca cambio estructural, no solo ganar el caso individual.",
        "La acción de repetición permite al Estado recuperar lo pagado del agente responsable."
      ],
      "correcta": 3,
      "explicacion": "La acción de repetición permite al Estado recuperar lo pagado del agente responsable."
    }
  ],
  "gobierno-corporativo-compliance": [
    {
      "pregunta": "Sobre \"Gobierno corporativo y compliance\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los conflictos de interés deben evitarse o revelarse claramente.",
        "La responsabilidad penal, administrativa y civil ambiental pueden coexistir frente al mismo hecho dañoso.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El gobierno corporativo regula cómo se dirige y controla una empresa."
      ],
      "correcta": 3,
      "explicacion": "El gobierno corporativo regula cómo se dirige y controla una empresa."
    },
    {
      "pregunta": "Sobre \"Gobierno corporativo y compliance\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El POT define qué se puede construir en cada zona; construir sin licencia o excediéndola es sancionable.",
        "La responsabilidad médica es, como regla general, de medios (diligencia), no de resultado (curar).",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia."
      ],
      "correcta": 3,
      "explicacion": "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia."
    },
    {
      "pregunta": "Sobre \"Gobierno corporativo y compliance\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa.",
        "Existen APP de iniciativa pública (licitadas por el Estado) y de iniciativa privada (propuestas por un privado).",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Un programa de cumplimiento real puede atenuar responsabilidad, uno solo formal no."
      ],
      "correcta": 3,
      "explicacion": "Un programa de cumplimiento real puede atenuar responsabilidad, uno solo formal no."
    }
  ],
  "argumentacion-juridica": [
    {
      "pregunta": "Sobre \"Argumentación jurídica y redacción de escritos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El litigio estratégico busca cambio estructural, no solo ganar el caso individual.",
        "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos.",
        "La claridad para el lector es tan importante como la corrección jurídica."
      ],
      "correcta": 3,
      "explicacion": "La claridad para el lector es tan importante como la corrección jurídica."
    },
    {
      "pregunta": "Sobre \"Argumentación jurídica y redacción de escritos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las capitulaciones matrimoniales deben pactarse antes de casarse, mediante escritura pública.",
        "El control previo busca evitar el daño a la competencia antes de que la fusión se materialice.",
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales.",
        "Distingue justificación interna (lógica) de justificación externa (premisas bien fundadas)."
      ],
      "correcta": 3,
      "explicacion": "Distingue justificación interna (lógica) de justificación externa (premisas bien fundadas)."
    },
    {
      "pregunta": "Sobre \"Argumentación jurídica y redacción de escritos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Verifica siempre que la jurisprudencia citada siga vigente y aplique a los hechos del caso."
      ],
      "correcta": 3,
      "explicacion": "Verifica siempre que la jurisprudencia citada siga vigente y aplique a los hechos del caso."
    }
  ],
  "teoria-filosofia-derecho": [
    {
      "pregunta": "Sobre \"Teoría y filosofía del derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "La Registraduría organiza las elecciones; el Consejo Nacional Electoral regula y vigila la financiación.",
        "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos.",
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral."
      ],
      "correcta": 3,
      "explicacion": "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral."
    },
    {
      "pregunta": "Sobre \"Teoría y filosofía del derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "Las cláusulas contractuales tipo son el mecanismo más usado para habilitar transferencias internacionales.",
        "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original.",
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial."
      ],
      "correcta": 3,
      "explicacion": "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial."
    },
    {
      "pregunta": "Sobre \"Teoría y filosofía del derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "La publicidad comparativa es lícita si es objetiva, verificable y no genera confusión ni desacredita injustificadamente.",
        "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados.",
        "La Corte Constitucional colombiana es heredera de una tradición principialista, no solo formalista."
      ],
      "correcta": 3,
      "explicacion": "La Corte Constitucional colombiana es heredera de una tradición principialista, no solo formalista."
    }
  ],
  "historia-derecho-colombiano": [
    {
      "pregunta": "Sobre \"Historia del derecho colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Carteles, abuso de posición dominante e integraciones sin notificar son las conductas centrales.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX)."
      ],
      "correcta": 3,
      "explicacion": "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX)."
    },
    {
      "pregunta": "Sobre \"Historia del derecho colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida.",
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada."
      ],
      "correcta": 3,
      "explicacion": "La Constitución de 1886 rigió 105 años antes de ser reemplazada."
    },
    {
      "pregunta": "Sobre \"Historia del derecho colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "La plusvalía urbana cobra al propietario parte del mayor valor generado por una decisión de planificación pública.",
        "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional.",
        "La Constituyente de 1991 nació de una crisis de legitimidad y un movimiento estudiantil."
      ],
      "correcta": 3,
      "explicacion": "La Constituyente de 1991 nació de una crisis de legitimidad y un movimiento estudiantil."
    }
  ],
  "procesal-penal-avanzado": [
    {
      "pregunta": "Sobre \"Derecho Procesal Penal avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "El juez de control de garantías y el juez de conocimiento cumplen roles distintos y separados."
      ],
      "correcta": 3,
      "explicacion": "El juez de control de garantías y el juez de conocimiento cumplen roles distintos y separados."
    },
    {
      "pregunta": "Sobre \"Derecho Procesal Penal avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La historia clínica es la prueba central: su calidad favorece o perjudica al profesional en un eventual litigio.",
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal.",
        "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos."
      ],
      "correcta": 3,
      "explicacion": "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos."
    },
    {
      "pregunta": "Sobre \"Derecho Procesal Penal avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La reciprocidad diplomática o legislativa con el país de origen es uno de los requisitos centrales.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El 'nuevo constitucionalismo latinoamericano' se caracteriza por derechos sociales exigibles y activismo judicial.",
        "La detención preventiva exige fines constitucionales específicos, no es una pena anticipada."
      ],
      "correcta": 3,
      "explicacion": "La detención preventiva exige fines constitucionales específicos, no es una pena anticipada."
    }
  ],
  "camino-para-ejercer": [
    {
      "pregunta": "Sobre \"El camino real para ejercer como abogado en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción de grupo busca indemnización individual; la acción popular protege el derecho colectivo en sí.",
        "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal.",
        "El orden de prelación entre varias hipotecas sobre el mismo inmueble lo determina el orden de inscripción registral.",
        "Ejercer legalmente exige título universitario en Derecho + tarjeta profesional del Consejo Superior de la Judicatura."
      ],
      "correcta": 3,
      "explicacion": "Ejercer legalmente exige título universitario en Derecho + tarjeta profesional del Consejo Superior de la Judicatura."
    },
    {
      "pregunta": "Sobre \"El camino real para ejercer como abogado en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial.",
        "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal."
      ],
      "correcta": 3,
      "explicacion": "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal."
    },
    {
      "pregunta": "Sobre \"El camino real para ejercer como abogado en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "La regulación macroprudencial mira el sistema completo, no solo la solidez de cada entidad individual.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online."
      ],
      "correcta": 3,
      "explicacion": "El siguiente paso real es un programa de Derecho acreditado, no un curso online."
    }
  ],
  "control-constitucionalidad-tipos": [
    {
      "pregunta": "Sobre \"Tipos de control de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un hallazgo arqueológico obliga a suspender la obra y reportarlo al ICANH, sin generar propiedad para el dueño del predio.",
        "La prescripción puede interrumpirse o suspenderse; la caducidad corre de forma objetiva e inexorable.",
        "Puede sancionar con arresto hasta seis meses y multa al funcionario responsable específico del incumplimiento.",
        "La acción pública de inconstitucionalidad la puede presentar cualquier ciudadano, sin abogado."
      ],
      "correcta": 3,
      "explicacion": "La acción pública de inconstitucionalidad la puede presentar cualquier ciudadano, sin abogado."
    },
    {
      "pregunta": "Sobre \"Tipos de control de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 116 de la Constitución habilita a los árbitros a administrar justicia transitoriamente.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión.",
        "La excepción de inconstitucionalidad permite a cualquier juez inaplicar una norma en un caso concreto."
      ],
      "correcta": 3,
      "explicacion": "La excepción de inconstitucionalidad permite a cualquier juez inaplicar una norma en un caso concreto."
    },
    {
      "pregunta": "Sobre \"Tipos de control de constitucionalidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El bitcoin y activos similares no son moneda de curso legal en Colombia, pero tampoco están prohibidos.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Dentro de una zona franca, las mercancías del exterior no causan arancel ni IVA hasta su nacionalización.",
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad."
      ],
      "correcta": 3,
      "explicacion": "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad."
    }
  ],
  "insolvencia-empresarial-avanzada": [
    {
      "pregunta": "Sobre \"Derecho concursal: insolvencia y reorganización empresarial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "FOGAFIN protege depósitos y puede intervenir entidades financieras en dificultades.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado.",
        "La Ley 1116 distingue reorganización (rescatar la empresa) de liquidación judicial (cerrarla ordenadamente)."
      ],
      "correcta": 3,
      "explicacion": "La Ley 1116 distingue reorganización (rescatar la empresa) de liquidación judicial (cerrarla ordenadamente)."
    },
    {
      "pregunta": "Sobre \"Derecho concursal: insolvencia y reorganización empresarial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte Suprema emite concepto sobre requisitos legales; el Gobierno Nacional decide finalmente si concede la extradición.",
        "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez.",
        "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos.",
        "La moratoria suspende embargos y cobros individuales durante la negociación del acuerdo."
      ],
      "correcta": 3,
      "explicacion": "La moratoria suspende embargos y cobros individuales durante la negociación del acuerdo."
    },
    {
      "pregunta": "Sobre \"Derecho concursal: insolvencia y reorganización empresarial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las faltas disciplinarias pueden llegar hasta la exclusión de la profesión.",
        "Los tributos territoriales requieren ley previa que los autorice; los concejos y asambleas no pueden crearlos por su cuenta.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "Existen trámites simplificados de insolvencia pensados específicamente para MIPYMES."
      ],
      "correcta": 3,
      "explicacion": "Existen trámites simplificados de insolvencia pensados específicamente para MIPYMES."
    }
  ],
  "litigio-estrategico": [
    {
      "pregunta": "Sobre \"Litigio estratégico y de impacto estructural\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La prescripción puede interrumpirse o suspenderse; la caducidad corre de forma objetiva e inexorable.",
        "Delitos de lesa humanidad y graves violaciones a DD.HH. nunca pueden juzgarse en la justicia penal militar.",
        "La declaratoria de patrimonio cultural restringe la propiedad sin indemnización automática, por función social del dominio.",
        "El litigio estratégico busca cambio estructural, no solo ganar el caso individual."
      ],
      "correcta": 3,
      "explicacion": "El litigio estratégico busca cambio estructural, no solo ganar el caso individual."
    },
    {
      "pregunta": "Sobre \"Litigio estratégico y de impacto estructural\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE.",
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación.",
        "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles.",
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación."
      ],
      "correcta": 3,
      "explicacion": "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación."
    },
    {
      "pregunta": "Sobre \"Litigio estratégico y de impacto estructural\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público.",
        "Al leer una sentencia, separa la ratio decidendi (vinculante) del obiter dictum.",
        "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional.",
        "El seguimiento post-fallo es tan importante como la sentencia misma en estos casos."
      ],
      "correcta": 3,
      "explicacion": "El seguimiento post-fallo es tan importante como la sentencia misma en estos casos."
    }
  ],
  "derecho-competencia": [
    {
      "pregunta": "Sobre \"Derecho de la competencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El predial grava la propiedad de inmuebles según avalúo catastral; el ICA grava actividades económicas por ingresos brutos.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial.",
        "La Superintendencia de Industria y Comercio es la única autoridad de competencia en Colombia."
      ],
      "correcta": 3,
      "explicacion": "La Superintendencia de Industria y Comercio es la única autoridad de competencia en Colombia."
    },
    {
      "pregunta": "Sobre \"Derecho de la competencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las normas urbanísticas pueden cambiar hacia el futuro sin generar automáticamente derecho a indemnización.",
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "Carteles, abuso de posición dominante e integraciones sin notificar son las conductas centrales."
      ],
      "correcta": 3,
      "explicacion": "Carteles, abuso de posición dominante e integraciones sin notificar son las conductas centrales."
    },
    {
      "pregunta": "Sobre \"Derecho de la competencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El programa de delación premia a quien primero confiesa y aporta pruebas de un cartel."
      ],
      "correcta": 3,
      "explicacion": "El programa de delación premia a quien primero confiesa y aporta pruebas de un cartel."
    }
  ],
  "ciberseguridad-derecho-penal-informatico": [
    {
      "pregunta": "Sobre \"Ciberseguridad y derecho penal informático\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "La Ley 1273 de 2009 tipificó los principales delitos informáticos en Colombia."
      ],
      "correcta": 3,
      "explicacion": "La Ley 1273 de 2009 tipificó los principales delitos informáticos en Colombia."
    },
    {
      "pregunta": "Sobre \"Ciberseguridad y derecho penal informático\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La situación de control se presume, entre otros casos, cuando la matriz posee más del 50% del capital.",
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24.",
        "La prueba digital (logs, IP, metadatos) es determinante y debe preservarse rápido."
      ],
      "correcta": 3,
      "explicacion": "La prueba digital (logs, IP, metadatos) es determinante y debe preservarse rápido."
    },
    {
      "pregunta": "Sobre \"Ciberseguridad y derecho penal informático\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La transformación cambia el tipo societario sin disolver la sociedad ni afectar sus contratos, activos o antigüedad.",
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado.",
        "Las empresas también enfrentan responsabilidad administrativa por fallas de seguridad de datos."
      ],
      "correcta": 3,
      "explicacion": "Las empresas también enfrentan responsabilidad administrativa por fallas de seguridad de datos."
    }
  ],
  "redaccion-contratos-clausulas-criticas": [
    {
      "pregunta": "Sobre \"Redacción de contratos: cláusulas críticas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 116 de la Constitución habilita a los árbitros a administrar justicia transitoriamente.",
        "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "La cláusula penal evita tener que probar el monto exacto del perjuicio ante un incumplimiento."
      ],
      "correcta": 3,
      "explicacion": "La cláusula penal evita tener que probar el monto exacto del perjuicio ante un incumplimiento."
    },
    {
      "pregunta": "Sobre \"Redacción de contratos: cláusulas críticas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc.",
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24.",
        "Colombia no tiene responsabilidad penal general de personas jurídicas, sino regímenes fragmentados y sectoriales.",
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa."
      ],
      "correcta": 3,
      "explicacion": "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa."
    },
    {
      "pregunta": "Sobre \"Redacción de contratos: cláusulas críticas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "La doble incriminación y la exclusión de delitos políticos son requisitos centrales del análisis de extradición.",
        "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX).",
        "Copiar cláusulas de otros contratos sin adaptarlas genera ambigüedades costosas después."
      ],
      "correcta": 3,
      "explicacion": "Copiar cláusulas de otros contratos sin adaptarlas genera ambigüedades costosas después."
    }
  ],
  "tributario-internacional-precios-transferencia": [
    {
      "pregunta": "Sobre \"Derecho Tributario Internacional y precios de transferencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La doble incriminación y la exclusión de delitos políticos son requisitos centrales del análisis de extradición.",
        "El SIVJRNR combina verdad, búsqueda de desaparecidos y justicia (JEP) como componentes coordinados.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos."
      ],
      "correcta": 3,
      "explicacion": "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos."
    },
    {
      "pregunta": "Sobre \"Derecho Tributario Internacional y precios de transferencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "El modelo estadounidense es de control difuso; el europeo (Kelseniano), concentrado en un tribunal especializado.",
        "La Ley 1778 de 2016 sanciona a empresas por soborno transnacional, sin depender de una condena penal individual previa.",
        "El principio de plena competencia exige pactar entre vinculados como si fueran partes independientes."
      ],
      "correcta": 3,
      "explicacion": "El principio de plena competencia exige pactar entre vinculados como si fueran partes independientes."
    },
    {
      "pregunta": "Sobre \"Derecho Tributario Internacional y precios de transferencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Es una garantía que el derecho internacional considera no suspendible ni en estados de excepción.",
        "La competencia desleal protege la lealtad entre competidores; el antitrust protege la estructura del mercado.",
        "La SAS permite diseñar libremente su estructura de gobierno, con pocas normas imperativas frente a otros tipos societarios.",
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida."
      ],
      "correcta": 3,
      "explicacion": "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida."
    }
  ],
  "fusiones-adquisiciones-ma": [
    {
      "pregunta": "Sobre \"Fusiones y adquisiciones (M&A): due diligence y estructuración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición.",
        "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "La compra de acciones hereda todos los pasivos de la empresa; la compra de activos, solo los asumidos."
      ],
      "correcta": 3,
      "explicacion": "La compra de acciones hereda todos los pasivos de la empresa; la compra de activos, solo los asumidos."
    },
    {
      "pregunta": "Sobre \"Fusiones y adquisiciones (M&A): due diligence y estructuración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El 'nuevo constitucionalismo latinoamericano' se caracteriza por derechos sociales exigibles y activismo judicial.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "Un hallazgo arqueológico obliga a suspender la obra y reportarlo al ICANH, sin generar propiedad para el dueño del predio.",
        "La due diligence busca descubrir contingencias antes de cerrar o de fijar el precio final."
      ],
      "correcta": 3,
      "explicacion": "La due diligence busca descubrir contingencias antes de cerrar o de fijar el precio final."
    },
    {
      "pregunta": "Sobre \"Fusiones y adquisiciones (M&A): due diligence y estructuración\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "La responsabilidad médica es, como regla general, de medios (diligencia), no de resultado (curar).",
        "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre."
      ],
      "correcta": 3,
      "explicacion": "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre."
    }
  ],
  "constitucionalismo-comparado": [
    {
      "pregunta": "Sobre \"Constitucionalismo comparado: modelos de control\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de kompetenz-kompetenz permite al tribunal decidir primero sobre su propia competencia.",
        "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "El modelo estadounidense es de control difuso; el europeo (Kelseniano), concentrado en un tribunal especializado."
      ],
      "correcta": 3,
      "explicacion": "El modelo estadounidense es de control difuso; el europeo (Kelseniano), concentrado en un tribunal especializado."
    },
    {
      "pregunta": "Sobre \"Constitucionalismo comparado: modelos de control\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez.",
        "La Constituyente de 1991 nació de una crisis de legitimidad y un movimiento estudiantil.",
        "Colombia combina ambos: control concentrado (Corte Constitucional) y control difuso (excepción de inconstitucionalidad)."
      ],
      "correcta": 3,
      "explicacion": "Colombia combina ambos: control concentrado (Corte Constitucional) y control difuso (excepción de inconstitucionalidad)."
    },
    {
      "pregunta": "Sobre \"Constitucionalismo comparado: modelos de control\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "El 'nuevo constitucionalismo latinoamericano' se caracteriza por derechos sociales exigibles y activismo judicial."
      ],
      "correcta": 3,
      "explicacion": "El 'nuevo constitucionalismo latinoamericano' se caracteriza por derechos sociales exigibles y activismo judicial."
    }
  ],
  "derecho-penal-economico-extincion-dominio": [
    {
      "pregunta": "Sobre \"Derecho Penal Económico y extinción de dominio\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El agua es un bien de uso público; se adquiere el derecho a usarla mediante concesión, no su propiedad.",
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez.",
        "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa."
      ],
      "correcta": 3,
      "explicacion": "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa."
    },
    {
      "pregunta": "Sobre \"Derecho Penal Económico y extinción de dominio\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las cláusulas contractuales tipo son el mecanismo más usado para habilitar transferencias internacionales.",
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación.",
        "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado.",
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente."
      ],
      "correcta": 3,
      "explicacion": "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente."
    },
    {
      "pregunta": "Sobre \"Derecho Penal Económico y extinción de dominio\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia no tiene ley integral de responsabilidad de plataformas; se aplican principios generales de responsabilidad civil.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "El bitcoin y activos similares no son moneda de curso legal en Colombia, pero tampoco están prohibidos.",
        "Ciertos profesionales tienen obligación de reportar operaciones sospechosas ante la UIAF."
      ],
      "correcta": 3,
      "explicacion": "Ciertos profesionales tienen obligación de reportar operaciones sospechosas ante la UIAF."
    }
  ],
  "justicia-transicional-jep-profundidad": [
    {
      "pregunta": "Sobre \"Justicia transicional y la JEP en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Puede sancionar con arresto hasta seis meses y multa al funcionario responsable específico del incumplimiento.",
        "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "El SIVJRNR combina verdad, búsqueda de desaparecidos y justicia (JEP) como componentes coordinados."
      ],
      "correcta": 3,
      "explicacion": "El SIVJRNR combina verdad, búsqueda de desaparecidos y justicia (JEP) como componentes coordinados."
    },
    {
      "pregunta": "Sobre \"Justicia transicional y la JEP en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria."
      ],
      "correcta": 3,
      "explicacion": "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria."
    },
    {
      "pregunta": "Sobre \"Justicia transicional y la JEP en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Existen APP de iniciativa pública (licitadas por el Estado) y de iniciativa privada (propuestas por un privado).",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "La JEP tiene competencia preferente sobre hechos del conflicto armado anteriores a diciembre de 2016."
      ],
      "correcta": 3,
      "explicacion": "La JEP tiene competencia preferente sobre hechos del conflicto armado anteriores a diciembre de 2016."
    }
  ],
  "derecho-energia-minas": [
    {
      "pregunta": "Sobre \"Derecho de la Energía y Minas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia tiene un desarrollo jurisprudencial extenso en la aplicación del DIH a conflictos armados no internacionales.",
        "Copiar cláusulas de otros contratos sin adaptarlas genera ambigüedades costosas después.",
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "El subsuelo es del Estado: explotar minerales o hidrocarburos exige un título minero o contrato específico."
      ],
      "correcta": 3,
      "explicacion": "El subsuelo es del Estado: explotar minerales o hidrocarburos exige un título minero o contrato específico."
    },
    {
      "pregunta": "Sobre \"Derecho de la Energía y Minas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Distinción, proporcionalidad y precaución son los principios centrales del DIH aplicado al conflicto armado.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "La veeduría ciudadana no requiere personería jurídica previa: basta el registro ante Personería o Cámara de Comercio.",
        "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos."
      ],
      "correcta": 3,
      "explicacion": "Las regalías son la contraprestación por explotar un recurso no renovable, distinta de los impuestos."
    },
    {
      "pregunta": "Sobre \"Derecho de la Energía y Minas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "La cláusula penal evita tener que probar el monto exacto del perjuicio ante un incumplimiento.",
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos."
      ],
      "correcta": 3,
      "explicacion": "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos."
    }
  ],
  "regimen-aduanero-comercio-exterior": [
    {
      "pregunta": "Sobre \"Régimen aduanero y comercio exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El modelo estadounidense es de control difuso; el europeo (Kelseniano), concentrado en un tribunal especializado.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La clasificación arancelaria correcta determina el arancel, los permisos previos y los tratados aplicables."
      ],
      "correcta": 3,
      "explicacion": "La clasificación arancelaria correcta determina el arancel, los permisos previos y los tratados aplicables."
    },
    {
      "pregunta": "Sobre \"Régimen aduanero y comercio exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "La moratoria suspende embargos y cobros individuales durante la negociación del acuerdo.",
        "El Estado garantiza espacios gratuitos de propaganda electoral en medios que usan el espectro electromagnético.",
        "Un tratado de libre comercio exige acreditar reglas de origen, no basta con el simple envío del producto."
      ],
      "correcta": 3,
      "explicacion": "Un tratado de libre comercio exige acreditar reglas de origen, no basta con el simple envío del producto."
    },
    {
      "pregunta": "Sobre \"Régimen aduanero y comercio exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente.",
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El contrabando y el lavado mediante sobre/subfacturación de comercio exterior son focos activos de control."
      ],
      "correcta": 3,
      "explicacion": "El contrabando y el lavado mediante sobre/subfacturación de comercio exterior son focos activos de control."
    }
  ],
  "arbitraje-inversion-ciadi": [
    {
      "pregunta": "Sobre \"Arbitraje internacional de inversión (CIADI)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Existen varios títulos de imputación: falla del servicio, riesgo excepcional y daño especial.",
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso."
      ],
      "correcta": 3,
      "explicacion": "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso."
    },
    {
      "pregunta": "Sobre \"Arbitraje internacional de inversión (CIADI)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La excepción de inconstitucionalidad permite a cualquier juez inaplicar una norma en un caso concreto.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "En una CTA, el asociado es simultáneamente trabajador y copropietario, sin contrato de trabajo tradicional.",
        "Trato justo y equitativo y expropiación indirecta son los estándares de protección más invocados."
      ],
      "correcta": 3,
      "explicacion": "Trato justo y equitativo y expropiación indirecta son los estándares de protección más invocados."
    },
    {
      "pregunta": "Sobre \"Arbitraje internacional de inversión (CIADI)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia.",
        "Un marketplace con rol activo (inventario, pago, logística) tiende a asumir mayor responsabilidad que uno meramente pasivo.",
        "Las faltas disciplinarias pueden llegar hasta la exclusión de la profesión.",
        "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional."
      ],
      "correcta": 3,
      "explicacion": "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional."
    }
  ],
  "derecho-maritimo-portuario": [
    {
      "pregunta": "Sobre \"Derecho Marítimo y Portuario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El bitcoin y activos similares no son moneda de curso legal en Colombia, pero tampoco están prohibidos.",
        "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios.",
        "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez."
      ],
      "correcta": 3,
      "explicacion": "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez."
    },
    {
      "pregunta": "Sobre \"Derecho Marítimo y Portuario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El mercado relevante (producto y geográfico) es la base técnica de todo el análisis de la autoridad.",
        "Ejercer legalmente exige título universitario en Derecho + tarjeta profesional del Consejo Superior de la Judicatura.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada."
      ],
      "correcta": 3,
      "explicacion": "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada."
    },
    {
      "pregunta": "Sobre \"Derecho Marítimo y Portuario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado.",
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La avería gruesa reparte proporcionalmente entre todos los interesados el sacrificio hecho para salvar el viaje."
      ],
      "correcta": 3,
      "explicacion": "La avería gruesa reparte proporcionalmente entre todos los interesados el sacrificio hecho para salvar el viaje."
    }
  ],
  "regulacion-financiera-riesgo-sistemico": [
    {
      "pregunta": "Sobre \"Regulación financiera y riesgo sistémico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "El riesgo sistémico —el contagio entre entidades interconectadas— justifica la regulación financiera reforzada."
      ],
      "correcta": 3,
      "explicacion": "El riesgo sistémico —el contagio entre entidades interconectadas— justifica la regulación financiera reforzada."
    },
    {
      "pregunta": "Sobre \"Regulación financiera y riesgo sistémico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "FOGAFIN protege depósitos y puede intervenir entidades financieras en dificultades."
      ],
      "correcta": 3,
      "explicacion": "FOGAFIN protege depósitos y puede intervenir entidades financieras en dificultades."
    },
    {
      "pregunta": "Sobre \"Regulación financiera y riesgo sistémico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El know-how se protege por confidencialidad contractual, no por un registro público como la patente.",
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo.",
        "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular.",
        "La regulación macroprudencial mira el sistema completo, no solo la solidez de cada entidad individual."
      ],
      "correcta": 3,
      "explicacion": "La regulación macroprudencial mira el sistema completo, no solo la solidez de cada entidad individual."
    }
  ],
  "transferencias-internacionales-datos": [
    {
      "pregunta": "Sobre \"Transferencias internacionales de datos personales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular."
      ],
      "correcta": 3,
      "explicacion": "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular."
    },
    {
      "pregunta": "Sobre \"Transferencias internacionales de datos personales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles.",
        "La prescripción debe alegarse por la parte interesada; la caducidad el juez debe verificarla de oficio.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE."
      ],
      "correcta": 3,
      "explicacion": "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE."
    },
    {
      "pregunta": "Sobre \"Transferencias internacionales de datos personales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Retirar aportes voluntarios antes de tiempo hace perder el beneficio tributario y genera el pago diferido del impuesto.",
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "Las cláusulas contractuales tipo son el mecanismo más usado para habilitar transferencias internacionales."
      ],
      "correcta": 3,
      "explicacion": "Las cláusulas contractuales tipo son el mecanismo más usado para habilitar transferencias internacionales."
    }
  ],
  "insolvencia-transfronteriza-ley-modelo": [
    {
      "pregunta": "Sobre \"Insolvencia transfronteriza\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado.",
        "El régimen de inhabilidades se interpreta restrictivamente por limitar el derecho fundamental a ser elegido.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "El procedimiento principal se tramita donde el deudor tiene su centro de intereses principales."
      ],
      "correcta": 3,
      "explicacion": "El procedimiento principal se tramita donde el deudor tiene su centro de intereses principales."
    },
    {
      "pregunta": "Sobre \"Insolvencia transfronteriza\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La detención preventiva exige fines constitucionales específicos, no es una pena anticipada.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales."
      ],
      "correcta": 3,
      "explicacion": "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales."
    },
    {
      "pregunta": "Sobre \"Insolvencia transfronteriza\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia ha ajustado el régimen para no depender exclusivamente de la obligación de exportar, por presión de la OMC.",
        "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato.",
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso."
      ],
      "correcta": 3,
      "explicacion": "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso."
    }
  ],
  "criptoactivos-blockchain-regulacion": [
    {
      "pregunta": "Sobre \"Blockchain, criptoactivos y su regulación en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La excepción de inconstitucionalidad permite a cualquier juez inaplicar una norma en un caso concreto.",
        "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "El bitcoin y activos similares no son moneda de curso legal en Colombia, pero tampoco están prohibidos."
      ],
      "correcta": 3,
      "explicacion": "El bitcoin y activos similares no son moneda de curso legal en Colombia, pero tampoco están prohibidos."
    },
    {
      "pregunta": "Sobre \"Blockchain, criptoactivos y su regulación en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "Los CDI y el descuento tributario evitan que el mismo ingreso se grave dos veces en países distintos.",
        "Vender criptoactivos genera obligaciones tributarias claras, sin importar el relativo anonimato de la blockchain."
      ],
      "correcta": 3,
      "explicacion": "Vender criptoactivos genera obligaciones tributarias claras, sin importar el relativo anonimato de la blockchain."
    },
    {
      "pregunta": "Sobre \"Blockchain, criptoactivos y su regulación en Colombia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La prescripción debe alegarse por la parte interesada; la caducidad el juez debe verificarla de oficio.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "Los contratos inteligentes plantean preguntas jurídicas aún sin respuesta legislativa definitiva en Colombia."
      ],
      "correcta": 3,
      "explicacion": "Los contratos inteligentes plantean preguntas jurídicas aún sin respuesta legislativa definitiva en Colombia."
    }
  ],
  "control-concentraciones-empresariales": [
    {
      "pregunta": "Sobre \"Control de concentraciones empresariales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La situación de control se presume, entre otros casos, cuando la matriz posee más del 50% del capital.",
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "Los datos abiertos deben publicarse en formatos reutilizables, no solo como documentos escaneados.",
        "El control previo busca evitar el daño a la competencia antes de que la fusión se materialice."
      ],
      "correcta": 3,
      "explicacion": "El control previo busca evitar el daño a la competencia antes de que la fusión se materialice."
    },
    {
      "pregunta": "Sobre \"Control de concentraciones empresariales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Vender criptoactivos genera obligaciones tributarias claras, sin importar el relativo anonimato de la blockchain.",
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El mercado relevante (producto y geográfico) es la base técnica de todo el análisis de la autoridad."
      ],
      "correcta": 3,
      "explicacion": "El mercado relevante (producto y geográfico) es la base técnica de todo el análisis de la autoridad."
    },
    {
      "pregunta": "Sobre \"Control de concentraciones empresariales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados.",
        "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después."
      ],
      "correcta": 3,
      "explicacion": "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después."
    }
  ],
  "regimen-disciplinario-servidores-publicos": [
    {
      "pregunta": "Sobre \"Régimen disciplinario de servidores públicos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin apostilla aplicable, se requiere el proceso más largo de legalización diplomática o consular.",
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva.",
        "La acción de repetición permite al Estado recuperar lo pagado del agente responsable.",
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal."
      ],
      "correcta": 3,
      "explicacion": "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal."
    },
    {
      "pregunta": "Sobre \"Régimen disciplinario de servidores públicos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas.",
        "El control de convencionalidad no reemplaza el control de constitucionalidad interno.",
        "Un mismo hecho puede generar proceso disciplinario, fiscal y penal simultáneamente, sin doble juzgamiento."
      ],
      "correcta": 3,
      "explicacion": "Un mismo hecho puede generar proceso disciplinario, fiscal y penal simultáneamente, sin doble juzgamiento."
    },
    {
      "pregunta": "Sobre \"Régimen disciplinario de servidores públicos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Dentro de una zona franca, las mercancías del exterior no causan arancel ni IVA hasta su nacionalización.",
        "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado.",
        "La responsabilidad fiscal ante la Contraloría busca resarcir el daño patrimonial causado al Estado."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad fiscal ante la Contraloría busca resarcir el daño patrimonial causado al Estado."
    }
  ],
  "habeas-corpus-garantias-judiciales": [
    {
      "pregunta": "Sobre \"Habeas corpus y garantías judiciales fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El programa de delación premia a quien primero confiesa y aporta pruebas de un cartel.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El beneficio tributario preferencial depende de cumplir continuamente compromisos de inversión y empleo.",
        "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas."
      ],
      "correcta": 3,
      "explicacion": "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas."
    },
    {
      "pregunta": "Sobre \"Habeas corpus y garantías judiciales fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los actos registrables solo son oponibles a terceros desde su inscripción en el Registro Mercantil.",
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "No admite las restricciones de subsidiariedad que sí aplican, con matices, a la acción de tutela."
      ],
      "correcta": 3,
      "explicacion": "No admite las restricciones de subsidiariedad que sí aplican, con matices, a la acción de tutela."
    },
    {
      "pregunta": "Sobre \"Habeas corpus y garantías judiciales fundamentales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial.",
        "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después.",
        "Es una garantía que el derecho internacional considera no suspendible ni en estados de excepción."
      ],
      "correcta": 3,
      "explicacion": "Es una garantía que el derecho internacional considera no suspendible ni en estados de excepción."
    }
  ],
  "accion-cumplimiento-populares-profundidad": [
    {
      "pregunta": "Sobre \"Acción de cumplimiento y acciones populares en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia.",
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez."
      ],
      "correcta": 3,
      "explicacion": "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez."
    },
    {
      "pregunta": "Sobre \"Acción de cumplimiento y acciones populares en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "El certificado de existencia y representación es clave para verificar facultades antes de contratar.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "La acción popular protege derechos colectivos, no requiere el mismo estándar de urgencia que la tutela."
      ],
      "correcta": 3,
      "explicacion": "La acción popular protege derechos colectivos, no requiere el mismo estándar de urgencia que la tutela."
    },
    {
      "pregunta": "Sobre \"Acción de cumplimiento y acciones populares en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana.",
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria.",
        "Existen trámites simplificados de insolvencia pensados específicamente para MIPYMES.",
        "La acción de grupo busca indemnización individual; la acción popular protege el derecho colectivo en sí."
      ],
      "correcta": 3,
      "explicacion": "La acción de grupo busca indemnización individual; la acción popular protege el derecho colectivo en sí."
    }
  ],
  "derecho-electoral-colombiano": [
    {
      "pregunta": "Sobre \"Derecho Electoral colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La prueba digital (logs, IP, metadatos) es determinante y debe preservarse rápido.",
        "La consulta debe ser previa, libre, informada y de buena fe, aunque no equivale a un veto absoluto.",
        "Colombia ha ajustado el régimen para no depender exclusivamente de la obligación de exportar, por presión de la OMC.",
        "La Registraduría organiza las elecciones; el Consejo Nacional Electoral regula y vigila la financiación."
      ],
      "correcta": 3,
      "explicacion": "La Registraduría organiza las elecciones; el Consejo Nacional Electoral regula y vigila la financiación."
    },
    {
      "pregunta": "Sobre \"Derecho Electoral colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Permite invocar directamente instrumentos internacionales en un proceso interno.",
        "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez.",
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente.",
        "El Consejo de Estado resuelve nulidades electorales y declara la pérdida de investidura de congresistas."
      ],
      "correcta": 3,
      "explicacion": "El Consejo de Estado resuelve nulidades electorales y declara la pérdida de investidura de congresistas."
    },
    {
      "pregunta": "Sobre \"Derecho Electoral colombiano\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria.",
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "La confusión patrimonial entre el dueño y la empresa complica frecuentemente estos procesos en negocios poco formalizados.",
        "El régimen de inhabilidades se interpreta restrictivamente por limitar el derecho fundamental a ser elegido."
      ],
      "correcta": 3,
      "explicacion": "El régimen de inhabilidades se interpreta restrictivamente por limitar el derecho fundamental a ser elegido."
    }
  ],
  "exequatur-ejecucion-sentencias-extranjeras": [
    {
      "pregunta": "Sobre \"Exequátur: ejecución de sentencias y laudos extranjeros\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las licencias obligatorias permiten producir un genérico sin consentimiento del titular, en interés público, con compensación.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público."
      ],
      "correcta": 3,
      "explicacion": "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público."
    },
    {
      "pregunta": "Sobre \"Exequátur: ejecución de sentencias y laudos extranjeros\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Retirar aportes voluntarios antes de tiempo hace perder el beneficio tributario y genera el pago diferido del impuesto.",
        "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original.",
        "Todo juez debe verificar la compatibilidad con la Convención Americana, incluso de oficio.",
        "La reciprocidad diplomática o legislativa con el país de origen es uno de los requisitos centrales."
      ],
      "correcta": 3,
      "explicacion": "La reciprocidad diplomática o legislativa con el país de origen es uno de los requisitos centrales."
    },
    {
      "pregunta": "Sobre \"Exequátur: ejecución de sentencias y laudos extranjeros\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La indemnización sustitutiva devuelve lo aportado a quien no cumplió semanas mínimas y no quiere seguir cotizando.",
        "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario.",
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York."
      ],
      "correcta": 3,
      "explicacion": "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York."
    }
  ],
  "grupos-empresariales-situacion-control": [
    {
      "pregunta": "Sobre \"Grupos empresariales y situación de control societario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El subsuelo es del Estado: explotar minerales o hidrocarburos exige un título minero o contrato específico.",
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales.",
        "La situación de control se presume, entre otros casos, cuando la matriz posee más del 50% del capital."
      ],
      "correcta": 3,
      "explicacion": "La situación de control se presume, entre otros casos, cuando la matriz posee más del 50% del capital."
    },
    {
      "pregunta": "Sobre \"Grupos empresariales y situación de control societario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "Existen APP de iniciativa pública (licitadas por el Estado) y de iniciativa privada (propuestas por un privado).",
        "El artículo 116 de la Constitución habilita a los árbitros a administrar justicia transitoriamente.",
        "La responsabilidad de cada sociedad es en principio limitada, pero puede levantarse el velo si hubo abuso."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad de cada sociedad es en principio limitada, pero puede levantarse el velo si hubo abuso."
    },
    {
      "pregunta": "Sobre \"Grupos empresariales y situación de control societario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "Una imagen forense con hash criptográfico permite detectar cualquier alteración posterior de la evidencia digital.",
        "El beneficio tributario preferencial depende de cumplir continuamente compromisos de inversión y empleo.",
        "El reporte del beneficiario final busca transparentar quién controla realmente cada sociedad del grupo."
      ],
      "correcta": 3,
      "explicacion": "El reporte del beneficiario final busca transparentar quién controla realmente cada sociedad del grupo."
    }
  ],
  "consulta-previa-comunidades-etnicas": [
    {
      "pregunta": "Sobre \"Consulta previa a comunidades étnicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "La consulta debe ser previa, libre, informada y de buena fe, aunque no equivale a un veto absoluto."
      ],
      "correcta": 3,
      "explicacion": "La consulta debe ser previa, libre, informada y de buena fe, aunque no equivale a un veto absoluto."
    },
    {
      "pregunta": "Sobre \"Consulta previa a comunidades étnicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "La moratoria suspende embargos y cobros individuales durante la negociación del acuerdo.",
        "La regulación macroprudencial mira el sistema completo, no solo la solidez de cada entidad individual.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos."
      ],
      "correcta": 3,
      "explicacion": "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos."
    },
    {
      "pregunta": "Sobre \"Consulta previa a comunidades étnicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un extranjero con inmuebles en Colombia genera casi siempre un proceso sucesoral local adicional sobre esos bienes.",
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "El consentimiento informado es un requisito autónomo, cuya omisión genera responsabilidad aunque el procedimiento salga bien técnicamente.",
        "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación."
      ],
      "correcta": 3,
      "explicacion": "El consentimiento (más exigente que la consulta) se reserva para los casos de mayor impacto, como reubicación."
    }
  ],
  "regimen-sancionatorio-ambiental": [
    {
      "pregunta": "Sobre \"Régimen sancionatorio ambiental\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "La decisión de no sancionar debe subir en consulta obligatoria al superior jerárquico del juez.",
        "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato.",
        "En materia ambiental se presume la culpa del infractor, quien debe probar su diligencia para exonerarse."
      ],
      "correcta": 3,
      "explicacion": "En materia ambiental se presume la culpa del infractor, quien debe probar su diligencia para exonerarse."
    },
    {
      "pregunta": "Sobre \"Régimen sancionatorio ambiental\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX).",
        "Las medidas preventivas pueden imponerse de inmediato, antes de concluir el proceso sancionatorio completo."
      ],
      "correcta": 3,
      "explicacion": "Las medidas preventivas pueden imponerse de inmediato, antes de concluir el proceso sancionatorio completo."
    },
    {
      "pregunta": "Sobre \"Régimen sancionatorio ambiental\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "Existen procedimientos de insolvencia simplificados para MIPYMES, incluso ante las Cámaras de Comercio.",
        "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina."
    }
  ],
  "derecho-penal-militar-fuero": [
    {
      "pregunta": "Sobre \"Derecho Penal Militar y fuero militar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE.",
        "La Ley 1778 de 2016 sanciona a empresas por soborno transnacional, sin depender de una condena penal individual previa.",
        "El fuero militar exige un vínculo directo y próximo entre la conducta y una función militar o policial legítima."
      ],
      "correcta": 3,
      "explicacion": "El fuero militar exige un vínculo directo y próximo entre la conducta y una función militar o policial legítima."
    },
    {
      "pregunta": "Sobre \"Derecho Penal Militar y fuero militar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "Delitos de lesa humanidad y graves violaciones a DD.HH. nunca pueden juzgarse en la justicia penal militar."
      ],
      "correcta": 3,
      "explicacion": "Delitos de lesa humanidad y graves violaciones a DD.HH. nunca pueden juzgarse en la justicia penal militar."
    },
    {
      "pregunta": "Sobre \"Derecho Penal Militar y fuero militar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte Suprema emite concepto sobre requisitos legales; el Gobierno Nacional decide finalmente si concede la extradición.",
        "La interoperabilidad busca que el ciudadano no repita trámites de verificación de identidad en cada entidad.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado."
      ],
      "correcta": 3,
      "explicacion": "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado."
    }
  ],
  "veeduria-ciudadana-participacion": [
    {
      "pregunta": "Sobre \"Veeduría ciudadana y participación democrática\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La prescripción debe alegarse por la parte interesada; la caducidad el juez debe verificarla de oficio.",
        "El estándar del buen hombre de negocios es más exigente que el del buen padre de familia de otras relaciones civiles.",
        "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato.",
        "La veeduría ciudadana no requiere personería jurídica previa: basta el registro ante Personería o Cámara de Comercio."
      ],
      "correcta": 3,
      "explicacion": "La veeduría ciudadana no requiere personería jurídica previa: basta el registro ante Personería o Cámara de Comercio."
    },
    {
      "pregunta": "Sobre \"Veeduría ciudadana y participación democrática\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de retiro da una vía de salida con reembolso, no de bloqueo, ante decisiones estructurales de alto impacto.",
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria.",
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral.",
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva."
      ],
      "correcta": 3,
      "explicacion": "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva."
    },
    {
      "pregunta": "Sobre \"Veeduría ciudadana y participación democrática\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los laudos arbitrales internacionales tienen un régimen de reconocimiento más favorable, vía Convención de Nueva York.",
        "Colombia tiene un desarrollo jurisprudencial extenso en la aplicación del DIH a conflictos armados no internacionales.",
        "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados.",
        "Veedurías bien documentadas alimentan directamente investigaciones disciplinarias y fiscales formales."
      ],
      "correcta": 3,
      "explicacion": "Veedurías bien documentadas alimentan directamente investigaciones disciplinarias y fiscales formales."
    }
  ],
  "registral-mercantil-avanzado": [
    {
      "pregunta": "Sobre \"Derecho registral mercantil avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El control previo busca evitar el daño a la competencia antes de que la fusión se materialice.",
        "Los actos registrables solo son oponibles a terceros desde su inscripción en el Registro Mercantil."
      ],
      "correcta": 3,
      "explicacion": "Los actos registrables solo son oponibles a terceros desde su inscripción en el Registro Mercantil."
    },
    {
      "pregunta": "Sobre \"Derecho registral mercantil avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "El certificado de existencia y representación es clave para verificar facultades antes de contratar."
      ],
      "correcta": 3,
      "explicacion": "El certificado de existencia y representación es clave para verificar facultades antes de contratar."
    },
    {
      "pregunta": "Sobre \"Derecho registral mercantil avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "SECOP permite rastrear públicamente el ciclo completo de cualquier contrato estatal colombiano.",
        "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción."
      ],
      "correcta": 3,
      "explicacion": "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción."
    }
  ],
  "firma-digital-comercio-electronico-avanzado": [
    {
      "pregunta": "Sobre \"Firma digital y comercio electrónico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "La firma digital certificada, con certificado acreditado, tiene una presunción de autenticidad más fuerte que la simple."
      ],
      "correcta": 3,
      "explicacion": "La firma digital certificada, con certificado acreditado, tiene una presunción de autenticidad más fuerte que la simple."
    },
    {
      "pregunta": "Sobre \"Firma digital y comercio electrónico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los actos registrables solo son oponibles a terceros desde su inscripción en el Registro Mercantil.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "Las sentencias de la Corte IDH contra Colombia son vinculantes.",
        "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato."
      ],
      "correcta": 3,
      "explicacion": "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato."
    },
    {
      "pregunta": "Sobre \"Firma digital y comercio electrónico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las capitulaciones matrimoniales deben pactarse antes de casarse, mediante escritura pública.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba).",
        "El DIH y el derecho penal interno se aplican de forma complementaria, no excluyente, sobre los mismos hechos.",
        "El derecho de retracto en comercio electrónico da cinco días hábiles para desistir sin justificar la decisión."
      ],
      "correcta": 3,
      "explicacion": "El derecho de retracto en comercio electrónico da cinco días hábiles para desistir sin justificar la decisión."
    }
  ],
  "derecho-aguas-recursos-hidricos": [
    {
      "pregunta": "Sobre \"Derecho de aguas y recursos hídricos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado.",
        "El agua es un bien de uso público; se adquiere el derecho a usarla mediante concesión, no su propiedad."
      ],
      "correcta": 3,
      "explicacion": "El agua es un bien de uso público; se adquiere el derecho a usarla mediante concesión, no su propiedad."
    },
    {
      "pregunta": "Sobre \"Derecho de aguas y recursos hídricos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las licencias obligatorias permiten producir un genérico sin consentimiento del titular, en interés público, con compensación.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después.",
        "El consumo humano y doméstico tiene prioridad legal sobre otros usos en situaciones de escasez."
      ],
      "correcta": 3,
      "explicacion": "El consumo humano y doméstico tiene prioridad legal sobre otros usos en situaciones de escasez."
    },
    {
      "pregunta": "Sobre \"Derecho de aguas y recursos hídricos\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "El fuero militar exige un vínculo directo y próximo entre la conducta y una función militar o policial legítima.",
        "Distingue justificación interna (lógica) de justificación externa (premisas bien fundadas).",
        "La Corte Constitucional reconoce el acceso al agua potable como derecho fundamental autónomo."
      ],
      "correcta": 3,
      "explicacion": "La Corte Constitucional reconoce el acceso al agua potable como derecho fundamental autónomo."
    }
  ],
  "derecho-urbanistico-avanzado": [
    {
      "pregunta": "Sobre \"Derecho Urbanístico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa.",
        "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina.",
        "El POT define qué se puede construir en cada zona; construir sin licencia o excediéndola es sancionable."
      ],
      "correcta": 3,
      "explicacion": "El POT define qué se puede construir en cada zona; construir sin licencia o excediéndola es sancionable."
    },
    {
      "pregunta": "Sobre \"Derecho Urbanístico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los tributos territoriales requieren ley previa que los autorice; los concejos y asambleas no pueden crearlos por su cuenta.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "En supuestos calificados como graves, es el administrador quien debe probar que actuó diligentemente, no al revés.",
        "La plusvalía urbana cobra al propietario parte del mayor valor generado por una decisión de planificación pública."
      ],
      "correcta": 3,
      "explicacion": "La plusvalía urbana cobra al propietario parte del mayor valor generado por una decisión de planificación pública."
    },
    {
      "pregunta": "Sobre \"Derecho Urbanístico avanzado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original.",
        "Permite invocar directamente instrumentos internacionales en un proceso interno.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "Las normas urbanísticas pueden cambiar hacia el futuro sin generar automáticamente derecho a indemnización."
      ],
      "correcta": 3,
      "explicacion": "Las normas urbanísticas pueden cambiar hacia el futuro sin generar automáticamente derecho a indemnización."
    }
  ],
  "tributario-territorial-avanzado": [
    {
      "pregunta": "Sobre \"Régimen tributario territorial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "El know-how se protege por confidencialidad contractual, no por un registro público como la patente.",
        "Los tributos territoriales requieren ley previa que los autorice; los concejos y asambleas no pueden crearlos por su cuenta."
      ],
      "correcta": 3,
      "explicacion": "Los tributos territoriales requieren ley previa que los autorice; los concejos y asambleas no pueden crearlos por su cuenta."
    },
    {
      "pregunta": "Sobre \"Régimen tributario territorial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un mismo hecho puede generar proceso disciplinario, fiscal y penal simultáneamente, sin doble juzgamiento.",
        "La figura fue históricamente usada para evadir obligaciones laborales, lo que motivó reformas que la restringieron.",
        "La Corte Suprema emite concepto sobre requisitos legales; el Gobierno Nacional decide finalmente si concede la extradición.",
        "El predial grava la propiedad de inmuebles según avalúo catastral; el ICA grava actividades económicas por ingresos brutos."
      ],
      "correcta": 3,
      "explicacion": "El predial grava la propiedad de inmuebles según avalúo catastral; el ICA grava actividades económicas por ingresos brutos."
    },
    {
      "pregunta": "Sobre \"Régimen tributario territorial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La historia clínica es la prueba central: su calidad favorece o perjudica al profesional en un eventual litigio.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento."
      ],
      "correcta": 3,
      "explicacion": "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento."
    }
  ],
  "regulacion-eps-ips-profundidad": [
    {
      "pregunta": "Sobre \"Regulación de EPS e IPS en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En supuestos calificados como graves, es el administrador quien debe probar que actuó diligentemente, no al revés.",
        "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular.",
        "Un extranjero con inmuebles en Colombia genera casi siempre un proceso sucesoral local adicional sobre esos bienes.",
        "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados."
      ],
      "correcta": 3,
      "explicacion": "Las EPS aseguran el riesgo; las IPS prestan efectivamente los servicios de salud a los afiliados."
    },
    {
      "pregunta": "Sobre \"Regulación de EPS e IPS en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Transferir datos a un país sin calificación de adecuación exige, en general, consentimiento expreso del titular.",
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "La publicidad comparativa es lícita si es objetiva, verificable y no genera confusión ni desacredita injustificadamente.",
        "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado."
      ],
      "correcta": 3,
      "explicacion": "La UPC es el pago per cápita que la ADRES gira a las EPS para cubrir el costo esperado de cada afiliado."
    },
    {
      "pregunta": "Sobre \"Regulación de EPS e IPS en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La protección de datos de prueba puede extender la exclusividad comercial más allá del vencimiento de la patente.",
        "La figura fue históricamente usada para evadir obligaciones laborales, lo que motivó reformas que la restringieron.",
        "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios."
      ],
      "correcta": 3,
      "explicacion": "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios."
    }
  ],
  "zonas-francas-regimenes-especiales": [
    {
      "pregunta": "Sobre \"Zonas francas y regímenes aduaneros especiales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "El programa de delación premia a quien primero confiesa y aporta pruebas de un cartel.",
        "Dentro de una zona franca, las mercancías del exterior no causan arancel ni IVA hasta su nacionalización."
      ],
      "correcta": 3,
      "explicacion": "Dentro de una zona franca, las mercancías del exterior no causan arancel ni IVA hasta su nacionalización."
    },
    {
      "pregunta": "Sobre \"Zonas francas y regímenes aduaneros especiales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción popular protege derechos colectivos, no requiere el mismo estándar de urgencia que la tutela.",
        "El control fiscal vigila que los pagos futuros comprometidos en estos contratos no comprometan la sostenibilidad fiscal del país.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión.",
        "El beneficio tributario preferencial depende de cumplir continuamente compromisos de inversión y empleo."
      ],
      "correcta": 3,
      "explicacion": "El beneficio tributario preferencial depende de cumplir continuamente compromisos de inversión y empleo."
    },
    {
      "pregunta": "Sobre \"Zonas francas y regímenes aduaneros especiales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX).",
        "La infraestructura crítica cibernética requiere resiliencia, no solo persecución penal del atacante.",
        "Colombia ha ajustado el régimen para no depender exclusivamente de la obligación de exportar, por presión de la OMC."
      ],
      "correcta": 3,
      "explicacion": "Colombia ha ajustado el régimen para no depender exclusivamente de la obligación de exportar, por presión de la OMC."
    }
  ],
  "competencia-desleal-publicidad-enganosa": [
    {
      "pregunta": "Sobre \"Competencia desleal y publicidad engañosa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla.",
        "La competencia desleal protege la lealtad entre competidores; el antitrust protege la estructura del mercado."
      ],
      "correcta": 3,
      "explicacion": "La competencia desleal protege la lealtad entre competidores; el antitrust protege la estructura del mercado."
    },
    {
      "pregunta": "Sobre \"Competencia desleal y publicidad engañosa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después.",
        "Una misma publicidad engañosa puede generar responsabilidad de consumo y de competencia desleal a la vez."
      ],
      "correcta": 3,
      "explicacion": "Una misma publicidad engañosa puede generar responsabilidad de consumo y de competencia desleal a la vez."
    },
    {
      "pregunta": "Sobre \"Competencia desleal y publicidad engañosa\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cerrar sin autorización (gun jumping) es sancionable, aunque la operación hubiera sido aprobada después.",
        "El programa de delación premia a quien primero confiesa y aporta pruebas de un cartel.",
        "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados.",
        "La publicidad comparativa es lícita si es objetiva, verificable y no genera confusión ni desacredita injustificadamente."
      ],
      "correcta": 3,
      "explicacion": "La publicidad comparativa es lícita si es objetiva, verificable y no genera confusión ni desacredita injustificadamente."
    }
  ],
  "delitos-recursos-naturales-penal-ambiental": [
    {
      "pregunta": "Sobre \"Delitos contra los recursos naturales y el medio ambiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral.",
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo."
      ],
      "correcta": 3,
      "explicacion": "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo."
    },
    {
      "pregunta": "Sobre \"Delitos contra los recursos naturales y el medio ambiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El derecho de retiro da una vía de salida con reembolso, no de bloqueo, ante decisiones estructurales de alto impacto.",
        "La explotación ilícita de yacimiento minero se agrava cuando se vincula con grupos armados organizados."
      ],
      "correcta": 3,
      "explicacion": "La explotación ilícita de yacimiento minero se agrava cuando se vincula con grupos armados organizados."
    },
    {
      "pregunta": "Sobre \"Delitos contra los recursos naturales y el medio ambiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina.",
        "El litigio estratégico busca cambio estructural, no solo ganar el caso individual.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "La responsabilidad penal, administrativa y civil ambiental pueden coexistir frente al mismo hecho dañoso."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad penal, administrativa y civil ambiental pueden coexistir frente al mismo hecho dañoso."
    }
  ],
  "patentes-farmaceuticas-salud-publica": [
    {
      "pregunta": "Sobre \"Patentes farmacéuticas y salud pública\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción.",
        "Los acreedores tienen derecho de oposición si la operación puede afectar su garantía patrimonial.",
        "La protección de datos de prueba puede extender la exclusividad comercial más allá del vencimiento de la patente."
      ],
      "correcta": 3,
      "explicacion": "La protección de datos de prueba puede extender la exclusividad comercial más allá del vencimiento de la patente."
    },
    {
      "pregunta": "Sobre \"Patentes farmacéuticas y salud pública\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Las empresas también enfrentan responsabilidad administrativa por fallas de seguridad de datos.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "Las licencias obligatorias permiten producir un genérico sin consentimiento del titular, en interés público, con compensación."
      ],
      "correcta": 3,
      "explicacion": "Las licencias obligatorias permiten producir un genérico sin consentimiento del titular, en interés público, con compensación."
    },
    {
      "pregunta": "Sobre \"Patentes farmacéuticas y salud pública\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público.",
        "El mercado relevante (producto y geográfico) es la base técnica de todo el análisis de la autoridad.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Colombia ha usado la declaratoria de interés público principalmente como herramienta de negociación de precios."
      ],
      "correcta": 3,
      "explicacion": "Colombia ha usado la declaratoria de interés público principalmente como herramienta de negociación de precios."
    }
  ],
  "pensiones-voluntarias-beps": [
    {
      "pregunta": "Sobre \"Pensiones voluntarias y BEPS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "El Estado garantiza espacios gratuitos de propaganda electoral en medios que usan el espectro electromagnético.",
        "La primacía de la realidad permite declarar contrato de trabajo real si había subordinación típica encubierta.",
        "Retirar aportes voluntarios antes de tiempo hace perder el beneficio tributario y genera el pago diferido del impuesto."
      ],
      "correcta": 3,
      "explicacion": "Retirar aportes voluntarios antes de tiempo hace perder el beneficio tributario y genera el pago diferido del impuesto."
    },
    {
      "pregunta": "Sobre \"Pensiones voluntarias y BEPS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño.",
        "Los BEPS son un mecanismo distinto a la pensión, con subsidio estatal del 20%, para quien no logra cotizar lo suficiente."
      ],
      "correcta": 3,
      "explicacion": "Los BEPS son un mecanismo distinto a la pensión, con subsidio estatal del 20%, para quien no logra cotizar lo suficiente."
    },
    {
      "pregunta": "Sobre \"Pensiones voluntarias y BEPS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un programa de cumplimiento efectivo puede atenuar significativamente la sanción, aunque no la elimine automáticamente.",
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "La indemnización sustitutiva devuelve lo aportado a quien no cumplió semanas mínimas y no quiere seguir cotizando."
      ],
      "correcta": 3,
      "explicacion": "La indemnización sustitutiva devuelve lo aportado a quien no cumplió semanas mínimas y no quiere seguir cotizando."
    }
  ],
  "ciberseguridad-nacional-infraestructura-critica": [
    {
      "pregunta": "Sobre \"Protección de infraestructura crítica y ciberseguridad nacional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño.",
        "Colombia tiene un desarrollo jurisprudencial extenso en la aplicación del DIH a conflictos armados no internacionales.",
        "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos.",
        "La infraestructura crítica cibernética requiere resiliencia, no solo persecución penal del atacante."
      ],
      "correcta": 3,
      "explicacion": "La infraestructura crítica cibernética requiere resiliencia, no solo persecución penal del atacante."
    },
    {
      "pregunta": "Sobre \"Protección de infraestructura crítica y ciberseguridad nacional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La interoperabilidad busca que el ciudadano no repita trámites de verificación de identidad en cada entidad.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "Reconocer verdad y responsabilidad ante la JEP da acceso a sanciones propias restaurativas, no prisión ordinaria.",
        "Sectores regulados como el financiero tienen exigencias específicas de continuidad ante incidentes cibernéticos."
      ],
      "correcta": 3,
      "explicacion": "Sectores regulados como el financiero tienen exigencias específicas de continuidad ante incidentes cibernéticos."
    },
    {
      "pregunta": "Sobre \"Protección de infraestructura crítica y ciberseguridad nacional\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Métodos clásicos: gramatical, sistemático, histórico y teleológico.",
        "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal.",
        "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición.",
        "El Convenio de Budapest facilita la cooperación judicial internacional en delitos informáticos transnacionales."
      ],
      "correcta": 3,
      "explicacion": "El Convenio de Budapest facilita la cooperación judicial internacional en delitos informáticos transnacionales."
    }
  ],
  "derecho-deportivo-justicia-deportiva": [
    {
      "pregunta": "Sobre \"Derecho del Deporte y justicia deportiva\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Veedurías bien documentadas alimentan directamente investigaciones disciplinarias y fiscales formales.",
        "La responsabilidad ambiental puede ser solidaria entre varios sujetos vinculados a la actividad dañina.",
        "Los deportistas y clubes se someten a la jurisdicción deportiva interna como condición para competir."
      ],
      "correcta": 3,
      "explicacion": "Los deportistas y clubes se someten a la jurisdicción deportiva interna como condición para competir."
    },
    {
      "pregunta": "Sobre \"Derecho del Deporte y justicia deportiva\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "La cadena de custodia digital debe documentar cada momento de recolección, copia, análisis y transporte de la evidencia.",
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo.",
        "El régimen antidopaje es de responsabilidad objetiva: basta la presencia de la sustancia, sin necesidad de probar intención."
      ],
      "correcta": 3,
      "explicacion": "El régimen antidopaje es de responsabilidad objetiva: basta la presencia de la sustancia, sin necesidad de probar intención."
    },
    {
      "pregunta": "Sobre \"Derecho del Deporte y justicia deportiva\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles.",
        "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia.",
        "La tutela procede excepcionalmente contra decisiones deportivas que vulneren garantías fundamentales del debido proceso."
      ],
      "correcta": 3,
      "explicacion": "La tutela procede excepcionalmente contra decisiones deportivas que vulneren garantías fundamentales del debido proceso."
    }
  ],
  "patrimonio-cultural-arqueologico": [
    {
      "pregunta": "Sobre \"Patrimonio cultural y arqueológico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados.",
        "El fuero militar exige un vínculo directo y próximo entre la conducta y una función militar o policial legítima.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Los bienes arqueológicos son propiedad de la Nación, sin importar en qué predio privado se hallen."
      ],
      "correcta": 3,
      "explicacion": "Los bienes arqueológicos son propiedad de la Nación, sin importar en qué predio privado se hallen."
    },
    {
      "pregunta": "Sobre \"Patrimonio cultural y arqueológico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho de retracto en comercio electrónico da cinco días hábiles para desistir sin justificar la decisión.",
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida.",
        "La acción popular protege derechos colectivos, no requiere el mismo estándar de urgencia que la tutela.",
        "Un hallazgo arqueológico obliga a suspender la obra y reportarlo al ICANH, sin generar propiedad para el dueño del predio."
      ],
      "correcta": 3,
      "explicacion": "Un hallazgo arqueológico obliga a suspender la obra y reportarlo al ICANH, sin generar propiedad para el dueño del predio."
    },
    {
      "pregunta": "Sobre \"Patrimonio cultural y arqueológico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral.",
        "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario.",
        "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos.",
        "La declaratoria de patrimonio cultural restringe la propiedad sin indemnización automática, por función social del dominio."
      ],
      "correcta": 3,
      "explicacion": "La declaratoria de patrimonio cultural restringe la propiedad sin indemnización automática, por función social del dominio."
    }
  ],
  "apostilla-legalizacion-documentos": [
    {
      "pregunta": "Sobre \"Apostilla y legalización de documentos para el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial.",
        "Métodos clásicos: gramatical, sistemático, histórico y teleológico.",
        "La SAS puede constituirse con un solo accionista y por documento privado, sin escritura pública en general.",
        "La apostilla simplifica el reconocimiento de documentos entre países parte del Convenio de La Haya de 1961."
      ],
      "correcta": 3,
      "explicacion": "La apostilla simplifica el reconocimiento de documentos entre países parte del Convenio de La Haya de 1961."
    },
    {
      "pregunta": "Sobre \"Apostilla y legalización de documentos para el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "Reconocer un procedimiento extranjero en Colombia puede suspender acciones individuales de acreedores locales.",
        "La publicidad comparativa es lícita si es objetiva, verificable y no genera confusión ni desacredita injustificadamente.",
        "Sin apostilla aplicable, se requiere el proceso más largo de legalización diplomática o consular."
      ],
      "correcta": 3,
      "explicacion": "Sin apostilla aplicable, se requiere el proceso más largo de legalización diplomática o consular."
    },
    {
      "pregunta": "Sobre \"Apostilla y legalización de documentos para el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte Constitucional reconoce el acceso al agua potable como derecho fundamental autónomo.",
        "Existen procedimientos de insolvencia simplificados para MIPYMES, incluso ante las Cámaras de Comercio.",
        "La competencia desleal protege la lealtad entre competidores; el antitrust protege la estructura del mercado.",
        "Los documentos en idioma extranjero suelen requerir además traducción oficial para surtir efectos en Colombia."
      ],
      "correcta": 3,
      "explicacion": "Los documentos en idioma extranjero suelen requerir además traducción oficial para surtir efectos en Colombia."
    }
  ],
  "arbitraje-nacional-proceso": [
    {
      "pregunta": "Sobre \"Arbitraje nacional: el proceso arbitral doméstico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La interoperabilidad busca que el ciudadano no repita trámites de verificación de identidad en cada entidad.",
        "El SIVJRNR combina verdad, búsqueda de desaparecidos y justicia (JEP) como componentes coordinados.",
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago.",
        "El pacto arbitral puede ser cláusula compromisoria previa o compromiso posterior al surgir el conflicto."
      ],
      "correcta": 3,
      "explicacion": "El pacto arbitral puede ser cláusula compromisoria previa o compromiso posterior al surgir el conflicto."
    },
    {
      "pregunta": "Sobre \"Arbitraje nacional: el proceso arbitral doméstico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los BEPS son un mecanismo distinto a la pensión, con subsidio estatal del 20%, para quien no logra cotizar lo suficiente.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La cláusula de solución de conflictos define de antemano dónde y cómo se resolverá una disputa.",
        "El principio de kompetenz-kompetenz permite al tribunal decidir primero sobre su propia competencia."
      ],
      "correcta": 3,
      "explicacion": "El principio de kompetenz-kompetenz permite al tribunal decidir primero sobre su propia competencia."
    },
    {
      "pregunta": "Sobre \"Arbitraje nacional: el proceso arbitral doméstico\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un hallazgo arqueológico obliga a suspender la obra y reportarlo al ICANH, sin generar propiedad para el dueño del predio.",
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba).",
        "El recurso de anulación es procesal: no revisa si el árbitro acertó en el fondo, solo el respeto a garantías mínimas."
      ],
      "correcta": 3,
      "explicacion": "El recurso de anulación es procesal: no revisa si el árbitro acertó en el fondo, solo el respeto a garantías mínimas."
    }
  ],
  "responsabilidad-penal-personas-juridicas": [
    {
      "pregunta": "Sobre \"Responsabilidad penal de las personas jurídicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "El siguiente paso real es un programa de Derecho acreditado, no un curso online.",
        "Colombia no tiene responsabilidad penal general de personas jurídicas, sino regímenes fragmentados y sectoriales."
      ],
      "correcta": 3,
      "explicacion": "Colombia no tiene responsabilidad penal general de personas jurídicas, sino regímenes fragmentados y sectoriales."
    },
    {
      "pregunta": "Sobre \"Responsabilidad penal de las personas jurídicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La claridad para el lector es tan importante como la corrección jurídica.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El Convenio de Budapest facilita la cooperación judicial internacional en delitos informáticos transnacionales.",
        "La Ley 1778 de 2016 sanciona a empresas por soborno transnacional, sin depender de una condena penal individual previa."
      ],
      "correcta": 3,
      "explicacion": "La Ley 1778 de 2016 sanciona a empresas por soborno transnacional, sin depender de una condena penal individual previa."
    },
    {
      "pregunta": "Sobre \"Responsabilidad penal de las personas jurídicas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La responsabilidad de cada sociedad es en principio limitada, pero puede levantarse el velo si hubo abuso.",
        "La extinción de dominio persigue bienes de origen ilícito, sin depender de una condena penal previa.",
        "El contrabando y el lavado mediante sobre/subfacturación de comercio exterior son focos activos de control.",
        "Un programa de cumplimiento efectivo puede atenuar significativamente la sanción, aunque no la elimine automáticamente."
      ],
      "correcta": 3,
      "explicacion": "Un programa de cumplimiento efectivo puede atenuar significativamente la sanción, aunque no la elimine automáticamente."
    }
  ],
  "transferencia-tecnologia-know-how": [
    {
      "pregunta": "Sobre \"Transferencia de tecnología y contratos de know-how\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "El know-how se protege por confidencialidad contractual, no por un registro público como la patente."
      ],
      "correcta": 3,
      "explicacion": "El know-how se protege por confidencialidad contractual, no por un registro público como la patente."
    },
    {
      "pregunta": "Sobre \"Transferencia de tecnología y contratos de know-how\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La plusvalía urbana cobra al propietario parte del mayor valor generado por una decisión de planificación pública.",
        "El subsuelo es del Estado: explotar minerales o hidrocarburos exige un título minero o contrato específico.",
        "Colombia ha usado la declaratoria de interés público principalmente como herramienta de negociación de precios.",
        "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia."
      ],
      "correcta": 3,
      "explicacion": "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia."
    },
    {
      "pregunta": "Sobre \"Transferencia de tecnología y contratos de know-how\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "Verifica siempre que la jurisprudencia citada siga vigente y aplique a los hechos del caso.",
        "El estándar del buen hombre de negocios es más exigente que el del buen padre de familia de otras relaciones civiles.",
        "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles."
      ],
      "correcta": 3,
      "explicacion": "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles."
    }
  ],
  "proteccion-accionista-minoritario": [
    {
      "pregunta": "Sobre \"Protección al accionista minoritario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sistema enfrenta críticas de legitimidad democrática y un movimiento activo de reforma internacional.",
        "El Código Civil colombiano proviene, con reformas, del Código de Andrés Bello (s. XIX).",
        "El mercado relevante (producto y geográfico) es la base técnica de todo el análisis de la autoridad.",
        "El derecho de inspección permite a cualquier accionista revisar libros sociales antes de la asamblea ordinaria."
      ],
      "correcta": 3,
      "explicacion": "El derecho de inspección permite a cualquier accionista revisar libros sociales antes de la asamblea ordinaria."
    },
    {
      "pregunta": "Sobre \"Protección al accionista minoritario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla.",
        "Un programa de cumplimiento efectivo puede atenuar significativamente la sanción, aunque no la elimine automáticamente.",
        "La Ley 1116 distingue reorganización (rescatar la empresa) de liquidación judicial (cerrarla ordenadamente).",
        "El derecho de retiro da una vía de salida con reembolso, no de bloqueo, ante decisiones estructurales de alto impacto."
      ],
      "correcta": 3,
      "explicacion": "El derecho de retiro da una vía de salida con reembolso, no de bloqueo, ante decisiones estructurales de alto impacto."
    },
    {
      "pregunta": "Sobre \"Protección al accionista minoritario\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "El certificado de existencia y representación es clave para verificar facultades antes de contratar.",
        "Los deportistas y clubes se someten a la jurisdicción deportiva interna como condición para competir.",
        "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario."
      ],
      "correcta": 3,
      "explicacion": "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario."
    }
  ],
  "sociedades-bic": [
    {
      "pregunta": "Sobre \"Sociedades de Beneficio e Interés Colectivo (BIC)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago.",
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva.",
        "Las medidas preventivas pueden imponerse de inmediato, antes de concluir el proceso sancionatorio completo.",
        "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc."
      ],
      "correcta": 3,
      "explicacion": "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc."
    },
    {
      "pregunta": "Sobre \"Sociedades de Beneficio e Interés Colectivo (BIC)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un contrato electrónico es válido sin papel ni firma manuscrita, si cumple los requisitos generales del contrato.",
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "La responsabilidad penal, administrativa y civil ambiental pueden coexistir frente al mismo hecho dañoso.",
        "Exige reportar anualmente el impacto social y ambiental frente a un estándar externo reconocido."
      ],
      "correcta": 3,
      "explicacion": "Exige reportar anualmente el impacto social y ambiental frente a un estándar externo reconocido."
    },
    {
      "pregunta": "Sobre \"Sociedades de Beneficio e Interés Colectivo (BIC)\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción.",
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales.",
        "La avería gruesa reparte proporcionalmente entre todos los interesados el sacrificio hecho para salvar el viaje.",
        "A diferencia de una ESAL, una Sociedad BIC sí puede repartir utilidades normalmente entre sus accionistas."
      ],
      "correcta": 3,
      "explicacion": "A diferencia de una ESAL, una Sociedad BIC sí puede repartir utilidades normalmente entre sus accionistas."
    }
  ],
  "responsabilidad-medica-consentimiento-informado": [
    {
      "pregunta": "Sobre \"Responsabilidad médica y consentimiento informado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "La C-055/2022 amplió la despenalización del aborto hasta la semana 24.",
        "El principio de oportunidad permite a la Fiscalía no perseguir un caso en supuestos taxativos.",
        "La responsabilidad médica es, como regla general, de medios (diligencia), no de resultado (curar)."
      ],
      "correcta": 3,
      "explicacion": "La responsabilidad médica es, como regla general, de medios (diligencia), no de resultado (curar)."
    },
    {
      "pregunta": "Sobre \"Responsabilidad médica y consentimiento informado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los documentos en idioma extranjero suelen requerir además traducción oficial para surtir efectos en Colombia.",
        "La omisión o el vicio grave en la consulta es causa frecuente de suspensión judicial de proyectos.",
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata.",
        "El consentimiento informado es un requisito autónomo, cuya omisión genera responsabilidad aunque el procedimiento salga bien técnicamente."
      ],
      "correcta": 3,
      "explicacion": "El consentimiento informado es un requisito autónomo, cuya omisión genera responsabilidad aunque el procedimiento salga bien técnicamente."
    },
    {
      "pregunta": "Sobre \"Responsabilidad médica y consentimiento informado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El pacto arbitral puede ser cláusula compromisoria previa o compromiso posterior al surgir el conflicto.",
        "Iusnaturalismo vs. positivismo: si el derecho depende o no de su justicia moral.",
        "Existen trámites simplificados de insolvencia pensados específicamente para MIPYMES.",
        "La historia clínica es la prueba central: su calidad favorece o perjudica al profesional en un eventual litigio."
      ],
      "correcta": 3,
      "explicacion": "La historia clínica es la prueba central: su calidad favorece o perjudica al profesional en un eventual litigio."
    }
  ],
  "capitulaciones-regimen-patrimonial-matrimonio": [
    {
      "pregunta": "Sobre \"Capitulaciones matrimoniales y régimen patrimonial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El habeas corpus protege exclusivamente la libertad personal, con trámite de máximo 36 horas.",
        "La responsabilidad penal, administrativa y civil ambiental pueden coexistir frente al mismo hecho dañoso.",
        "La situación de control se presume, entre otros casos, cuando la matriz posee más del 50% del capital.",
        "Sin capitulaciones, el matrimonio genera automáticamente sociedad conyugal, repartible por mitades al terminar."
      ],
      "correcta": 3,
      "explicacion": "Sin capitulaciones, el matrimonio genera automáticamente sociedad conyugal, repartible por mitades al terminar."
    },
    {
      "pregunta": "Sobre \"Capitulaciones matrimoniales y régimen patrimonial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Las capitulaciones matrimoniales deben pactarse antes de casarse, mediante escritura pública."
      ],
      "correcta": 3,
      "explicacion": "Las capitulaciones matrimoniales deben pactarse antes de casarse, mediante escritura pública."
    },
    {
      "pregunta": "Sobre \"Capitulaciones matrimoniales y régimen patrimonial\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La decisión de no sancionar debe subir en consulta obligatoria al superior jerárquico del juez.",
        "Permite invocar directamente instrumentos internacionales en un proceso interno.",
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo.",
        "La unión marital de hecho genera sociedad patrimonial, con lógica similar pero acreditación distinta a la conyugal."
      ],
      "correcta": 3,
      "explicacion": "La unión marital de hecho genera sociedad patrimonial, con lógica similar pero acreditación distinta a la conyugal."
    }
  ],
  "derecho-autor-plataformas-streaming": [
    {
      "pregunta": "Sobre \"Derecho de autor en plataformas digitales y streaming\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El procedimiento principal se tramita donde el deudor tiene su centro de intereses principales.",
        "Exige reportar anualmente el impacto social y ambiental frente a un estándar externo reconocido.",
        "La Constituyente de 1991 nació de una crisis de legitimidad y un movimiento estudiantil.",
        "Las plataformas de streaming pagan mediante licencias masivas con reparto fraccionado, no venta de copias individuales."
      ],
      "correcta": 3,
      "explicacion": "Las plataformas de streaming pagan mediante licencias masivas con reparto fraccionado, no venta de copias individuales."
    },
    {
      "pregunta": "Sobre \"Derecho de autor en plataformas digitales y streaming\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un programa de cumplimiento real puede atenuar responsabilidad, uno solo formal no.",
        "La excepción de inconstitucionalidad permite a cualquier juez inaplicar una norma en un caso concreto.",
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados."
      ],
      "correcta": 3,
      "explicacion": "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados."
    },
    {
      "pregunta": "Sobre \"Derecho de autor en plataformas digitales y streaming\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los efectos inter comunis extienden la protección de una tutela a un grupo en la misma situación.",
        "La apostilla simplifica el reconocimiento de documentos entre países parte del Convenio de La Haya de 1961.",
        "El estándar del buen hombre de negocios es más exigente que el del buen padre de familia de otras relaciones civiles.",
        "El derecho moral de autor es irrenunciable, incluso tras ceder completamente los derechos patrimoniales."
      ],
      "correcta": 3,
      "explicacion": "El derecho moral de autor es irrenunciable, incluso tras ceder completamente los derechos patrimoniales."
    }
  ],
  "gobierno-digital-datos-abiertos": [
    {
      "pregunta": "Sobre \"Gobierno digital y datos abiertos del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Constitución de 1886 rigió 105 años antes de ser reemplazada.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "La infraestructura crítica cibernética requiere resiliencia, no solo persecución penal del atacante.",
        "Los datos abiertos deben publicarse en formatos reutilizables, no solo como documentos escaneados."
      ],
      "correcta": 3,
      "explicacion": "Los datos abiertos deben publicarse en formatos reutilizables, no solo como documentos escaneados."
    },
    {
      "pregunta": "Sobre \"Gobierno digital y datos abiertos del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las normas urbanísticas pueden cambiar hacia el futuro sin generar automáticamente derecho a indemnización.",
        "La responsabilidad fiscal ante la Contraloría busca resarcir el daño patrimonial causado al Estado.",
        "Métodos clásicos: gramatical, sistemático, histórico y teleológico.",
        "SECOP permite rastrear públicamente el ciclo completo de cualquier contrato estatal colombiano."
      ],
      "correcta": 3,
      "explicacion": "SECOP permite rastrear públicamente el ciclo completo de cualquier contrato estatal colombiano."
    },
    {
      "pregunta": "Sobre \"Gobierno digital y datos abiertos del Estado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La compra de acciones hereda todos los pasivos de la empresa; la compra de activos, solo los asumidos.",
        "La protección de datos de prueba puede extender la exclusividad comercial más allá del vencimiento de la patente.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "La interoperabilidad busca que el ciudadano no repita trámites de verificación de identidad en cada entidad."
      ],
      "correcta": 3,
      "explicacion": "La interoperabilidad busca que el ciudadano no repita trámites de verificación de identidad en cada entidad."
    }
  ],
  "derecho-internacional-humanitario-conflicto": [
    {
      "pregunta": "Sobre \"Derecho Internacional Humanitario y conflicto armado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño.",
        "Copiar cláusulas de otros contratos sin adaptarlas genera ambigüedades costosas después.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "Distinción, proporcionalidad y precaución son los principios centrales del DIH aplicado al conflicto armado."
      ],
      "correcta": 3,
      "explicacion": "Distinción, proporcionalidad y precaución son los principios centrales del DIH aplicado al conflicto armado."
    },
    {
      "pregunta": "Sobre \"Derecho Internacional Humanitario y conflicto armado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las normas urbanísticas pueden cambiar hacia el futuro sin generar automáticamente derecho a indemnización.",
        "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "Colombia tiene un desarrollo jurisprudencial extenso en la aplicación del DIH a conflictos armados no internacionales."
      ],
      "correcta": 3,
      "explicacion": "Colombia tiene un desarrollo jurisprudencial extenso en la aplicación del DIH a conflictos armados no internacionales."
    },
    {
      "pregunta": "Sobre \"Derecho Internacional Humanitario y conflicto armado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SECOP permite rastrear públicamente el ciclo completo de cualquier contrato estatal colombiano.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "El DIH y el derecho penal interno se aplican de forma complementaria, no excluyente, sobre los mismos hechos."
      ],
      "correcta": 3,
      "explicacion": "El DIH y el derecho penal interno se aplican de forma complementaria, no excluyente, sobre los mismos hechos."
    }
  ],
  "extradicion": [
    {
      "pregunta": "Sobre \"Extradición\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "El derecho de retracto en comercio electrónico da cinco días hábiles para desistir sin justificar la decisión.",
        "La protección de datos de prueba puede extender la exclusividad comercial más allá del vencimiento de la patente.",
        "La Corte Suprema emite concepto sobre requisitos legales; el Gobierno Nacional decide finalmente si concede la extradición."
      ],
      "correcta": 3,
      "explicacion": "La Corte Suprema emite concepto sobre requisitos legales; el Gobierno Nacional decide finalmente si concede la extradición."
    },
    {
      "pregunta": "Sobre \"Extradición\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La selección de tutelas por la Corte es discrecional, no un derecho de las partes.",
        "El SIVJRNR combina verdad, búsqueda de desaparecidos y justicia (JEP) como componentes coordinados.",
        "La casación corrige errores de derecho, no reevalúa los hechos probados.",
        "La doble incriminación y la exclusión de delitos políticos son requisitos centrales del análisis de extradición."
      ],
      "correcta": 3,
      "explicacion": "La doble incriminación y la exclusión de delitos políticos son requisitos centrales del análisis de extradición."
    },
    {
      "pregunta": "Sobre \"Extradición\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción de repetición permite al Estado recuperar lo pagado del agente responsable.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva.",
        "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición."
      ],
      "correcta": 3,
      "explicacion": "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición."
    }
  ],
  "incidente-desacato-tutela": [
    {
      "pregunta": "Sobre \"El incidente de desacato en la acción de tutela\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las sociedades de gestión colectiva negocian y distribuyen derechos de autor a nombre de sus afiliados.",
        "Ambas figuras suelen combinarse sobre el mismo inmueble para proteger frente a riesgos distintos y complementarios.",
        "La Constituyente de 1991 nació de una crisis de legitimidad y un movimiento estudiantil.",
        "El incidente de desacato se solicita ante el mismo juez que falló la tutela, sin necesidad de abogado."
      ],
      "correcta": 3,
      "explicacion": "El incidente de desacato se solicita ante el mismo juez que falló la tutela, sin necesidad de abogado."
    },
    {
      "pregunta": "Sobre \"El incidente de desacato en la acción de tutela\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las cláusulas de no competencia posteriores al contrato deben ser razonables en tiempo, territorio y alcance para ser exigibles.",
        "La Ley 1116 distingue reorganización (rescatar la empresa) de liquidación judicial (cerrarla ordenadamente).",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Puede sancionar con arresto hasta seis meses y multa al funcionario responsable específico del incumplimiento."
      ],
      "correcta": 3,
      "explicacion": "Puede sancionar con arresto hasta seis meses y multa al funcionario responsable específico del incumplimiento."
    },
    {
      "pregunta": "Sobre \"El incidente de desacato en la acción de tutela\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La confusión patrimonial entre el dueño y la empresa complica frecuentemente estos procesos en negocios poco formalizados.",
        "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal.",
        "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento.",
        "La decisión de no sancionar debe subir en consulta obligatoria al superior jerárquico del juez."
      ],
      "correcta": 3,
      "explicacion": "La decisión de no sancionar debe subir en consulta obligatoria al superior jerárquico del juez."
    }
  ],
  "responsabilidad-administradores-deber-diligencia": [
    {
      "pregunta": "Sobre \"Responsabilidad de administradores societarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Existen procedimientos de insolvencia simplificados para MIPYMES, incluso ante las Cámaras de Comercio.",
        "El estándar del buen hombre de negocios es más exigente que el del buen padre de familia de otras relaciones civiles."
      ],
      "correcta": 3,
      "explicacion": "El estándar del buen hombre de negocios es más exigente que el del buen padre de familia de otras relaciones civiles."
    },
    {
      "pregunta": "Sobre \"Responsabilidad de administradores societarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El orden de prelación entre varias hipotecas sobre el mismo inmueble lo determina el orden de inscripción registral.",
        "Existen varios títulos de imputación: falla del servicio, riesgo excepcional y daño especial.",
        "Un administrador diligente e informado no responde solo porque el resultado de negocio fue desfavorable."
      ],
      "correcta": 3,
      "explicacion": "Un administrador diligente e informado no responde solo porque el resultado de negocio fue desfavorable."
    },
    {
      "pregunta": "Sobre \"Responsabilidad de administradores societarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las faltas disciplinarias pueden llegar hasta la exclusión de la profesión.",
        "Los plazos de prescripción varían según el tipo de acción: diez años civil ordinaria, cinco ejecutiva, entre otros.",
        "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original.",
        "En supuestos calificados como graves, es el administrador quien debe probar que actuó diligentemente, no al revés."
      ],
      "correcta": 3,
      "explicacion": "En supuestos calificados como graves, es el administrador quien debe probar que actuó diligentemente, no al revés."
    }
  ],
  "revisoria-fiscal-responsabilidad-auditores": [
    {
      "pregunta": "Sobre \"Revisoría fiscal y responsabilidad de auditores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El control fiscal vigila que los pagos futuros comprometidos en estos contratos no comprometan la sostenibilidad fiscal del país.",
        "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla.",
        "La acción popular protege derechos colectivos, no requiere el mismo estándar de urgencia que la tutela.",
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño."
      ],
      "correcta": 3,
      "explicacion": "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño."
    },
    {
      "pregunta": "Sobre \"Revisoría fiscal y responsabilidad de auditores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Los plazos de prescripción varían según el tipo de acción: diez años civil ordinaria, cinco ejecutiva, entre otros.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata."
      ],
      "correcta": 3,
      "explicacion": "El revisor fiscal debe denunciar irregularidades graves, aunque contradiga los intereses de quien lo contrata."
    },
    {
      "pregunta": "Sobre \"Revisoría fiscal y responsabilidad de auditores\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "La confusión patrimonial entre el dueño y la empresa complica frecuentemente estos procesos en negocios poco formalizados.",
        "El principio de plena competencia exige pactar entre vinculados como si fueran partes independientes.",
        "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal."
      ],
      "correcta": 3,
      "explicacion": "Su responsabilidad puede ser civil, disciplinaria ante la Junta Central de Contadores, y en casos graves, penal."
    }
  ],
  "sucesiones-internacionales-conflicto-leyes": [
    {
      "pregunta": "Sobre \"Sucesiones internacionales y conflicto de leyes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago.",
        "El procedimiento principal se tramita donde el deudor tiene su centro de intereses principales.",
        "Verifica siempre que la jurisprudencia citada siga vigente y aplique a los hechos del caso.",
        "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana."
      ],
      "correcta": 3,
      "explicacion": "Los muebles se rigen por la ley del último domicilio del causante; los inmuebles en Colombia, por la ley colombiana."
    },
    {
      "pregunta": "Sobre \"Sucesiones internacionales y conflicto de leyes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La unión marital de hecho genera sociedad patrimonial, con lógica similar pero acreditación distinta a la conyugal.",
        "La due diligence busca descubrir contingencias antes de cerrar o de fijar el precio final.",
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "Un extranjero con inmuebles en Colombia genera casi siempre un proceso sucesoral local adicional sobre esos bienes."
      ],
      "correcta": 3,
      "explicacion": "Un extranjero con inmuebles en Colombia genera casi siempre un proceso sucesoral local adicional sobre esos bienes."
    },
    {
      "pregunta": "Sobre \"Sucesiones internacionales y conflicto de leyes\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "El agua es un bien de uso público; se adquiere el derecho a usarla mediante concesión, no su propiedad.",
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago.",
        "Un testamento extranjero puede reconocerse en Colombia si cumple las formalidades del país donde se otorgó."
      ],
      "correcta": 3,
      "explicacion": "Un testamento extranjero puede reconocerse en Colombia si cumple las formalidades del país donde se otorgó."
    }
  ],
  "evidencia-digital-cadena-custodia": [
    {
      "pregunta": "Sobre \"Evidencia digital y cadena de custodia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La información pública se presume de acceso libre; la entidad debe justificar cualquier reserva.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "Colombia ha ajustado el régimen para no depender exclusivamente de la obligación de exportar, por presión de la OMC.",
        "La cadena de custodia digital debe documentar cada momento de recolección, copia, análisis y transporte de la evidencia."
      ],
      "correcta": 3,
      "explicacion": "La cadena de custodia digital debe documentar cada momento de recolección, copia, análisis y transporte de la evidencia."
    },
    {
      "pregunta": "Sobre \"Evidencia digital y cadena de custodia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Superintendencia de Sociedades resuelve conflictos societarios de forma más ágil que un proceso civil ordinario.",
        "Las regalías por tecnología pagadas al exterior están sujetas a retención en la fuente y reglas de precios de transferencia.",
        "El riesgo sistémico —el contagio entre entidades interconectadas— justifica la regulación financiera reforzada.",
        "Una imagen forense con hash criptográfico permite detectar cualquier alteración posterior de la evidencia digital."
      ],
      "correcta": 3,
      "explicacion": "Una imagen forense con hash criptográfico permite detectar cualquier alteración posterior de la evidencia digital."
    },
    {
      "pregunta": "Sobre \"Evidencia digital y cadena de custodia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los acreedores tienen derecho de oposición si la operación puede afectar su garantía patrimonial.",
        "El agua es un bien de uso público; se adquiere el derecho a usarla mediante concesión, no su propiedad.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia."
      ],
      "correcta": 3,
      "explicacion": "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia."
    }
  ],
  "gobierno-corporativo-sas-avanzado": [
    {
      "pregunta": "Sobre \"Gobierno corporativo avanzado en la SAS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción de grupo busca indemnización individual; la acción popular protege el derecho colectivo en sí.",
        "No admite las restricciones de subsidiariedad que sí aplican, con matices, a la acción de tutela.",
        "Los tributos territoriales requieren ley previa que los autorice; los concejos y asambleas no pueden crearlos por su cuenta.",
        "La SAS permite diseñar libremente su estructura de gobierno, con pocas normas imperativas frente a otros tipos societarios."
      ],
      "correcta": 3,
      "explicacion": "La SAS permite diseñar libremente su estructura de gobierno, con pocas normas imperativas frente a otros tipos societarios."
    },
    {
      "pregunta": "Sobre \"Gobierno corporativo avanzado en la SAS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición.",
        "El régimen exige trato equitativo entre acreedores extranjeros y colombianos dentro del proceso.",
        "La Registraduría organiza las elecciones; el Consejo Nacional Electoral regula y vigila la financiación.",
        "Drag-along y tag-along son cláusulas estándar de acuerdos de accionistas que la SAS permite implementar con seguridad jurídica."
      ],
      "correcta": 3,
      "explicacion": "Drag-along y tag-along son cláusulas estándar de acuerdos de accionistas que la SAS permite implementar con seguridad jurídica."
    },
    {
      "pregunta": "Sobre \"Gobierno corporativo avanzado en la SAS\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez.",
        "La Ley Estatutaria de Salud limita estrictamente los criterios para excluir un servicio del Plan de Beneficios.",
        "La veeduría ciudadana no requiere personería jurídica previa: basta el registro ante Personería o Cámara de Comercio.",
        "La SAS puede constituirse con un solo accionista y por documento privado, sin escritura pública en general."
      ],
      "correcta": 3,
      "explicacion": "La SAS puede constituirse con un solo accionista y por documento privado, sin escritura pública en general."
    }
  ],
  "regulacion-publicidad-electoral": [
    {
      "pregunta": "Sobre \"Regulación de la publicidad electoral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cerrar formalmente mediante liquidación simplificada evita que las deudas de una empresa abandonada informalmente persistan indefinidamente.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El principio de kompetenz-kompetenz permite al tribunal decidir primero sobre su propia competencia.",
        "El Estado garantiza espacios gratuitos de propaganda electoral en medios que usan el espectro electromagnético."
      ],
      "correcta": 3,
      "explicacion": "El Estado garantiza espacios gratuitos de propaganda electoral en medios que usan el espectro electromagnético."
    },
    {
      "pregunta": "Sobre \"Regulación de la publicidad electoral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "Las plataformas de streaming pagan mediante licencias masivas con reparto fraccionado, no venta de copias individuales.",
        "Drag-along y tag-along son cláusulas estándar de acuerdos de accionistas que la SAS permite implementar con seguridad jurídica.",
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales."
      ],
      "correcta": 3,
      "explicacion": "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales."
    },
    {
      "pregunta": "Sobre \"Regulación de la publicidad electoral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El GDPR europeo puede aplicar a empresas colombianas que ofrezcan servicios a personas en la UE.",
        "El Consejo de Estado resuelve nulidades electorales y declara la pérdida de investidura de congresistas.",
        "El exequátur no revisa el fondo del asunto: verifica requisitos formales como notificación y orden público.",
        "La Ley de Garantías Electorales restringe la publicidad oficial y ciertos contratos estatales antes de una elección."
      ],
      "correcta": 3,
      "explicacion": "La Ley de Garantías Electorales restringe la publicidad oficial y ciertos contratos estatales antes de una elección."
    }
  ],
  "cooperativas-trabajo-asociado": [
    {
      "pregunta": "Sobre \"Cooperativas de trabajo asociado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El establecimiento permanente puede generar tributación en Colombia sin sociedad local constituida.",
        "El artículo 90 responsabiliza al Estado por daños antijurídicos que causen sus autoridades.",
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales.",
        "En una CTA, el asociado es simultáneamente trabajador y copropietario, sin contrato de trabajo tradicional."
      ],
      "correcta": 3,
      "explicacion": "En una CTA, el asociado es simultáneamente trabajador y copropietario, sin contrato de trabajo tradicional."
    },
    {
      "pregunta": "Sobre \"Cooperativas de trabajo asociado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Sin capitulaciones, el matrimonio genera automáticamente sociedad conyugal, repartible por mitades al terminar.",
        "La Corte puede modular los efectos temporales de sus sentencias de inexequibilidad.",
        "La claridad para el lector es tan importante como la corrección jurídica.",
        "La figura fue históricamente usada para evadir obligaciones laborales, lo que motivó reformas que la restringieron."
      ],
      "correcta": 3,
      "explicacion": "La figura fue históricamente usada para evadir obligaciones laborales, lo que motivó reformas que la restringieron."
    },
    {
      "pregunta": "Sobre \"Cooperativas de trabajo asociado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "La unión marital de hecho genera sociedad patrimonial, con lógica similar pero acreditación distinta a la conyugal.",
        "La SAS permite diseñar libremente su estructura de gobierno, con pocas normas imperativas frente a otros tipos societarios.",
        "La primacía de la realidad permite declarar contrato de trabajo real si había subordinación típica encubierta."
      ],
      "correcta": 3,
      "explicacion": "La primacía de la realidad permite declarar contrato de trabajo real si había subordinación típica encubierta."
    }
  ],
  "patrimonio-familia-afectacion-vivienda-detalle": [
    {
      "pregunta": "Sobre \"Patrimonio de familia y afectación a vivienda familiar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El patrimonio de familia protege de embargos posteriores a su constitución, no de deudas o hipotecas previas."
      ],
      "correcta": 3,
      "explicacion": "El patrimonio de familia protege de embargos posteriores a su constitución, no de deudas o hipotecas previas."
    },
    {
      "pregunta": "Sobre \"Patrimonio de familia y afectación a vivienda familiar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La responsabilidad médica es, como regla general, de medios (diligencia), no de resultado (curar).",
        "Las capitulaciones matrimoniales deben pactarse antes de casarse, mediante escritura pública.",
        "El conocimiento de embarque es recibo, prueba de contrato y título negociable de la mercancía a la vez.",
        "La afectación a vivienda familiar exige el consentimiento de ambos cónyuges para vender o hipotecar, aunque uno solo figure como dueño."
      ],
      "correcta": 3,
      "explicacion": "La afectación a vivienda familiar exige el consentimiento de ambos cónyuges para vender o hipotecar, aunque uno solo figure como dueño."
    },
    {
      "pregunta": "Sobre \"Patrimonio de familia y afectación a vivienda familiar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "Una misma publicidad engañosa puede generar responsabilidad de consumo y de competencia desleal a la vez.",
        "La compra de acciones hereda todos los pasivos de la empresa; la compra de activos, solo los asumidos.",
        "Ambas figuras suelen combinarse sobre el mismo inmueble para proteger frente a riesgos distintos y complementarios."
      ],
      "correcta": 3,
      "explicacion": "Ambas figuras suelen combinarse sobre el mismo inmueble para proteger frente a riesgos distintos y complementarios."
    }
  ],
  "alianzas-publico-privadas-infraestructura": [
    {
      "pregunta": "Sobre \"Alianzas Público-Privadas (APP) en infraestructura\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un marketplace con rol activo (inventario, pago, logística) tiende a asumir mayor responsabilidad que uno meramente pasivo.",
        "Las tarifas y beneficios tributarios territoriales varían significativamente entre cada municipio o departamento.",
        "Los documentos en idioma extranjero suelen requerir además traducción oficial para surtir efectos en Colombia.",
        "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla."
      ],
      "correcta": 3,
      "explicacion": "En una APP, el privado financia y opera la infraestructura, y el Estado paga por disponibilidad y desempeño, no solo por construirla."
    },
    {
      "pregunta": "Sobre \"Alianzas Público-Privadas (APP) en infraestructura\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal.",
        "La revisoría fiscal es obligatoria para sociedades anónimas y para quienes superen ciertos umbrales de tamaño.",
        "La primacía de la realidad permite declarar contrato de trabajo real si había subordinación típica encubierta.",
        "Existen APP de iniciativa pública (licitadas por el Estado) y de iniciativa privada (propuestas por un privado)."
      ],
      "correcta": 3,
      "explicacion": "Existen APP de iniciativa pública (licitadas por el Estado) y de iniciativa privada (propuestas por un privado)."
    },
    {
      "pregunta": "Sobre \"Alianzas Público-Privadas (APP) en infraestructura\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El principio de especialidad limita el juzgamiento en el país receptor solo a los delitos autorizados en la extradición.",
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia.",
        "El control fiscal vigila que los pagos futuros comprometidos en estos contratos no comprometan la sostenibilidad fiscal del país."
      ],
      "correcta": 3,
      "explicacion": "El control fiscal vigila que los pagos futuros comprometidos en estos contratos no comprometan la sostenibilidad fiscal del país."
    }
  ],
  "responsabilidad-plataformas-digitales-intermediarios": [
    {
      "pregunta": "Sobre \"Responsabilidad de plataformas digitales e intermediarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Distinción, proporcionalidad y precaución son los principios centrales del DIH aplicado al conflicto armado.",
        "Las cláusulas contractuales tipo son el mecanismo más usado para habilitar transferencias internacionales.",
        "Nadie puede ser condenado sin pruebas que lo demuestren (necesidad de la prueba).",
        "Colombia no tiene ley integral de responsabilidad de plataformas; se aplican principios generales de responsabilidad civil."
      ],
      "correcta": 3,
      "explicacion": "Colombia no tiene ley integral de responsabilidad de plataformas; se aplican principios generales de responsabilidad civil."
    },
    {
      "pregunta": "Sobre \"Responsabilidad de plataformas digitales e intermediarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acción de cumplimiento exige constituir en renuencia a la autoridad antes de acudir al juez.",
        "Dworkin: el derecho incluye principios, no solo reglas, y eso amplía el rol judicial.",
        "El consentimiento del Estado a arbitraje de inversión suele darse por anticipado en un tratado, no caso por caso.",
        "El estándar dominante es responsabilidad tras notificación: la plataforma debe retirar diligentemente lo notificado como ilícito."
      ],
      "correcta": 3,
      "explicacion": "El estándar dominante es responsabilidad tras notificación: la plataforma debe retirar diligentemente lo notificado como ilícito."
    },
    {
      "pregunta": "Sobre \"Responsabilidad de plataformas digitales e intermediarios\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las garantías mobiliarias se rigen hoy por un registro centralizado, con prelación por orden de inscripción.",
        "Distinción, proporcionalidad y precaución son los principios centrales del DIH aplicado al conflicto armado.",
        "Apartarse sin justificar puede dar lugar a tutela contra providencias judiciales.",
        "Un marketplace con rol activo (inventario, pago, logística) tiende a asumir mayor responsabilidad que uno meramente pasivo."
      ],
      "correcta": 3,
      "explicacion": "Un marketplace con rol activo (inventario, pago, logística) tiende a asumir mayor responsabilidad que uno meramente pasivo."
    }
  ],
  "insolvencia-mipymes-liquidacion-simplificada": [
    {
      "pregunta": "Sobre \"Insolvencia y liquidación simplificada de MIPYMES\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Copiar cláusulas de otros contratos sin adaptarlas genera ambigüedades costosas después.",
        "La Ley 1273 de 2009 tipificó los principales delitos informáticos en Colombia.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Existen procedimientos de insolvencia simplificados para MIPYMES, incluso ante las Cámaras de Comercio."
      ],
      "correcta": 3,
      "explicacion": "Existen procedimientos de insolvencia simplificados para MIPYMES, incluso ante las Cámaras de Comercio."
    },
    {
      "pregunta": "Sobre \"Insolvencia y liquidación simplificada de MIPYMES\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El transportador marítimo puede limitar su responsabilidad, salvo dolo o temeridad probada.",
        "La acción de repetición permite al Estado recuperar lo pagado del agente responsable.",
        "El régimen de inhabilidades se interpreta restrictivamente por limitar el derecho fundamental a ser elegido.",
        "La confusión patrimonial entre el dueño y la empresa complica frecuentemente estos procesos en negocios poco formalizados."
      ],
      "correcta": 3,
      "explicacion": "La confusión patrimonial entre el dueño y la empresa complica frecuentemente estos procesos en negocios poco formalizados."
    },
    {
      "pregunta": "Sobre \"Insolvencia y liquidación simplificada de MIPYMES\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los acreedores tienen derecho de oposición si la operación puede afectar su garantía patrimonial.",
        "La JEP, la justicia ordinaria y la penal militar pueden competir por competencia sobre agentes del Estado.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "Cerrar formalmente mediante liquidación simplificada evita que las deudas de una empresa abandonada informalmente persistan indefinidamente."
      ],
      "correcta": 3,
      "explicacion": "Cerrar formalmente mediante liquidación simplificada evita que las deudas de una empresa abandonada informalmente persistan indefinidamente."
    }
  ],
  "hipoteca-garantias-inmobiliarias-profundidad": [
    {
      "pregunta": "Sobre \"Hipoteca y garantías reales sobre inmuebles en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La consulta previa a comunidades étnicas es, junto a la licencia ambiental, requisito clave para proyectos extractivos.",
        "La Corte distingue bloque en sentido estricto y en sentido amplio.",
        "El recurso de anulación contra un laudo es procesal, no revisa el fondo de la decisión.",
        "El acreedor hipotecario debe rematar el inmueble judicialmente, no puede apropiárselo directamente por incumplimiento."
      ],
      "correcta": 3,
      "explicacion": "El acreedor hipotecario debe rematar el inmueble judicialmente, no puede apropiárselo directamente por incumplimiento."
    },
    {
      "pregunta": "Sobre \"Hipoteca y garantías reales sobre inmuebles en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SARLAFT y la Ley 1778/2016 son pilares del compliance en Colombia.",
        "El delito penal ambiental exige afectación grave y significativa, más allá de un simple incumplimiento normativo.",
        "El lavado de activos es autónomo: se puede condenar sin sentencia previa por el delito fuente.",
        "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago."
      ],
      "correcta": 3,
      "explicacion": "Sin registro en el folio de matrícula, la hipoteca no es oponible a terceros ni da preferencia especial de pago."
    },
    {
      "pregunta": "Sobre \"Hipoteca y garantías reales sobre inmuebles en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Esta app da una base conceptual sólida, no reemplaza el título ni la habilitación legal.",
        "En materia ambiental se presume la culpa del infractor, quien debe probar su diligencia para exonerarse.",
        "La evidencia digital obtenida sin cumplir requisitos legales puede excluirse como prueba ilícita, sin importar su relevancia.",
        "El orden de prelación entre varias hipotecas sobre el mismo inmueble lo determina el orden de inscripción registral."
      ],
      "correcta": 3,
      "explicacion": "El orden de prelación entre varias hipotecas sobre el mismo inmueble lo determina el orden de inscripción registral."
    }
  ],
  "escision-transformacion-societaria": [
    {
      "pregunta": "Sobre \"Escisión y transformación societaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Ejercer legalmente exige título universitario en Derecho + tarjeta profesional del Consejo Superior de la Judicatura.",
        "El predial grava la propiedad de inmuebles según avalúo catastral; el ICA grava actividades económicas por ingresos brutos.",
        "El secreto profesional se mantiene incluso después de terminado el caso.",
        "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original."
      ],
      "correcta": 3,
      "explicacion": "La escisión transfiere parte del patrimonio a otra sociedad, sin necesariamente liquidar la sociedad original."
    },
    {
      "pregunta": "Sobre \"Escisión y transformación societaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La publicidad electoral digital microsegmentada es más difícil de fiscalizar que la de medios tradicionales.",
        "BIC es una calificación adicional voluntaria, no un nuevo tipo societario: sigue siendo una SAS, Ltda., etc.",
        "La apostilla simplifica el reconocimiento de documentos entre países parte del Convenio de La Haya de 1961.",
        "La transformación cambia el tipo societario sin disolver la sociedad ni afectar sus contratos, activos o antigüedad."
      ],
      "correcta": 3,
      "explicacion": "La transformación cambia el tipo societario sin disolver la sociedad ni afectar sus contratos, activos o antigüedad."
    },
    {
      "pregunta": "Sobre \"Escisión y transformación societaria\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El certificado de existencia y representación es clave para verificar facultades antes de contratar.",
        "Escrow, earn-out y seguro de garantías son mecanismos para repartir el riesgo post-cierre.",
        "El derecho disciplinario protege la función pública misma, no bienes jurídicos individuales como el derecho penal.",
        "Los acreedores tienen derecho de oposición si la operación puede afectar su garantía patrimonial."
      ],
      "correcta": 3,
      "explicacion": "Los acreedores tienen derecho de oposición si la operación puede afectar su garantía patrimonial."
    }
  ],
  "prescripcion-caducidad-profundidad": [
    {
      "pregunta": "Sobre \"Prescripción y caducidad en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La consulta debe ser previa, libre, informada y de buena fe, aunque no equivale a un veto absoluto.",
        "Existe un diálogo judicial bidireccional entre la Corte Constitucional y la Corte IDH.",
        "SECOP permite rastrear públicamente el ciclo completo de cualquier contrato estatal colombiano.",
        "La prescripción puede interrumpirse o suspenderse; la caducidad corre de forma objetiva e inexorable."
      ],
      "correcta": 3,
      "explicacion": "La prescripción puede interrumpirse o suspenderse; la caducidad corre de forma objetiva e inexorable."
    },
    {
      "pregunta": "Sobre \"Prescripción y caducidad en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "SUIN-Juriscol mantiene actualizado el estado de los códigos.",
        "La revisión anula sentencias en firme solo en causales taxativas.",
        "Los conflictos de interés deben evitarse o revelarse claramente.",
        "Los plazos de prescripción varían según el tipo de acción: diez años civil ordinaria, cinco ejecutiva, entre otros."
      ],
      "correcta": 3,
      "explicacion": "Los plazos de prescripción varían según el tipo de acción: diez años civil ordinaria, cinco ejecutiva, entre otros."
    },
    {
      "pregunta": "Sobre \"Prescripción y caducidad en profundidad\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Verifica siempre que la jurisprudencia citada siga vigente y aplique a los hechos del caso.",
        "El precedente de las altas cortes es vinculante, no solo orientativo.",
        "El riesgo sistémico —el contagio entre entidades interconectadas— justifica la regulación financiera reforzada.",
        "La prescripción debe alegarse por la parte interesada; la caducidad el juez debe verificarla de oficio."
      ],
      "correcta": 3,
      "explicacion": "La prescripción debe alegarse por la parte interesada; la caducidad el juez debe verificarla de oficio."
    }
  ],
  "elegir-universidad-derecho": [
    {
      "pregunta": "Sobre \"Cómo elegir una universidad de Derecho acreditada\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consultorio jurídico suele ser la primera experiencia real con casos y clientes, no solo teoría.",
        "Sigue la jerarquía de fuentes: norma vigente, luego jurisprudencia de altas cortes, y después doctrina.",
        "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente.",
        "Verifica el Registro Calificado del programa en el SNIES antes de matricularte: es lo mínimo legalmente exigible."
      ],
      "correcta": 3,
      "explicacion": "Verifica el Registro Calificado del programa en el SNIES antes de matricularte: es lo mínimo legalmente exigible."
    },
    {
      "pregunta": "Sobre \"Cómo elegir una universidad de Derecho acreditada\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Si emprendes, separa desde el día uno las finanzas personales de las del negocio.",
        "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan.",
        "Un mentor no necesita un título rimbombante: cualquier abogado con más experiencia y buena disposición sirve.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio."
      ],
      "correcta": 3,
      "explicacion": "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio."
    },
    {
      "pregunta": "Sobre \"Cómo elegir una universidad de Derecho acreditada\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El consultorio jurídico suele ser la primera experiencia real con casos y clientes, no solo teoría.",
        "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios.",
        "Muchas firmas valoran explícitamente el compromiso pro bono al evaluar candidatos y empleados.",
        "Revisa resultados en Saber Pro, convenios de práctica y bolsa de empleo antes de decidir."
      ],
      "correcta": 3,
      "explicacion": "Revisa resultados en Saber Pro, convenios de práctica y bolsa de empleo antes de decidir."
    }
  ],
  "plan-estudios-tipico-derecho": [
    {
      "pregunta": "Sobre \"El plan de estudios típico de la carrera de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La tarjeta profesional, no el diploma universitario por sí solo, es lo que habilita legalmente para litigar.",
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico."
      ],
      "correcta": 3,
      "explicacion": "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico."
    },
    {
      "pregunta": "Sobre \"El plan de estudios típico de la carrera de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Separa la narración objetiva de los hechos de su calificación jurídica; no los mezcles desde el inicio.",
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo.",
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "El consultorio jurídico suele ser la primera experiencia real con casos y clientes, no solo teoría."
      ],
      "correcta": 3,
      "explicacion": "El consultorio jurídico suele ser la primera experiencia real con casos y clientes, no solo teoría."
    },
    {
      "pregunta": "Sobre \"El plan de estudios típico de la carrera de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Litigio y práctica consultiva son dos estilos de ejercicio muy distintos: pruébalos antes de especializarte.",
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir."
      ],
      "correcta": 3,
      "explicacion": "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir."
    }
  ],
  "practicas-consultorio-primer-contacto": [
    {
      "pregunta": "Sobre \"Prácticas y primeros pasos profesionales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios.",
        "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad."
      ],
      "correcta": 3,
      "explicacion": "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad."
    },
    {
      "pregunta": "Sobre \"Prácticas y primeros pasos profesionales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Ganar experiencia previa en otra organización enseña gestión operativa que es costosa de aprender ya con tu propio negocio en juego.",
        "Las prácticas judiciales dan una perspectiva única de cómo se deciden realmente los casos."
      ],
      "correcta": 3,
      "explicacion": "Las prácticas judiciales dan una perspectiva única de cómo se deciden realmente los casos."
    },
    {
      "pregunta": "Sobre \"Prácticas y primeros pasos profesionales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Ganar experiencia previa en otra organización enseña gestión operativa que es costosa de aprender ya con tu propio negocio en juego.",
        "Participar en asociaciones gremiales desde estudiante es una forma accesible de empezar a construir esa red.",
        "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático.",
        "Guarda evidencia tangible de tu trabajo (escritos, casos, concursos) desde los primeros semestres."
      ],
      "correcta": 3,
      "explicacion": "Guarda evidencia tangible de tu trabajo (escritos, casos, concursos) desde los primeros semestres."
    }
  ],
  "judicatura-saber-pro-derecho": [
    {
      "pregunta": "Sobre \"La judicatura y el examen Saber Pro de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia.",
        "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión.",
        "La mayoría de casos se resuelven negociados, no en sentencia: la negociación es una habilidad transversal clave.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades."
      ],
      "correcta": 3,
      "explicacion": "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades."
    },
    {
      "pregunta": "Sobre \"La judicatura y el examen Saber Pro de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Existen varios modelos de cobro (hora, fijo, cuota litis) según el tipo de trabajo y el riesgo que quieras compartir.",
        "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer."
      ],
      "correcta": 3,
      "explicacion": "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer."
    },
    {
      "pregunta": "Sobre \"La judicatura y el examen Saber Pro de Derecho\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo.",
        "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan.",
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe."
      ],
      "correcta": 3,
      "explicacion": "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe."
    }
  ],
  "tramite-tarjeta-profesional": [
    {
      "pregunta": "Sobre \"Tarjeta profesional: el trámite final para poder litigar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "Una primera lectura rápida de estructura general hace mucho más eficiente la lectura detallada posterior.",
        "La tarjeta profesional, no el diploma universitario por sí solo, es lo que habilita legalmente para litigar."
      ],
      "correcta": 3,
      "explicacion": "La tarjeta profesional, no el diploma universitario por sí solo, es lo que habilita legalmente para litigar."
    },
    {
      "pregunta": "Sobre \"Tarjeta profesional: el trámite final para poder litigar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La carrera judicial exige superar concursos de méritos y cumplir requisitos crecientes según el nivel del cargo.",
        "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo.",
        "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan.",
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central."
      ],
      "correcta": 3,
      "explicacion": "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central."
    },
    {
      "pregunta": "Sobre \"Tarjeta profesional: el trámite final para poder litigar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Investiga quién enseña realmente el programa y qué dicen los egresados, más allá del prestigio de la institución.",
        "Marcar límites firmes ante exigencias poco éticas protege tu integridad y reputación, incluso si pierdes al cliente.",
        "El primer año trae más trabajo de soporte del esperado, antes de autonomía real sobre decisiones estratégicas.",
        "La tarjeta profesional queda sujeta al régimen disciplinario: puede suspenderse o cancelarse por faltas graves."
      ],
      "correcta": 3,
      "explicacion": "La tarjeta profesional queda sujeta al régimen disciplinario: puede suspenderse o cancelarse por faltas graves."
    }
  ],
  "elegir-especializacion-enfoque": [
    {
      "pregunta": "Sobre \"Áreas de especialización: cómo elegir tu enfoque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Prioriza tu tiempo de revisión en las cláusulas de mayor riesgo, no en las más estandarizadas y de bajo riesgo.",
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente.",
        "Litigio y práctica consultiva son dos estilos de ejercicio muy distintos: pruébalos antes de especializarte."
      ],
      "correcta": 3,
      "explicacion": "Litigio y práctica consultiva son dos estilos de ejercicio muy distintos: pruébalos antes de especializarte."
    },
    {
      "pregunta": "Sobre \"Áreas de especialización: cómo elegir tu enfoque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado.",
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Laboral, comercial/societario, tributario y protección de datos tienen demanda constante en Colombia."
      ],
      "correcta": 3,
      "explicacion": "Laboral, comercial/societario, tributario y protección de datos tienen demanda constante en Colombia."
    },
    {
      "pregunta": "Sobre \"Áreas de especialización: cómo elegir tu enfoque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado.",
        "Participar en asociaciones gremiales desde estudiante es una forma accesible de empezar a construir esa red.",
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema."
      ],
      "correcta": 3,
      "explicacion": "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema."
    }
  ],
  "habilidades-esenciales-buen-abogado": [
    {
      "pregunta": "Sobre \"Habilidades esenciales de un buen abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Existen varios modelos de cobro (hora, fijo, cuota litis) según el tipo de trabajo y el riesgo que quieras compartir.",
        "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión.",
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro."
      ],
      "correcta": 3,
      "explicacion": "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro."
    },
    {
      "pregunta": "Sobre \"Habilidades esenciales de un buen abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros.",
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera."
      ],
      "correcta": 3,
      "explicacion": "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera."
    },
    {
      "pregunta": "Sobre \"Habilidades esenciales de un buen abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "La mayoría de casos se resuelven negociados, no en sentencia: la negociación es una habilidad transversal clave."
      ],
      "correcta": 3,
      "explicacion": "La mayoría de casos se resuelven negociados, no en sentencia: la negociación es una habilidad transversal clave."
    }
  ],
  "networking-asociaciones-gremiales": [
    {
      "pregunta": "Sobre \"Networking y asociaciones gremiales de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Recibir correcciones extensas es casi universal; lo relevante es no repetir el mismo error dos veces.",
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema.",
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse."
      ],
      "correcta": 3,
      "explicacion": "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse."
    },
    {
      "pregunta": "Sobre \"Networking y asociaciones gremiales de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "Las bases de datos jurídicas comerciales complementan las fuentes oficiales gratuitas con herramientas de búsqueda avanzada.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado.",
        "Participar en asociaciones gremiales desde estudiante es una forma accesible de empezar a construir esa red."
      ],
      "correcta": 3,
      "explicacion": "Participar en asociaciones gremiales desde estudiante es una forma accesible de empezar a construir esa red."
    },
    {
      "pregunta": "Sobre \"Networking y asociaciones gremiales de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado.",
        "Documentar tu proceso de búsqueda te permite retomarlo eficientemente y defender su exhaustividad después.",
        "Buscar apoyo ante señales tempranas de agotamiento es una decisión profesional legítima, no una debilidad.",
        "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir."
      ],
      "correcta": 3,
      "explicacion": "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir."
    }
  ],
  "herramientas-bases-datos-indispensables": [
    {
      "pregunta": "Sobre \"Herramientas y bases de datos jurídicas indispensables\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero.",
        "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica.",
        "Las bases de datos jurídicas comerciales complementan las fuentes oficiales gratuitas con herramientas de búsqueda avanzada."
      ],
      "correcta": 3,
      "explicacion": "Las bases de datos jurídicas comerciales complementan las fuentes oficiales gratuitas con herramientas de búsqueda avanzada."
    },
    {
      "pregunta": "Sobre \"Herramientas y bases de datos jurídicas indispensables\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer.",
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia.",
        "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión.",
        "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad."
      ],
      "correcta": 3,
      "explicacion": "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad."
    },
    {
      "pregunta": "Sobre \"Herramientas y bases de datos jurídicas indispensables\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios.",
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo.",
        "Perder un término procesal por desorganización es de los errores más costosos y evitables en la práctica."
      ],
      "correcta": 3,
      "explicacion": "Perder un término procesal por desorganización es de los errores más costosos y evitables en la práctica."
    }
  ],
  "alternativas-carrera-abogado": [
    {
      "pregunta": "Sobre \"Alternativas de carrera para un abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente.",
        "Lleva un registro escrito de hallazgos mientras lees, no confíes solo en la memoria para discutir el contrato después.",
        "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros."
      ],
      "correcta": 3,
      "explicacion": "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros."
    },
    {
      "pregunta": "Sobre \"Alternativas de carrera para un abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento.",
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "La carrera judicial exige superar concursos de méritos y cumplir requisitos crecientes según el nivel del cargo."
      ],
      "correcta": 3,
      "explicacion": "La carrera judicial exige superar concursos de méritos y cumplir requisitos crecientes según el nivel del cargo."
    },
    {
      "pregunta": "Sobre \"Alternativas de carrera para un abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema.",
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento.",
        "Emprender jurídicamente exige, además de derecho, habilidades de gestión de negocio que conviene aprender activamente."
      ],
      "correcta": 3,
      "explicacion": "Emprender jurídicamente exige, además de derecho, habilidades de gestión de negocio que conviene aprender activamente."
    }
  ],
  "hoja-vida-juridica-destacar": [
    {
      "pregunta": "Sobre \"Cómo redactar una hoja de vida jurídica que destaque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado.",
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera.",
        "Muestra evidencia concreta de logros, no solo una lista de materias o funciones genéricas."
      ],
      "correcta": 3,
      "explicacion": "Muestra evidencia concreta de logros, no solo una lista de materias o funciones genéricas."
    },
    {
      "pregunta": "Sobre \"Cómo redactar una hoja de vida jurídica que destaque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Adapta el énfasis de tu hoja de vida al tipo de rol específico al que aplicas."
      ],
      "correcta": 3,
      "explicacion": "Adapta el énfasis de tu hoja de vida al tipo de rol específico al que aplicas."
    },
    {
      "pregunta": "Sobre \"Cómo redactar una hoja de vida jurídica que destaque\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente.",
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia.",
        "Errores ortográficos o de formato descalifican de inmediato: se juzgan como reflejo de tu futuro trabajo."
      ],
      "correcta": 3,
      "explicacion": "Errores ortográficos o de formato descalifican de inmediato: se juzgan como reflejo de tu futuro trabajo."
    }
  ],
  "entrevistas-firmas-abogados": [
    {
      "pregunta": "Sobre \"Preparación para entrevistas en firmas de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La IA automatiza tareas mecánicas, pero aumenta —no reduce— la importancia del criterio de verificación del abogado.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Investiga quién enseña realmente el programa y qué dicen los egresados, más allá del prestigio de la institución.",
        "Las preguntas de comportamiento evalúan cómo razonas y actúas, no solo si sabes la norma exacta de memoria."
      ],
      "correcta": 3,
      "explicacion": "Las preguntas de comportamiento evalúan cómo razonas y actúas, no solo si sabes la norma exacta de memoria."
    },
    {
      "pregunta": "Sobre \"Preparación para entrevistas en firmas de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero.",
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Investigar la firma específica y llevar preguntas propias demuestra interés genuino, no una aplicación masiva."
      ],
      "correcta": 3,
      "explicacion": "Investigar la firma específica y llevar preguntas propias demuestra interés genuino, no una aplicación masiva."
    },
    {
      "pregunta": "Sobre \"Preparación para entrevistas en firmas de abogados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado.",
        "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento."
      ],
      "correcta": 3,
      "explicacion": "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento."
    }
  ],
  "moot-court-argumentacion-oral": [
    {
      "pregunta": "Sobre \"Moot court y concursos de argumentación oral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Aplicar a becas competitivas exige planificación con meses o años de anticipación, no de último momento.",
        "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir.",
        "Un moot court replica con fidelidad notable la presión y dinámica de un litigio real ante un juez."
      ],
      "correcta": 3,
      "explicacion": "Un moot court replica con fidelidad notable la presión y dinámica de un litigio real ante un juez."
    },
    {
      "pregunta": "Sobre \"Moot court y concursos de argumentación oral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las preguntas de comportamiento evalúan cómo razonas y actúas, no solo si sabes la norma exacta de memoria.",
        "La tarjeta profesional queda sujeta al régimen disciplinario: puede suspenderse o cancelarse por faltas graves.",
        "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático.",
        "Defender el lado del caso que te asignaron, no el que prefieres, desarrolla flexibilidad argumentativa real."
      ],
      "correcta": 3,
      "explicacion": "Defender el lado del caso que te asignaron, no el que prefieres, desarrolla flexibilidad argumentativa real."
    },
    {
      "pregunta": "Sobre \"Moot court y concursos de argumentación oral\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La mayoría de casos se resuelven negociados, no en sentencia: la negociación es una habilidad transversal clave.",
        "La reputación que construyes con todo el equipo, no solo con tus jefes, influye en tus oportunidades futuras.",
        "Los primeros clientes casi siempre llegan por tu red existente, no por publicidad general desde el día uno.",
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas."
      ],
      "correcta": 3,
      "explicacion": "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas."
    }
  ],
  "primer-escrito-judicial-errores-comunes": [
    {
      "pregunta": "Sobre \"Tu primer escrito judicial: errores comunes que evitar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "Establecer canales y frecuencia de comunicación claros desde el inicio previene buena parte de la fricción.",
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera.",
        "Separa la narración objetiva de los hechos de su calificación jurídica; no los mezcles desde el inicio."
      ],
      "correcta": 3,
      "explicacion": "Separa la narración objetiva de los hechos de su calificación jurídica; no los mezcles desde el inicio."
    },
    {
      "pregunta": "Sobre \"Tu primer escrito judicial: errores comunes que evitar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Detalles logísticos (llegar temprano, conocer el protocolo de la sala) marcan una diferencia real en la práctica.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Perder un término procesal por desorganización es de los errores más costosos y evitables en la práctica.",
        "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan."
      ],
      "correcta": 3,
      "explicacion": "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan."
    },
    {
      "pregunta": "Sobre \"Tu primer escrito judicial: errores comunes que evitar\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento.",
        "La carrera judicial exige superar concursos de méritos y cumplir requisitos crecientes según el nivel del cargo.",
        "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real.",
        "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua."
      ],
      "correcta": 3,
      "explicacion": "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua."
    }
  ],
  "finanzas-personales-abogado-recien-graduado": [
    {
      "pregunta": "Sobre \"Finanzas personales para un abogado recién graduado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "La abogacía tiene tasas documentadamente altas de ansiedad y burnout por factores estructurales del oficio.",
        "Aplicar a becas competitivas exige planificación con meses o años de anticipación, no de último momento.",
        "Entiende a fondo las condiciones de tu crédito educativo antes de graduarte, no después."
      ],
      "correcta": 3,
      "explicacion": "Entiende a fondo las condiciones de tu crédito educativo antes de graduarte, no después."
    },
    {
      "pregunta": "Sobre \"Finanzas personales para un abogado recién graduado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo.",
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente.",
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "Construye un fondo de emergencia desde el primer ingreso, sin ajustar tu estilo de vida al ingreso futuro esperado."
      ],
      "correcta": 3,
      "explicacion": "Construye un fondo de emergencia desde el primer ingreso, sin ajustar tu estilo de vida al ingreso futuro esperado."
    },
    {
      "pregunta": "Sobre \"Finanzas personales para un abogado recién graduado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Lleva un registro escrito de hallazgos mientras lees, no confíes solo en la memoria para discutir el contrato después.",
        "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros.",
        "Si emprendes, separa desde el día uno las finanzas personales de las del negocio."
      ],
      "correcta": 3,
      "explicacion": "Si emprendes, separa desde el día uno las finanzas personales de las del negocio."
    }
  ],
  "fijar-tarifas-ejercicio-independiente": [
    {
      "pregunta": "Sobre \"Cómo fijar tarifas si vas a ejercer de forma independiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El síndrome del impostor es común en el primer año y no refleja tu competencia real.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático.",
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo."
      ],
      "correcta": 3,
      "explicacion": "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo."
    },
    {
      "pregunta": "Sobre \"Cómo fijar tarifas si vas a ejercer de forma independiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Acercarte con una pregunta específica y bien pensada funciona mejor que un pedido genérico de mentoría.",
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido.",
        "Un pronóstico excesivamente optimista, aunque técnicamente bien fundado, puede dañar la confianza si el resultado cambia.",
        "Existen varios modelos de cobro (hora, fijo, cuota litis) según el tipo de trabajo y el riesgo que quieras compartir."
      ],
      "correcta": 3,
      "explicacion": "Existen varios modelos de cobro (hora, fijo, cuota litis) según el tipo de trabajo y el riesgo que quieras compartir."
    },
    {
      "pregunta": "Sobre \"Cómo fijar tarifas si vas a ejercer de forma independiente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Marcar límites firmes ante exigencias poco éticas protege tu integridad y reputación, incluso si pierdes al cliente.",
        "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento.",
        "Muchas firmas valoran explícitamente el compromiso pro bono al evaluar candidatos y empleados.",
        "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios."
      ],
      "correcta": 3,
      "explicacion": "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios."
    }
  ],
  "salud-mental-estres-abogacia": [
    {
      "pregunta": "Sobre \"Salud mental y manejo del estrés en la abogacía\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Redactar activamente en inglés jurídico desarrolla una habilidad más valiosa que solo leer o traducir pasivamente.",
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas.",
        "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad.",
        "La abogacía tiene tasas documentadamente altas de ansiedad y burnout por factores estructurales del oficio."
      ],
      "correcta": 3,
      "explicacion": "La abogacía tiene tasas documentadamente altas de ansiedad y burnout por factores estructurales del oficio."
    },
    {
      "pregunta": "Sobre \"Salud mental y manejo del estrés en la abogacía\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento.",
        "Si emprendes, separa desde el día uno las finanzas personales de las del negocio.",
        "Verifica siempre que la jurisprudencia citada siga vigente y que los hechos del precedente realmente coincidan.",
        "Buscar apoyo ante señales tempranas de agotamiento es una decisión profesional legítima, no una debilidad."
      ],
      "correcta": 3,
      "explicacion": "Buscar apoyo ante señales tempranas de agotamiento es una decisión profesional legítima, no una debilidad."
    },
    {
      "pregunta": "Sobre \"Salud mental y manejo del estrés en la abogacía\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Investigar la firma específica y llevar preguntas propias demuestra interés genuino, no una aplicación masiva.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Buscar prácticas adicionales al consultorio jurídico obligatorio mejora significativamente tu empleabilidad.",
        "Construir hábitos sostenibles desde el inicio es más efectivo que corregir años de sobrecarga acumulada después."
      ],
      "correcta": 3,
      "explicacion": "Construir hábitos sostenibles desde el inicio es más efectivo que corregir años de sobrecarga acumulada después."
    }
  ],
  "marca-personal-abogado-linkedin": [
    {
      "pregunta": "Sobre \"Construir tu marca personal como abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real."
      ],
      "correcta": 3,
      "explicacion": "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real."
    },
    {
      "pregunta": "Sobre \"Construir tu marca personal como abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El ingreso al sector público por concurso de méritos exige una preparación específica y con anticipación propia.",
        "Construir hábitos sostenibles desde el inicio es más efectivo que corregir años de sobrecarga acumulada después.",
        "Emprender jurídicamente exige, además de derecho, habilidades de gestión de negocio que conviene aprender activamente.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado."
      ],
      "correcta": 3,
      "explicacion": "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado."
    },
    {
      "pregunta": "Sobre \"Construir tu marca personal como abogado\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero."
      ],
      "correcta": 3,
      "explicacion": "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero."
    }
  ],
  "maestrias-especializaciones-cuando": [
    {
      "pregunta": "Sobre \"Maestrías y especializaciones: cuándo y por qué hacerlas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Certificaciones específicas de legal English dan una señal más precisa a reclutadores que un nivel de inglés genérico.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Perder un término procesal por desorganización es de los errores más costosos y evitables en la práctica.",
        "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica."
      ],
      "correcta": 3,
      "explicacion": "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica."
    },
    {
      "pregunta": "Sobre \"Maestrías y especializaciones: cuándo y por qué hacerlas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir.",
        "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real.",
        "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad.",
        "Ganar experiencia práctica antes de especializarte te da preguntas reales y criterio propio para el posgrado."
      ],
      "correcta": 3,
      "explicacion": "Ganar experiencia práctica antes de especializarte te da preguntas reales y criterio propio para el posgrado."
    },
    {
      "pregunta": "Sobre \"Maestrías y especializaciones: cuándo y por qué hacerlas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Investiga quién enseña realmente el programa y qué dicen los egresados, más allá del prestigio de la institución."
      ],
      "correcta": 3,
      "explicacion": "Investiga quién enseña realmente el programa y qué dicen los egresados, más allá del prestigio de la institución."
    }
  ],
  "oportunidades-internacionales-llm": [
    {
      "pregunta": "Sobre \"Oportunidades internacionales: LLM y pasantías en el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica.",
        "Saber buscar jurisprudencia eficientemente es una habilidad técnica que conviene practicar desde la universidad.",
        "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente.",
        "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático."
      ],
      "correcta": 3,
      "explicacion": "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático."
    },
    {
      "pregunta": "Sobre \"Oportunidades internacionales: LLM y pasantías en el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia.",
        "Aplicar a becas competitivas exige planificación con meses o años de anticipación, no de último momento."
      ],
      "correcta": 3,
      "explicacion": "Aplicar a becas competitivas exige planificación con meses o años de anticipación, no de último momento."
    },
    {
      "pregunta": "Sobre \"Oportunidades internacionales: LLM y pasantías en el exterior\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas.",
        "Una primera lectura rápida de estructura general hace mucho más eficiente la lectura detallada posterior.",
        "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo."
      ],
      "correcta": 3,
      "explicacion": "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo."
    }
  ],
  "encontrar-aprovechar-mentor": [
    {
      "pregunta": "Sobre \"Mentoría: cómo encontrar y aprovechar un mentor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Un mentor no necesita un título rimbombante: cualquier abogado con más experiencia y buena disposición sirve."
      ],
      "correcta": 3,
      "explicacion": "Un mentor no necesita un título rimbombante: cualquier abogado con más experiencia y buena disposición sirve."
    },
    {
      "pregunta": "Sobre \"Mentoría: cómo encontrar y aprovechar un mentor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real.",
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "Practica en voz alta, no solo mentalmente: la primera vez hablado siempre es más torpe que la segunda.",
        "Acercarte con una pregunta específica y bien pensada funciona mejor que un pedido genérico de mentoría."
      ],
      "correcta": 3,
      "explicacion": "Acercarte con una pregunta específica y bien pensada funciona mejor que un pedido genérico de mentoría."
    },
    {
      "pregunta": "Sobre \"Mentoría: cómo encontrar y aprovechar un mentor\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera.",
        "Existen varios modelos de cobro (hora, fijo, cuota litis) según el tipo de trabajo y el riesgo que quieras compartir.",
        "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento.",
        "Mostrar que implementaste los consejos recibidos es lo que sostiene una relación de mentoría en el tiempo."
      ],
      "correcta": 3,
      "explicacion": "Mostrar que implementaste los consejos recibidos es lo que sostiene una relación de mentoría en el tiempo."
    }
  ],
  "etica-dilemas-abogado-joven": [
    {
      "pregunta": "Sobre \"Ética en la práctica diaria: dilemas comunes del abogado joven\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "Los dilemas éticos reales del día a día suelen ser sutiles, no los casos extremos que se estudian en clase."
      ],
      "correcta": 3,
      "explicacion": "Los dilemas éticos reales del día a día suelen ser sutiles, no los casos extremos que se estudian en clase."
    },
    {
      "pregunta": "Sobre \"Ética en la práctica diaria: dilemas comunes del abogado joven\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "La confianza en los fundamentos combinada con humildad para preguntar funciona mejor que fingir certeza.",
        "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente."
      ],
      "correcta": 3,
      "explicacion": "Documentar por escrito tus objeciones ante presión cuestionable te protege profesionalmente."
    },
    {
      "pregunta": "Sobre \"Ética en la práctica diaria: dilemas comunes del abogado joven\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La mayoría de casos se resuelven negociados, no en sentencia: la negociación es una habilidad transversal clave.",
        "Un moot court replica con fidelidad notable la presión y dinámica de un litigio real ante un juez.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente."
      ],
      "correcta": 3,
      "explicacion": "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente."
    }
  ],
  "preparacion-primera-audiencia": [
    {
      "pregunta": "Sobre \"Cómo prepararte para tu primera audiencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Ganar experiencia previa en otra organización enseña gestión operativa que es costosa de aprender ya con tu propio negocio en juego.",
        "El síndrome del impostor es común en el primer año y no refleja tu competencia real.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Conocer las debilidades de tu propio caso, no solo sus fortalezas, es la preparación más importante."
      ],
      "correcta": 3,
      "explicacion": "Conocer las debilidades de tu propio caso, no solo sus fortalezas, es la preparación más importante."
    },
    {
      "pregunta": "Sobre \"Cómo prepararte para tu primera audiencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente.",
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "Practica en voz alta, no solo mentalmente: la primera vez hablado siempre es más torpe que la segunda."
      ],
      "correcta": 3,
      "explicacion": "Practica en voz alta, no solo mentalmente: la primera vez hablado siempre es más torpe que la segunda."
    },
    {
      "pregunta": "Sobre \"Cómo prepararte para tu primera audiencia\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer.",
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Detalles logísticos (llegar temprano, conocer el protocolo de la sala) marcan una diferencia real en la práctica."
      ],
      "correcta": 3,
      "explicacion": "Detalles logísticos (llegar temprano, conocer el protocolo de la sala) marcan una diferencia real en la práctica."
    }
  ],
  "errores-comunes-abogados-recien-graduados": [
    {
      "pregunta": "Sobre \"Errores comunes de los abogados recién graduados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Separa la narración objetiva de los hechos de su calificación jurídica; no los mezcles desde el inicio.",
        "Si emprendes, separa desde el día uno las finanzas personales de las del negocio.",
        "Sigue la jerarquía de fuentes: norma vigente, luego jurisprudencia de altas cortes, y después doctrina.",
        "La confianza en los fundamentos combinada con humildad para preguntar funciona mejor que fingir certeza."
      ],
      "correcta": 3,
      "explicacion": "La confianza en los fundamentos combinada con humildad para preguntar funciona mejor que fingir certeza."
    },
    {
      "pregunta": "Sobre \"Errores comunes de los abogados recién graduados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua.",
        "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo.",
        "Comunica en probabilidades y escenarios, no en promesas absolutas sobre el resultado de un caso.",
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada."
      ],
      "correcta": 3,
      "explicacion": "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada."
    },
    {
      "pregunta": "Sobre \"Errores comunes de los abogados recién graduados\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia.",
        "Conocer las debilidades de tu propio caso, no solo sus fortalezas, es la preparación más importante.",
        "El ingreso al sector público por concurso de méritos exige una preparación específica y con anticipación propia.",
        "La reputación que construyes con todo el equipo, no solo con tus jefes, influye en tus oportunidades futuras."
      ],
      "correcta": 3,
      "explicacion": "La reputación que construyes con todo el equipo, no solo con tus jefes, influye en tus oportunidades futuras."
    }
  ],
  "leer-entender-contrato-complejo-rapido": [
    {
      "pregunta": "Sobre \"Cómo leer y entender un contrato complejo rápidamente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido.",
        "El ingreso al sector público por concurso de méritos exige una preparación específica y con anticipación propia.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Una primera lectura rápida de estructura general hace mucho más eficiente la lectura detallada posterior."
      ],
      "correcta": 3,
      "explicacion": "Una primera lectura rápida de estructura general hace mucho más eficiente la lectura detallada posterior."
    },
    {
      "pregunta": "Sobre \"Cómo leer y entender un contrato complejo rápidamente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "La carrera judicial exige superar concursos de méritos y cumplir requisitos crecientes según el nivel del cargo.",
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "Prioriza tu tiempo de revisión en las cláusulas de mayor riesgo, no en las más estandarizadas y de bajo riesgo."
      ],
      "correcta": 3,
      "explicacion": "Prioriza tu tiempo de revisión en las cláusulas de mayor riesgo, no en las más estandarizadas y de bajo riesgo."
    },
    {
      "pregunta": "Sobre \"Cómo leer y entender un contrato complejo rápidamente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica.",
        "Defender el lado del caso que te asignaron, no el que prefieres, desarrolla flexibilidad argumentativa real.",
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "Lleva un registro escrito de hallazgos mientras lees, no confíes solo en la memoria para discutir el contrato después."
      ],
      "correcta": 3,
      "explicacion": "Lleva un registro escrito de hallazgos mientras lees, no confíes solo en la memoria para discutir el contrato después."
    }
  ],
  "investigacion-juridica-metodologia": [
    {
      "pregunta": "Sobre \"Investigación jurídica eficiente: metodología paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "La abogacía tiene tasas documentadamente altas de ansiedad y burnout por factores estructurales del oficio.",
        "Un mentor no necesita un título rimbombante: cualquier abogado con más experiencia y buena disposición sirve.",
        "Delimitar con precisión la pregunta jurídica específica ahorra horas de lectura tangencial innecesaria."
      ],
      "correcta": 3,
      "explicacion": "Delimitar con precisión la pregunta jurídica específica ahorra horas de lectura tangencial innecesaria."
    },
    {
      "pregunta": "Sobre \"Investigación jurídica eficiente: metodología paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Aplicar a becas competitivas exige planificación con meses o años de anticipación, no de último momento.",
        "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua.",
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Sigue la jerarquía de fuentes: norma vigente, luego jurisprudencia de altas cortes, y después doctrina."
      ],
      "correcta": 3,
      "explicacion": "Sigue la jerarquía de fuentes: norma vigente, luego jurisprudencia de altas cortes, y después doctrina."
    },
    {
      "pregunta": "Sobre \"Investigación jurídica eficiente: metodología paso a paso\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "Participar en asociaciones gremiales desde estudiante es una forma accesible de empezar a construir esa red.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Documentar tu proceso de búsqueda te permite retomarlo eficientemente y defender su exhaustividad después."
      ],
      "correcta": 3,
      "explicacion": "Documentar tu proceso de búsqueda te permite retomarlo eficientemente y defender su exhaustividad después."
    }
  ],
  "consejos-legales-sin-falsas-expectativas": [
    {
      "pregunta": "Sobre \"Cómo dar consejos legales sin generar falsas expectativas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero.",
        "Redacta pretensiones precisas y concretas: el juez no puede fallar bien sobre una petición ambigua.",
        "Un pronóstico excesivamente optimista, aunque técnicamente bien fundado, puede dañar la confianza si el resultado cambia."
      ],
      "correcta": 3,
      "explicacion": "Un pronóstico excesivamente optimista, aunque técnicamente bien fundado, puede dañar la confianza si el resultado cambia."
    },
    {
      "pregunta": "Sobre \"Cómo dar consejos legales sin generar falsas expectativas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Redactar activamente en inglés jurídico desarrolla una habilidad más valiosa que solo leer o traducir pasivamente.",
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Prepara tu rango salarial con investigación previa de mercado, no una cifra al azar en el momento.",
        "Comunica en probabilidades y escenarios, no en promesas absolutas sobre el resultado de un caso."
      ],
      "correcta": 3,
      "explicacion": "Comunica en probabilidades y escenarios, no en promesas absolutas sobre el resultado de un caso."
    },
    {
      "pregunta": "Sobre \"Cómo dar consejos legales sin generar falsas expectativas\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Un contrato de servicios claro y por escrito previene la mayoría de conflictos posteriores sobre honorarios.",
        "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado."
      ],
      "correcta": 3,
      "explicacion": "Explica desde el inicio costos, tiempos y etapas del proceso, no solo el resultado final esperado."
    }
  ],
  "primer-ano-practica-que-esperar": [
    {
      "pregunta": "Sobre \"El primer año de práctica: qué esperar realmente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "Defender el lado del caso que te asignaron, no el que prefieres, desarrolla flexibilidad argumentativa real.",
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas.",
        "El primer año trae más trabajo de soporte del esperado, antes de autonomía real sobre decisiones estratégicas."
      ],
      "correcta": 3,
      "explicacion": "El primer año trae más trabajo de soporte del esperado, antes de autonomía real sobre decisiones estratégicas."
    },
    {
      "pregunta": "Sobre \"El primer año de práctica: qué esperar realmente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Practicar con exámenes anteriores del ICFES es más efectivo que repasar todo el temario de la carrera de golpe.",
        "La calidad y consistencia importan más que la frecuencia o la viralidad del contenido publicado.",
        "El inglés jurídico es un registro específico, distinto del inglés general o incluso del inglés de negocios.",
        "Recibir correcciones extensas es casi universal; lo relevante es no repetir el mismo error dos veces."
      ],
      "correcta": 3,
      "explicacion": "Recibir correcciones extensas es casi universal; lo relevante es no repetir el mismo error dos veces."
    },
    {
      "pregunta": "Sobre \"El primer año de práctica: qué esperar realmente\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "El síndrome del impostor es común en el primer año y no refleja tu competencia real."
      ],
      "correcta": 3,
      "explicacion": "El síndrome del impostor es común en el primer año y no refleja tu competencia real."
    }
  ],
  "sector-publico-vs-privado-diferencias": [
    {
      "pregunta": "Sobre \"Trabajar en el sector público vs. privado: diferencias reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Análisis consistentes y bien fundamentados construyen reputación verificable de conocimiento técnico real.",
        "La tarjeta profesional queda sujeta al régimen disciplinario: puede suspenderse o cancelarse por faltas graves.",
        "Revisa resultados en Saber Pro, convenios de práctica y bolsa de empleo antes de decidir.",
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido."
      ],
      "correcta": 3,
      "explicacion": "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido."
    },
    {
      "pregunta": "Sobre \"Trabajar en el sector público vs. privado: diferencias reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir.",
        "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer.",
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento."
      ],
      "correcta": 3,
      "explicacion": "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento."
    },
    {
      "pregunta": "Sobre \"Trabajar en el sector público vs. privado: diferencias reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica.",
        "Conocer las debilidades de tu propio caso, no solo sus fortalezas, es la preparación más importante.",
        "Es preferible referir un caso fuera de tu competencia que asumirlo sin la preparación técnica adecuada.",
        "El ingreso al sector público por concurso de méritos exige una preparación específica y con anticipación propia."
      ],
      "correcta": 3,
      "explicacion": "El ingreso al sector público por concurso de méritos exige una preparación específica y con anticipación propia."
    }
  ],
  "manejar-cliente-dificil": [
    {
      "pregunta": "Sobre \"Cómo manejar un cliente difícil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "En congresos y seminarios, hablar activamente con otros asistentes multiplica el valor de asistir.",
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema.",
        "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia."
      ],
      "correcta": 3,
      "explicacion": "La ansiedad de un cliente difícil suele reflejar miedo o incertidumbre, no necesariamente cuestionar tu competencia."
    },
    {
      "pregunta": "Sobre \"Cómo manejar un cliente difícil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo.",
        "El Saber Pro es obligatorio y sus resultados importan para grado, empleo y posgrados, aunque no habilita para ejercer.",
        "La tarjeta profesional, no el diploma universitario por sí solo, es lo que habilita legalmente para litigar.",
        "Establecer canales y frecuencia de comunicación claros desde el inicio previene buena parte de la fricción."
      ],
      "correcta": 3,
      "explicacion": "Establecer canales y frecuencia de comunicación claros desde el inicio previene buena parte de la fricción."
    },
    {
      "pregunta": "Sobre \"Cómo manejar un cliente difícil\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Ganar experiencia práctica antes de especializarte te da preguntas reales y criterio propio para el posgrado.",
        "Cobrar muy por debajo del mercado es difícil de corregir después y suele atraer clientes que valoran poco tu trabajo.",
        "Revisa resultados en Saber Pro, convenios de práctica y bolsa de empleo antes de decidir.",
        "Marcar límites firmes ante exigencias poco éticas protege tu integridad y reputación, incluso si pierdes al cliente."
      ],
      "correcta": 3,
      "explicacion": "Marcar límites firmes ante exigencias poco éticas protege tu integridad y reputación, incluso si pierdes al cliente."
    }
  ],
  "voluntariado-juridico-pro-bono": [
    {
      "pregunta": "Sobre \"Voluntariado jurídico y trabajo pro bono\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las electivas son la oportunidad de diferenciarte antes de graduarte, no solo un requisito más que cumplir.",
        "Investigar la firma específica y llevar preguntas propias demuestra interés genuino, no una aplicación masiva.",
        "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica.",
        "El trabajo pro bono suele dar más autonomía práctica temprana que tus primeros casos remunerados en una firma."
      ],
      "correcta": 3,
      "explicacion": "El trabajo pro bono suele dar más autonomía práctica temprana que tus primeros casos remunerados en una firma."
    },
    {
      "pregunta": "Sobre \"Voluntariado jurídico y trabajo pro bono\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Entender la preocupación real del cliente, no solo el problema jurídico técnico, construye confianza duradera.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros.",
        "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión."
      ],
      "correcta": 3,
      "explicacion": "Consultorios jurídicos, fundaciones y asociaciones gremiales canalizan pro bono estructurado y con supervisión."
    },
    {
      "pregunta": "Sobre \"Voluntariado jurídico y trabajo pro bono\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Colombia no exige un examen de habilitación adicional tipo 'bar exam': el título universitario es el requisito central.",
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido.",
        "La tarjeta profesional queda sujeta al régimen disciplinario: puede suspenderse o cancelarse por faltas graves.",
        "Muchas firmas valoran explícitamente el compromiso pro bono al evaluar candidatos y empleados."
      ],
      "correcta": 3,
      "explicacion": "Muchas firmas valoran explícitamente el compromiso pro bono al evaluar candidatos y empleados."
    }
  ],
  "idiomas-ventaja-competitiva-bilingue": [
    {
      "pregunta": "Sobre \"Idiomas y la ventaja del abogado bilingüe\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Los mejores moot courts son, en la práctica, una vitrina de reclutamiento observada por firmas reconocidas.",
        "Separa la narración objetiva de los hechos de su calificación jurídica; no los mezcles desde el inicio.",
        "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica.",
        "El inglés jurídico es un registro específico, distinto del inglés general o incluso del inglés de negocios."
      ],
      "correcta": 3,
      "explicacion": "El inglés jurídico es un registro específico, distinto del inglés general o incluso del inglés de negocios."
    },
    {
      "pregunta": "Sobre \"Idiomas y la ventaja del abogado bilingüe\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Delimitar con precisión la pregunta jurídica específica ahorra horas de lectura tangencial innecesaria.",
        "Perder un término procesal por desorganización es de los errores más costosos y evitables en la práctica.",
        "El título de abogado habilita roles muy distintos: in-house, función pública, docencia, compliance, legal tech, entre otros.",
        "Certificaciones específicas de legal English dan una señal más precisa a reclutadores que un nivel de inglés genérico."
      ],
      "correcta": 3,
      "explicacion": "Certificaciones específicas de legal English dan una señal más precisa a reclutadores que un nivel de inglés genérico."
    },
    {
      "pregunta": "Sobre \"Idiomas y la ventaja del abogado bilingüe\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema.",
        "Redactar activamente en inglés jurídico desarrolla una habilidad más valiosa que solo leer o traducir pasivamente."
      ],
      "correcta": 3,
      "explicacion": "Redactar activamente en inglés jurídico desarrolla una habilidad más valiosa que solo leer o traducir pasivamente."
    }
  ],
  "tecnologia-ia-practica-legal-adaptarte": [
    {
      "pregunta": "Sobre \"Tecnología e IA en la práctica legal: cómo adaptarte\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Establecer canales y frecuencia de comunicación claros desde el inicio previene buena parte de la fricción.",
        "Evalúa el LLM con realismo financiero frente al retorno esperado en tu área específica, no como algo automático.",
        "Acercarte con una pregunta específica y bien pensada funciona mejor que un pedido genérico de mentoría.",
        "La IA automatiza tareas mecánicas, pero aumenta —no reduce— la importancia del criterio de verificación del abogado."
      ],
      "correcta": 3,
      "explicacion": "La IA automatiza tareas mecánicas, pero aumenta —no reduce— la importancia del criterio de verificación del abogado."
    },
    {
      "pregunta": "Sobre \"Tecnología e IA en la práctica legal: cómo adaptarte\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La judicatura (o su equivalente) es un requisito de grado; su modalidad exacta varía entre universidades.",
        "La redacción clara suele ser más determinante en la práctica real que el conocimiento técnico puro.",
        "El secreto profesional aplica incluso en conversaciones informales que puedan identificar el caso o al cliente.",
        "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente."
      ],
      "correcta": 3,
      "explicacion": "Nunca cites jurisprudencia o normas generadas por IA sin verificar independientemente que existen realmente."
    },
    {
      "pregunta": "Sobre \"Tecnología e IA en la práctica legal: cómo adaptarte\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Recibir correcciones extensas es casi universal; lo relevante es no repetir el mismo error dos veces.",
        "El sector público suele ofrecer más estabilidad; el privado, mayor variabilidad con potencial de crecimiento más rápido.",
        "Una especialización vale más cuando responde a una necesidad profesional concreta, no por inercia académica.",
        "Desarrollar fluidez responsable con estas herramientas es cada vez más una habilidad profesional relevante."
      ],
      "correcta": 3,
      "explicacion": "Desarrollar fluidez responsable con estas herramientas es cada vez más una habilidad profesional relevante."
    }
  ],
  "construir-firma-propia-primeros-pasos": [
    {
      "pregunta": "Sobre \"Construir tu propia firma desde cero: primeros pasos reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "La acreditación de alta calidad es un sello adicional y voluntario, buen indicador aunque no obligatorio.",
        "Las pasantías internacionales son una vía de entrada más accesible al derecho internacional que un LLM completo.",
        "Tu red de contactos se construye desde la universidad, no espera a que te gradúes para empezar a formarse.",
        "Ganar experiencia previa en otra organización enseña gestión operativa que es costosa de aprender ya con tu propio negocio en juego."
      ],
      "correcta": 3,
      "explicacion": "Ganar experiencia previa en otra organización enseña gestión operativa que es costosa de aprender ya con tu propio negocio en juego."
    },
    {
      "pregunta": "Sobre \"Construir tu propia firma desde cero: primeros pasos reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Las preguntas de comportamiento evalúan cómo razonas y actúas, no solo si sabes la norma exacta de memoria.",
        "El sector público expone a asuntos de alto impacto colectivo, a un ritmo de decisión generalmente más lento.",
        "La mejor especialización combina interés genuino, ventaja comparativa y disposición a profundizar años en el tema.",
        "Los primeros clientes casi siempre llegan por tu red existente, no por publicidad general desde el día uno."
      ],
      "correcta": 3,
      "explicacion": "Los primeros clientes casi siempre llegan por tu red existente, no por publicidad general desde el día uno."
    },
    {
      "pregunta": "Sobre \"Construir tu propia firma desde cero: primeros pasos reales\": ¿cuál de las siguientes afirmaciones es correcta?",
      "opciones": [
        "Distingue siempre entre opinión profesional general y asesoría legal específica sobre un caso de un tercero.",
        "El plan típico va de fundamentos, a áreas sustantivas y procesales, a profundización y consultorio jurídico.",
        "El primer año trae más trabajo de soporte del esperado, antes de autonomía real sobre decisiones estratégicas.",
        "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica."
      ],
      "correcta": 3,
      "explicacion": "Busca asesoría contable propia desde el inicio: no descuides la gestión formal de tu propia práctica."
    }
  ]
};
