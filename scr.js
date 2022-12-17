const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if (validateEmail(email)) {
      $result.text(email + ' is valid :)');
      $result.css('color', 'green');
    } else {
      $result.text(email + ' is not valid :(');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);

  function cad(){

    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value

    let email = document.getElementById('email').value
    let email2 = document.getElementById('email2').value

    let pas1 = document.getElementById('pas1').value
    let pas2 = document.getElementById('pas2').value

    if (email != email2) {
        alert("os email não não iguais")
    } 
    else if( pas1 != pas2) {
        alert("as senhas nao conferem")
    }
    else {
        alert("sucesso")
        window.location.href = 'login.html'
    }


event.preventDefault()
  }


  function log() {

    
    let emailLog = document.getElementById('emailLog').value
    let pasLog = document.getElementById('paslog').value

    if(emailLog.length == 0 || pasLog.length == 0)
     {
        alert("Error!! Invalid Data!")
    }

    else {
        alert("sucesso")
        window.location.href = 'https://linkedin.com/in/gustawebp'
    }

  }