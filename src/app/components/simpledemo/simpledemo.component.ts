import { Component, OnInit ,Input} from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';
@Component({
  selector: 'app-simpledemo',
  templateUrl: './simpledemo.component.html',
  styleUrls: ['./simpledemo.component.css']
})
export class SimpledemoComponent implements OnInit {
  @Input() reciveDataParent:string="";
  selected: string = 'all';
  productsFiltered: any;

  sendSelection(e: any){
    console.log(e.target.value);
    this.selected = e.target.value;
    console.log(this.selected);
    this.productsFiltered = this.products.filter((product) =>
      this.selected === 'all' ? product : product.categroy === this.selected
    );
    console.log(this.productsFiltered )
  }
  imgSrc:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswumTZjpm_0tPjhTnEwI8zO_P67rdafLwoA&usqp=CAU'
  products: Iproduct[]=[]
  myDate:Date;
  constructor() {
    this.myDate = new Date();
    this.products=[
      {
        id:1,
        title:'Iphone 13 pro max',
        imageUrl:'../../assets/Images/14.jpg',
        quantity:1,
        price:20000,
        categroy:"mobile"

      },
      {
        id:3,
        title:'Samsung a52',
        imageUrl:'../../assets/Images/17.jpg',
        quantity:4,
        price:10000,
        categroy:"tv"

      },
      {
        id:2,
        title:'Dell Corei7 ',
        imageUrl:'../../assets/Images/13.jpg',
        quantity:6,
        price:15000,
        categroy:"laptop"

      },
      {
        id:3,
        title:'Samsung a52',
        imageUrl:'../../assets/Images/17.jpg',
        quantity:4,
        price:10000,
        categroy:"tv"

      },
      {
        id:4,
        title:'Oppo reno 5',
        imageUrl:'../../assets/Images/15.jpg',
        quantity:10,
        price:7000,
        categroy:"mobile"

      },

      {
        id:2,
        title:'Dell Corei7 ',
        imageUrl:'../../assets/Images/13.jpg',
        quantity:6,
        price:15000,
        categroy:"laptop"

      },
      {
        id:3,
        title:'Samsung a52',
        imageUrl:'../../assets/Images/17.jpg',
        quantity:4,
        price:10000,
        categroy:"tv"

      }
    ]
  }
    ngOnInit(): void {
      // this.selected = 'all';
    this.productsFiltered = this.products;

    }



    totalPrice:number=0
    buyProduct(price:number,quantity:string)
    {
      if(quantity=="")
      {
        quantity="1"
        this.totalPrice+=price*parseInt(quantity);
      }
      else
      {
        this.totalPrice+=price*parseInt(quantity);
      }
    }



}
