$(document).foundation()

$(document)
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    alert("Form id "+frm.attr('id')+" is valid");
    // ajax post form 
  });