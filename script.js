function isEmptyForm(form) {
    // Get all the inputs in the form.
    const inputs = form.querySelectorAll("input");

    // Loop through the inputs and check if any of them are empty.
    for (const input of inputs) {
      if (input.value === "") {
        // Found an empty input.
        return true;
      }
    }

    // All inputs are not empty.
    return false;
  }

  function add_data() {
    var EvaFormSh = document.getElementById('evaFormsh')
    var data_new = {
      Trainees_name: document.getElementById('Trainees').value,
      Program_title: document.getElementById('Program').value,
      Date_of_starting: document.getElementById('start_date').value,
      Date_of_ending: document.getElementById('end_date').value,
      Trainers_name: document.getElementById('trainers').value,
      Pre_test: document.getElementById('pre_tst').value,
      Post_test: document.getElementById('post_tst').value,
      Attendance: document.getElementById('Attendance').value,
      Interaction_of_trainee: document.getElementById('Interaction').value,
      Overall_result: document.getElementById('Overall').value,
      General_notes: document.getElementById('General_note').value
    };

    if (isEmptyForm(EvaFormSh)) {
      google.script.run.alertExl('يجب أدخال جميع القيم', 'خطأ');
    } else {
      google.script.run.AddDataToEvaluation_DF(data_new);

      // erase the value
      document.getElementById('Trainees').value = '';
      document.getElementById('Program').value = '';
      document.getElementById('start_date').value = '';
      document.getElementById('end_date').value = '';
      document.getElementById('trainers').value = '';
      document.getElementById('pre_tst').value = '';
      document.getElementById('post_tst').value = '';
      document.getElementById('Attendance').value = '';
      document.getElementById('Interaction').value = '';
      document.getElementById('Overall').value = '';
      document.getElementById('General_note').value = '';
    }
  }