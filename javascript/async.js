// const glintsXimpactByte = [
//     'arb712',
//     'Frederrick-88',
//     'sony-nurdianto'
// ]

// glintsXimpactByte.forEach(item => {
//     fetch(`https://api.github.com/users/${item}`)
//     .then(response =>{
//         console.log(response)
//     });
// });


fetch('https://swapi.co/api/people/1')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    const{name,skin_color,gender,films} = data;

    const linkHTML = '<a href=""></a>'
    let linksFilm = '';
    films.forEach((item,index) => {
         linksFilm += `<a href="${item}">film ${index + 1} </a>`;

    })
    

    const peopleHTMLString =`<div class="col-sm-6 col-md-4">
        name:${name}
        <br>
        skin color :${skin_color}
        <br>
        gender:${gender}
        <br>
        films : ${linksFilm}
    </div>`;
    
    
    
    document.getElementById('starwars').innerHTML = peopleHTMLString;
});



// const serverWanderlink ='http://35.240.201.155:3000/';
// fetch (`${serverWanderlink}api/v1/wanderlink/show/idn/destination`)
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);


//     data.forEach(item => {
//         const stringHTML = `
//         <div class="col-sm-6 col-md-4">
//             <img width="100%" height="100px" src="${serverWanderlink}${item.images && item.images[0]}" />
//             ${item.destinationName}
//             <br>
//             ${item.address}
//             <br>
//             ${item.city}
//         </div>
//         `
//         document.getElementById('wanderlink').innerHTML += stringHTML;
//     })
// })

const addWonderlink = (item, nomor) => {
    const {
        destinationName,
        address,
        city,
        images
    } = item;

    const stringHTML = `
    <div class="col-sm-6 col-md-4">
        <img width="100%" height="100px" src="${serverWanderLink}${images && images[0]}"/>
        ${nomor} ${destinationName}
        <br>
        ${address}
        <br>
        ${city}
    </div>
    
    `;
    document.getElementById('wanderlink').innerHTML += stringHTML;

}
const serverWanderLink = 'http://35.240.201.155:3000/';
fetch(`${serverWanderLink}api/v1/wanderlink/show/idn/destination`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        // data.forEach( item => {
        //     addWonderlink(item)
        // });
        dataWonderlink = data;
        // for (let i = 10; i < 20; i++) {
        //     addWonderlink(data[i]);
        // }
        next();
    })
let dataWonderlink = [];
let currentPages = 0;

const show10 = (noIndex = 0 ) => {
    const maxNomor = 10 + noIndex;
    document.getElementById('wanderlink').innerHTML = "";
    for (noIndex; noIndex < maxNomor; noIndex++) {
        addWonderlink(dataWonderlink[noIndex], noIndex);
    }
    currentPages = maxNomor;
}
const previous = ()=> {
    show10(currentPages - 20);
}
const next = () => {
    show10(currentPages);
}