function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function LoanPaymentChoice() {
  var x = document.getElementById("mypaymentchoice").value;
  var bal = document.getElementById("balance").innerHTML;
  if(x == "Monthly"){
    document.getElementById("loanamount").value = (bal*1.05)/24;
    document.getElementById("loanamount").readOnly = true;

  } else if(x == "All"){
    document.getElementById("loanamount").value = bal;
    document.getElementById("loanamount").readOnly = true;
  } else {
    document.getElementById("loanamount").value = 0;
    document.getElementById("loanamount").readOnly = false;
  }
}
