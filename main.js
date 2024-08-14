const form = document.getElementById('add-house-form');
const housesTableBody = document.getElementById('houses-tbody');
const contentHouse = document.getElementById("contentHouse")
// const fakeHouse = [
//     {
//         houseType:"appartement",
//         locationL:"Tradex Bonnamoussadi, Douala Cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:15000000,
//         pictures:"https://th.bing.com/th/id/OIP.9Fvxpd81xYJ26eUL2mC_GAHaIW?w=202&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7",

//     },
//     {
//         houseType:"Villa",
//         locationL:"Akwa nord ,Douala Cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:"50000000",
//         pictures:"https://th.bing.com/th/id/OIP.06pKfEx7-mIgHowjBy0haAHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//     {
//         houseType:"Office",
//         locationL:"Logpom , Douala cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:"10000000",
//         pictures: "https://th.bing.com/th/id/OIP.G8HwwJPhXLOAUHZcAUBcfgHaFj?w=274&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7"  ,
//     },
//     {
//         houseType:"building",
//         locationL:"yassa,Douala Cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:"450000",
//         pictures:"img/property-4.jpg",
//     },
//     {
//         houseType:"building",
//         locationL:"deido,Douala Cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:"160000",
//         pictures:"img/property-4.jpg",
//     },
//     {
//         houseType:"building",
//         locationL:"Bali,Douala Cameroun",
//         description:"Propriété urbaine à Vendre",
//         price:"370000",
//         pictures:"https://th.bing.com/th/id/OIP.5zFNMhSXZy4c50mu-wthkQHaFj?pid=ImgDet&w=200&h=150&c=7&dpr=1,3",
//     }
// ]
let houses = [];
console.log(form);
let AllHouses =JSON.parse(localStorage.getItem("houses"))

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const houseType = document.getElementById('house-type').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const pictures = document.getElementById('pictures').files;

    // Add validation and error handling here

    // Add the new house to the array
    const newHouse = {
        houseType,
        location,
        description,
        price,
        pictures: Array.from(pictures).map((file) => file.name),
    };
    
    console.log(AllHouses?.length > 0);
    
    if (AllHouses?.length > 0) {
        houses = [...AllHouses, newHouse];
    } else {
        houses = [newHouse];
    }
    localStorage.setItem("houses", JSON.stringify(houses));
    
    // Render the houses in the table
    renderHouses();

    // Clear the form
    form.reset();
    window.location.reload()
});

function renderHouses() {
    housesTableBody.innerHTML = '';
    houses.forEach((house, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index +1}</td>
            <td> <img class="w-[40px] rounded-full" src="img/${house.pictures[0]}"></td>
            <td>${house.houseType}</td>
            <td>${house.price}</td>
            <td>${house.location}</td>
            <td>${house.description}</td>
        `;
        housesTableBody.appendChild(row);
    });
}

if (AllHouses?.length !== 0) {
    
    housesTableBody.innerHTML = '';
    AllHouses?.forEach((house, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index +1}</td>
            <td> <img class="w-[40px] rounded-full" src="img/${house?.pictures[0]}"></td>
            <td>${house.houseType}</td>
            <td>${house.price}</td>
            <td>${house.location}</td>
            <td>${house.description}</td>
        `;
        housesTableBody.appendChild(row);
    });
}
