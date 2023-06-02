let getOut = document.getElementById("inputField");
    function output(num){
        getOut.value += num;

    }

    function Calculate(){
        try{
            getOut.value = eval(getOut.value);
        }
        catch{
            alert('Invalid input')
        }
    }

    function Clear(){
        getOut.value= " ";
    }

    function del(){
        getOut.value = getOut.value.slice(0,-1);
    }
