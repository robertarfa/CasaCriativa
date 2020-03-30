function onOff(){

    document
            .querySelector("#modal")
            .classList
            .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

        document
                .querySelector("#modal")
                .classList
                .toggle("addScroll")
}

function checkFields(event){
        const valuesToCheck = [
            "title",
            "image",
            "category",
            "description",
            "link"
        ]
    
        const isEmpty = valuesToCheck.find(function(value){
            const checkIfItsString = typeof event.target[value].value === "string"
            const checkIfItsEmpty = !event.target[value].value.trim()
            if (checkIfItsString && checkIfItsEmpty) return true
        })
    
        if(isEmpty){
            event.preventDefault()
            alert("Por favor, preencha todos os campos")
        }
    
    }



