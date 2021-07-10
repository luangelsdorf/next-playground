import React from 'react';

export default function Medicos() {

  function getMedicos() {
    /*fetch('http://localhost:3000/assets/hsap/hsap_medico.json')
      .then(res => res.json())
      .then(data => console.log(data))*/

    fetch('http://localhost:3000/assets/hsap/hsap_categoria.json')
      .then(res => res.json())
      .then(data => {
        let categorias = data[2].data;
        let arr = [];
        categorias.forEach(cat => {
          arr.push(cat.titulo);
        })
        arr.sort();
        let i = 1;
        arr.forEach(item => {
          console.log('- [] ' + item)
        })
      })
    /*
    const medicoCategoria =      await fetch('http://localhost:3000/assets/hsap/hsap_medico_categoria.json');
    data.push(medicoCategoria.json());

    const medicoRelacionamento = await fetch('http://localhost:3000/assets/hsap/hsap_medico_relacionamento.json');
    data.push(medicoRelacionamento.json());

    const medicoTipo =           await fetch('http://localhost:3000/assets/hsap/hsap_medico_tipo.json');
    data.push(medicoTipo.json());

    return data;*/
  }

  getMedicos();

  return (
    <div>asd</div>
  )
}

asdasd
asdasdasd
asdasdasd
ad