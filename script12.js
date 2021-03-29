let firstResult =
    function betweenFunction() {
        let a = Math.floor(Number(document.getElementById("a").value));
        let b = Math.floor(Number(document.getElementById("b").value));
        let values = [];
        if (a < b) {
            for (a; a < b; a++) {
                values += `${a}, `
            };
            document.getElementById("firstQuestion").innerHTML = `O números entre os valores são [${values + b}].`;
        } else if (a > b) {
            for (a; a > b; a--) {
                values += `${a}, `
            };
            document.getElementById("firstQuestion").innerHTML = `O números entre os valores são [${values + b}].`;
        } else {
            document.getElementById("firstQuestion").innerHTML = `Estes números são iguais.`;
        };
    };

let list = [];
let addButton =
    function createListFunction() {
        let value = document.getElementById("x").value
        list.push(value);
        document.getElementById("x").value = ''
    };
let showButton =
    function showList() {
        document.getElementById("secondQuestion").innerHTML = `A lista de itens é [${list}].`;
    };
let clearButton =
    function clearList() {
        list = [];
        document.getElementById("secondQuestion").innerHTML = `A lista está vazia.`;
    };
    
    /** Tentei usando Objeto mas n funcionou (Chamando onclick="secondResult.addButton()")
     *  let secondResult = {
     value: document.getElementById("x").value,
     list: [],
     
     addButton: function() {
         this.list.push(this.value);
        },
        
        showButton: function() {
            document.getElementById("secondQuestion").innerHTML = `A lista de itens é [${this.list}].`;
        },
        
        toClearButton: function() {
            this.list = [];
            document.getElementById("secondQuestion").innerHTML = `A lista está vazia.`;
        }
    } **/
    
    let femaleNameList = []
    let maleNameList = []
    let addNameButton =
    function createList() {
        let name = document.getElementById("name").value
        let gender = document.getElementById("gender").value
        if(gender == "F") {
            femaleNameList.push(name);
        } else {
            maleNameList.push(name);
        }
        document.getElementById("name").value = ''
    };
    let showNameButton =
    function showList() {
        document.getElementById("thirdQuestion").innerHTML = `Lista de homens: [${maleNameList}].
        <br>Lista de mulheres: [${femaleNameList}].` ;
    };
    let clearNameButton =
    function clearList() {
        femaleNameList = [];
        maleNameList = [];
        document.getElementById("thirdQuestion").innerHTML = `A listas estão vazias.`;
    };