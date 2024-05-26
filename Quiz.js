
var counter = 0;

function check()
{
    var usern = document.getElementById("userinp").value;
    if(document.getElementById("opf1").checked == true)
    {
        counter++;
    }
    if(document.getElementById("ops1").checked == true)
    {
        counter++;
    }
    if(document.getElementById("opt1").checked == true)
    {
        counter++;
    }
    alert(counter + " are correct ya "+ usern);
}
