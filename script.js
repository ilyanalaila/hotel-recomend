const hotels = [
    {
        name: "Hotel Nusantara",
        distance: "0.5 km",
        rating: "★★★★☆",
        price: "Rp350.000 / malam"
    },
    {
        name: "Hotel Sejahtera",
        distance: "1 km",
        rating: "★★★☆☆",
        price: "Rp250.000 / malam"
    },
    {
        name: "Hotel Mewah Indah",
        distance: "0.8 km",
        rating: "★★★★★",
        price: "Rp550.000 / malam"
    }
];

const hotelList = document.getElementById("hotelList");

function displayHotels(data) {
    hotelList.innerHTML = "";
    data.forEach(hotel => {
        hotelList.innerHTML += `
            <div class="hotel-card">
                <h3>${hotel.name}</h3>
                <p>Jarak: ${hotel.distance}</p>
                <p class="rating">Rating: ${hotel.rating}</p>
                <p>Harga: ${hotel.price}</p>
            </div>
        `;
    });
}

function searchHotel() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filtered = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(input)
    );
    displayHotels(filtered);
}

// Tampilkan semua hotel saat halaman dibuka
displayHotels(hotels);

