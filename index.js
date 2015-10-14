function exibeContatos(listaAgenda)
{
	$('table tbody').empty();
		
       for (var i = 0; i < listaAgenda.length; i++)
	{			
	$('<tr idbase="'+listaAgenda[i].id+'"><td>'+listaAgenda[i].nome+
          '</td><td>'+listaAgenda[i].telefone+
	  '</td><td>'+listaAgenda[i].cidade+
	  '</td><td>'+
	  '<a href="#" class="delete">&#10008;</a>'+
	  '</td></tr>').appendTo('table tbody');
      :}
