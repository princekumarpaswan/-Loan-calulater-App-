
const submit = () => {



    const totalLoan = document.getElementById("total").value;
    const intrest = document.getElementById("intrest").value;
    const year = document.getElementById("year").value;
    const month = document.getElementById("month")
    const emi = document.getElementById("emi")


    const cal = (totalLoan * (intrest / 100) * year)
    month.innerText = cal;
    emi.innerText = (totalLoan + cal) / 12;

}