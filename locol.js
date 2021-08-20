let ism = document.getElementById('ism')
let yosh = document.getElementById('yosh')
let sana = document.getElementById('sana')
let otdel = document.getElementById('otdel')
let persons = []
let table = document.querySelector('table')
let modal = document.getElementById('modal')

if(localStorage.getItem('humans')){
    try {
        persons = JSON.parse(localStorage.getItem('humans'))
        show()

    } catch (error) {
        localStorage.removeItem('humans')
    }
}
function show(){
    let count = 1
    table.innerHTML = ` <thead>
            <tr>
                <th>N</th>
                <th>Ism</th>
                <th>Yosh</th>
                <th>Tugilgan sana</th>
                <th>Bo'lim</th>
            </tr>
            </thead>`
    for(let i=0;i<persons.length;i++){
        let tr =`
            <tr>
                <td>${count}</td>
                <td>${persons[i].ism}</td>
                <td>${persons[i].yosh}</td>
                <td>${persons[i].sana}</td>
                <td>${persons[i].otdel}</td>
            </tr>
        `
        table.innerHTML +=  tr
        count ++
    }

}
function showModal(){
    modal.classList.toggle('active')
}

function add(){
    const person ={
        ism:ism.value,
        yosh:yosh.value,
        sana:sana.value,
        otdel:otdel.value,
    }
    ism.value= ''
    yosh.value= ''
    sana.value= ''
    otdel.value= ''
    persons.push(person)
    show()
    showModal()
    let redy = JSON.stringify(persons)
    localStorage.setItem('humans', redy)
}