import axios from 'axios';

const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

class Api {
    static getStateList = () => axios.get(url).then(res => res.data.map(el => { 
        return {
            value: el.id ,
            label: el.nome
        }
    }));
}

export default Api;
