import { Injectable } from "@angular/core";
import { Part } from "../models";


const data = {
  'cpu': [
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
      name: 'AMD Ryzen 5 5600X',
      price: 189,
      type: 'cpu'
    },
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
      name: 'AMD Ryzen 7 5800x',
      price: 281,
      type: 'cpu'
    },
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
      name: 'AMD Ryzen 9 5900X',
      price: 368,
      type: 'cpu'
    }
  ],
  'gpu': [
    {
      image: 'https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg',
      name: 'RTX 3060',
      price: 289,
      type: 'gpu'
    },
    {
      image: 'https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg',
      name: 'RTX 3070',
      price: 478,
      type: 'gpu'
    },
    {
      image: 'https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg',
      name: 'RTX 3080',
      price: 699,
      type: 'gpu'
    }
  ],
  'motherboard': [
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/8d7d0435e8a2af93b5d91a1a5dccd476.256p.jpg',
      name: 'Asus X570',
      price: 89,
      type: 'motherboard'
    },
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/52ee465cbd64b16145232d863524c066.256p.jpg',
      name: 'Gigabyte X-Xtreme v2',
      price: 199,
      type: 'motherboard'
    },
    {
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/662aee2a85bbe3b7e12224e381e57d24.256p.jpg',
      name: 'MSI A Pro R7',
      price: 169,
      type: 'motherboard'
    }
  ]
}


@Injectable({
  providedIn: 'root'
})
export class PartService {
  public getParts(id: string): Promise<Part[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((data as any)[id]);
      }, 500);
    });
  }
}
