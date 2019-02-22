import { Injectable } from "@angular/core";
import { IComponent } from "./product";


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): IComponent[] {
        return [
            {
                "id": 1,
                "category": "CPU",
                "name": "Intel Core i7-8809G",
                "brand": "Intel",
                "price": 499.95,
                "quantity": 34,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
              },
              {
                "id": 2,
                "category": "CPU",
                "name": "Intel Core i5-8659G",
                "brand": "Intel",
                "price": 125,
                "quantity": 12,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
              },
              {
                "id": 5,
                "category": "GPU",
                "name": "Nvdia 970m",
                "brand": "Nvdia",
                "price": 350,
                "quantity": 23,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
              }
        ];
    }
}