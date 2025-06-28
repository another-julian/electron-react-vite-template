export type ProjectInfo = {
  id: string
  name: string
  createdAt: Date
}

function createProjectInfo(name: string): ProjectInfo {
  return { id: crypto.randomUUID(), name, createdAt: new Date() }
}

export type ProjectList = Project[]

// src/shared/models/project.ts

export type Project = {
  projectInfo: ProjectInfo
  // a. Soporte de Recursos Clave
  recursosClave: {
    activosCorrientes: {
      emprendedor: string
      tipo: string
      cantidad: number
      valorUnitario: number
    }[]
    activosIntangibles: {
      nombre: string
      descripcion: string
    }[]
    pasivosCorrientes: {
      nombre: string
      valor: number
      observaciones: string
    }[]
  }

  // b. Relación con los Clientes
  relacionClientes: {
    canales: {
      descripcion: string
      medio: string
      costo?: number
    }[]
    clientesPotencialesDigital: {
      nombre: string
      porcentajeConversion: number
      contacto: string
    }[]
    clientesPotencialesPresencial: {
      nombre: string
      porcentajeConversion: number
      contacto: string
    }[]
  }

  // c. Estructura de Costos
  estructuraCostos: {
    costosFijos: {
      tipo: 'material' | 'manoObra'
      nombre: string
      cantidad: number
      valorUnitario: number
    }[]
    costosVariables: {
      nombre: string
      costoUnidad: number
      volumenProyectado: number
    }[]
  }

  // d. Precio de Venta y Punto de Equilibrio
  precioEquilibrio: {
    precioVenta: number
    costoVariableUnidad: number
    costosFijos: number
  }
  precioVenta: {
    margenUtilidadDeseado: number
    precioSimilarMercado: number
    precioSugeridoUsuario: number
  }

  // e. Estados Financieros
  estadoSituacion: {
    activosCorrientes: number
    activosNoCorrientes: number
    pasivosCorrientes: number
    pasivosNoCorrientes: number
    activosIntangibles: number
    patrimonioNeto: number
  }
  estadoResultados: {
    ingresosOrdinarios: number
    otrosIngresos: number
    egresos: number
    iva: number
    utilidadOperacional: number
    resultadoFinal: number
  }

  notes?: string
}

export function createEmptyProject(name: string): Project {
  return {
    projectInfo: createProjectInfo(name),
    recursosClave: {
      activosCorrientes: [],
      activosIntangibles: [],
      pasivosCorrientes: []
    },
    relacionClientes: {
      canales: [],
      clientesPotencialesDigital: [],
      clientesPotencialesPresencial: []
    },
    estructuraCostos: {
      costosFijos: [],
      costosVariables: []
    },
    precioEquilibrio: {
      precioVenta: 0,
      costoVariableUnidad: 0,
      costosFijos: 0
    },
    precioVenta: {
      margenUtilidadDeseado: 0,
      precioSimilarMercado: 0,
      precioSugeridoUsuario: 0
    },
    estadoSituacion: {
      activosCorrientes: 0,
      activosNoCorrientes: 0,
      pasivosCorrientes: 0,
      pasivosNoCorrientes: 0,
      activosIntangibles: 0,
      patrimonioNeto: 0
    },
    estadoResultados: {
      ingresosOrdinarios: 0,
      otrosIngresos: 0,
      egresos: 0,
      iva: 0,
      utilidadOperacional: 0,
      resultadoFinal: 0
    },
    notes: ''
  }
}
