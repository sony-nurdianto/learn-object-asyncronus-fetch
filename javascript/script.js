const manusia = {
    name:'hartono',
    lastName: 'gokil',
    getFullName(){
        return `${this.name} ${this.lastName}`
    },

    changeName(namaYgDiubah){
        this.name = namaYgDiubah;
    },
    setAnak(...args){
        let anakArray = [];
        for (let anak of args){
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak(){
        return this.anak;
    }
}

console.log (manusia.getFullName());
let namaLengkap = manusia.getFullName();
console.log(namaLengkap);

manusia.changeName('budi');
namaLengkap = manusia.getFullName();
console.log(namaLengkap); 

// Date function

const date = new Date();

const tanggal = `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`
console.log(tanggal)

// destructure 

// const name = manusia.name;
// const lastName = manusia.lastName

const {name,lastName} = manusia;
console.log(`${name} ${lastName}`);

// learn DOM
document.querySelector('clickMe').addEventListener('click', () =>{
    const stringHTML = '<button class="btn btn-danger">awas</button>';
    document.getElementById('content').innerHTML = stringHTML
    window.alert('saya terclick')
});

