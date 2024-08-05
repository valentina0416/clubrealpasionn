window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')
    

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        validaCampos()
    })
     
    const validaCampos = () => { 
        //capturar los valores ingresados por el usuario//
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();

        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)//

        if(!usuarioValor) {
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo Vacio') 

        }else{
        validaOk(usuario)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email,'Campo vacio')



        }else {
            validaOk(email)
        }

        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

        //validando campo password
        if(!passValor) {
            validaFalla(pass, 'Campo vacio')
        } else if (passValor.length < 8) {
            validaFalla(pass,'Debe tener 8 caracteres como minimo')
        }else if (!passValor.match(er)) {
            validaFalla(pass, 'Debe tener al menos una mayus, una min, y un num')
        }else{
            validaOk(pass)
        }

        //Validando campo password confimacion
        if(!passConfirmaValor){
            validaFalla(passConfirma, 'confirme su contraseña')
        }else if(passValor !== passConfirmaValor){
            validaFalla(passConfirma, 'La contraseña no coincide')
        }else{
            validaOk(passConfirma)
        }

    }

    
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'

    }

     const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'

    }

    const validaEmail = (email) => {
        return /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(email);
    }

 })  