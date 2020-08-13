export const checkMinLength = (crm) => {
    if(crm.length < 5) {
        return { error: true, message: 'Tamanho mínimo de 5 caracteres'}
    }
    return { error: false, message: ''}
};

export const checkIsEmptyOrIsSelect = (state) => {
   if(state === '' || state === 'Selecionar') {
    return { error: true, message: 'Campo Obrigatório'}
   }
   return { error: false, message: ''}
};
