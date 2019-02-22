import { Component, OnInit } from "@angular/core";
import { IComponent } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector: 'pm-products',
    templateUrl: 
        './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    productsLength: number;
    filteredProducts: IComponent[];
    products: IComponent[] = [];
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = 
        this.listFilter ? this.performFilter(this.listFilter) : this.products;
        this.productsLength = this.filteredProducts.length;
    }

    constructor(private productService: ProductService) {
        this.listFilter = '';
    }

    performFilter(filterBy: string) : IComponent[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IComponent) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
                this.productsLength = this.products.length;
            },
            error => this.errorMessage = <any>error   
        );
    }
}