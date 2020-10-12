$(document).ready(function () {
    registros();
    let editar_d = false;

    $('#busqueda').keyup(function () {
        if ($('#busqueda').val()) {
            let busqueda = $('#busqueda').val();
            $.ajax({
                type: 'POST',
                data: { busqueda },
                url: 'PHP/buscar.php',
                success: function (respuesta) {
                    let valores = JSON.parse(respuesta);
                    let template = '';
                    valores.forEach(valores => {
                        template += `
              <tr options="${valores.curso_id}"> 
              <td> ${valores.curso_id}   </td>         
              <td> ${valores.nombre}     </td>     
              <td> ${valores.descripcion} </td>     
              <td>     
                <button type='button' class='edit btn btn-outline-success'>   
                <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                </svg>   
                </button>
              </td>
              <td>
                <button type='button' class='remove btn btn-outline-danger'>   
                <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
                </svg>                
                </button>
              </td>  
            </tr>`
                    });
                    $('#datos').html(template);
                }
            });
            e.preventDefault();
        }
    });
    // ------------------------------------------------------------------------
    $('#form_agregar').submit(function (e) {
        const postData = {
            nombre: $('#nombre').val(),
            descripcion: $('#descripcion').val(),
            id: $('#curso_id').val()
        };

        let url = editar_d === false ? 'PHP/agregar_datos.php' : 'PHP/editar.php';

        $.post(url, postData, function (respuesta) {
            registros();
            $('#form_agregar').trigger('reset');
        });
        e.preventDefault();

    });

    // ------------------------------------------------------------------------
    function registros() {
        $.ajax({
            url: 'PHP/registros.php',
            type: 'GET',
            success: function (respuesta) {
                let valores = JSON.parse(respuesta);
                let template = '';
                valores.forEach(valores => {
                    template += ` 
              <tr options="${valores.curso_id}"> 
              <td> ${valores.curso_id}   </td>         
              <td> ${valores.nombre}     </td>   
              <td> ${valores.descripcion}     </td>   
                <td>
                     <button type='button' class='edit btn btn-outline-success'>  
                      <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                      </svg>  
                     </button>
                </td>
                <td>
                    <button type='button' class='remove btn btn-outline-danger'>         
                    <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
                    </svg>            
                    </button>
                 </td>            
                </tr>
                `
                });
                $('#datos').html(template);
            }
        });
    }

    $(document).on('click', '.remove', function () {
        if (confirm("¿Desea eliminar este registro?")) {
            let element = $(this)[0].parentElement.parentElement;
            let curso_id = $(element).attr('options');
            $.post('PHP/eliminar.php', { curso_id }, function (respuesta) {
                registros();
            });
        }
    });

    $(document).on('click', '.edit', function () {
        let element = $(this)[0].parentElement.parentElement;
        let curso_id = $(element).attr('options');
        $.post('PHP/seleccionar.php', { curso_id }, function (respuesta) {
            const valor = JSON.parse(respuesta);
            $('#nombre').val(valor.nombre);
            $('#descripcion').val(valor.descripcion);
            $('#curso_id').val(curso_id);
            editar_d = true;
        });

    });
});