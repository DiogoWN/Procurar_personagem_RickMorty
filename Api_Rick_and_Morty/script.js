const characterId = document.getElementById("characterId")
const btnGo = document.getElementById("btn-go")
const content = document.getElementById("content")
const image = document.getElementById("img")

// value = ao id 
const fetchapi = (value) => {
    if (value > 826) {
        window.alert("[ERRO!] Os números dos personagens vão até 826")
    }
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data
        })

    return result
}

//Serve para pegar o que tem na api
const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode']

//Serve para criar os getElementById automaticamente
const buildResult = (result) => {
    const newObj = {}
    keys.map((key) => document.getElementById(key)) //Serve para pegar o que está em keys e criar os ID's
        .map((ele) => { //Serve para verificar se o obj foi selecionado
            ele.checked && (newObj[ele.name] = result[ele.name])
        })
    return newObj
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchapi(characterId.value)
    //content.textContent = `${JSON.stringify(result, undefined, 2)}`
    content.textContent = `${JSON.stringify(buildResult(result), undefined, 2)}`

    image.src = `${result.image}`
})