const informaçõesTabela = [
	{matrícula: 2, nome: 2, categoria: 2, tipo: 2, className: 2,},
	{matrícula: 2, nome: 2, categoria: 2, tipo: 2, className: 2,},
];


informaçõesTabela.map(infor =>{

	const criar = `
	<div class="list-item-card card flex-c-b">
        <div class="list-item">
            <div class="list-item-title">Matrícula</div>
            <div class="list-item-dados">${infor.matrícula}</div>
       </div>
    </div>
    `

    document.querySelector('.list-clientes').insertAdjacentHTML("beforeend", criar)

	console.log(infor)
})