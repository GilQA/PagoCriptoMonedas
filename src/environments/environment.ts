const BASE_URL = 'https://qa.apibaz.com';
const BASE_URL_ENCRYPT = 'http://localhost:3000';
const URL_CRIPTO = '/elektra/criptomonedas';

export const environment = {
  USR: 'pyK7vZvLeGCu7h0KUvuUbgzLH3LfkfmA',
  PWD: 'VvZS07yI79gAEMmK',
  production: false,
  KEY: 'Do3VJxoVc9QBzMpk6/Vhh7xH0pqd+784Sva9BjNR6YY=',
  SECURITY: {
    AUTH: BASE_URL + '/oauth2/v1/token',
    LLAVES_ACCESO: BASE_URL + URL_CRIPTO + '/seguridad/v1/aplicaciones/llaves',
  },
  ENCRIPT: {
    AES: BASE_URL_ENCRYPT + '/encriptarLLavesAES',
    RSA: BASE_URL_ENCRYPT + '/encriptarLLavesRSA',
  },
  DECRIPT: {
    AES: BASE_URL_ENCRYPT + '/desencriptarLLavesAES',
    RSA: BASE_URL_ENCRYPT + '/desencriptarLLavesRSA',
  },
};
