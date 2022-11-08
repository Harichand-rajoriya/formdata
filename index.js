// // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

$(document).ready(function (e) {
  $('#submit').click(function () {
    //e.prventDefault();
    
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var city = $('.city').val();
    var number = $('.number').val();
    //alert(firstName+lastName+email+city+number);
    $(".table tbody tr").last().after(
      '<tr>'+
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + email + '</td>' +
      '<td>' + city + '</td>' +
      '<td>' + number + '</td>' +
      '</tr>'
    );
    return false;
  })
});


