export const ValidationService = {
    cep(cep = ''): boolean  {
      return  cep.replace(/\D/g, '').length === 8;  //remove tudo que nao e numero
        
    }
}