import swimmer from "./images/main-images/swimmer.png";
import weddingPhoto from "./images/main-images/wedding-photography.png";
import mountainBike from "./images/main-images/mountain-bike.png";

export default [
  {
    id: 1,
    image: swimmer,
    rating: "5.0",
    comments: 6,
    location: "USA",
    title: "Life lessons with Katie Zaferes",
    price: 136,
    seatsRemaining: 0,
    isOnline: false,
  },
  {
    id: 2,
    image: weddingPhoto,
    rating: "5.0",
    comments: 30,
    location: "USA",
    title: "Learn wedding photography",
    price: 125,
    seatsRemaining: 10,
    isOnline: true,
  },
  {
    id: 3,
    image: mountainBike,
    rating: "4.8",
    comments: 2,
    location: "USA",
    title: "Group Mountain Biking",
    price: 50,
    seatsRemaining: 20,
    isOnline: false,
  },
];
