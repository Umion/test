let inputs = document.querySelectorAll('.form_input');
let main_btn = document.querySelector('.main_btn');
let inp_radio = document.getElementsByName('gender');

let res_first_name = false;
let res_secons_name = false;
let res_email = false;
let res_radio = false;
let res_select = false;

let form_valid = false;


inputs.forEach( inp => {
   
  let label = document.querySelector(`.label_${inp.name}`);
   
   inp.onfocus = () => label.classList.add('label_focus');
   
   inp.onblur = () => {
      if (inp.value.trim() == '') label.classList.remove('label_focus');
   };
   
   inp.oninput = (e) => validation_input(e);
})


inp_radio.forEach( el => {
      el.onclick = () => validation_radio()
   })


main_btn.onclick = (e) => {
   e.preventDefault();
   validation_radio();
   inputs.forEach( inp => {
      if (inp.value.trim() == '') {
         let span = document.querySelector(`.span_${inp.name}`);
         span.style.display = 'block';
         inp.classList.add('error_style')
      }
   })
   console.log(res_first_name, res_secons_name, res_email, res_radio)
}

const validation_radio = () => {
   
   let male = document.getElementById('male');
   let female = document.getElementById('female');
   let gender_span = document.querySelector(`.span_${male.name}`);
   let radio_label = document.querySelectorAll(".radio_label");
   
      if (!male.checked && !female.checked) {
         gender_span.style.display = 'block';
         radio_label.forEach( elem => elem.classList.add('error_style'))
      }
      else {
         res_radio = true;
         gender_span.style.display = 'none';
         radio_label.forEach( elem => elem.classList.remove('error_style'))
      }
   
}
//const validation_select = () => {
//   let giorno = document.getElementsByName('giorno');
//   let mese = document.getElementsByName('mese');
//   let anno = document.getElementsByName('anno');
//   
//   if (myForm.list.options[0].selected) {
//           myForm.out.value = html
//     }
//
//}
   
const validation_input = (e) => {
  
      let value = e.target.value,
          span = document.querySelector(`.span_${e.target.name}`),
          pattern_name = /^[a-zA-Z]{4,10}$/,
          pattern_email = /^[a-zA-Z0-9]{5,20}\@[a-zA-Z]{2,6}\.[a-zA-Z]{2,3}$/;

      if (e.target.name == 'email') {
         res_email = pattern_email.test(value);
         
            if (!res_email) {
               e.target.classList.add('error_style');
               span.style.display = 'block';
            }
            else {
               e.target.classList.remove('error_style');
               span.style.display = 'none';
            }
      }
   
      else if (e.target.name == 'first_name') {
         res_first_name = pattern_name.test(value);
         
            if (!res_first_name) {
               e.target.classList.add('error_style');
               span.style.display = 'block';
            }
            else {
               e.target.classList.remove('error_style');
               span.style.display = 'none';
            }
      }
   
      else if (e.target.name == 'secons_name') {
         res_secons_name = pattern_name.test(value);
         
            if (!res_secons_name) {
               e.target.classList.add('error_style');
               span.style.display = 'block';
            }
            else {
               e.target.classList.remove('error_style');
               span.style.display = 'none';
            }
      }
   }
   