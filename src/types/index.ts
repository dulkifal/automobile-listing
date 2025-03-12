// Define the CarDTO type for car data
export interface CarDTO {
    id: number;
    name: string;
    price: number;
    mileage: number;
    image?: string; // Optional field for car image URL
  }
  
  // Define the User type for user profile data
  export interface User {
    name: string;
    email: string;
  }
  
  // Define the Filter type for filtering options
  export interface Filter {
    price?: string;
    mileage?: string;
  }
  
  // Define the state types for Redux slices
  export interface CarsState {
    cars: CarDTO[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }
  
  export interface WishlistState {
    wishlist: CarDTO[];
  }
  
  export interface UserState {
    name: string;
    email: string;
  }