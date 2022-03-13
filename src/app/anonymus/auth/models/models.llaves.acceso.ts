export interface keysAuth {
  mensaje: string;
  folio: string;
  resultado: Resultado;
}

export interface Resultado {
  idAcceso: string;
  accesoPublico: string;
  accesoPrivado: string;
  accesoSimetrico: string;
  codigoAutentificacionHash: string;
}
