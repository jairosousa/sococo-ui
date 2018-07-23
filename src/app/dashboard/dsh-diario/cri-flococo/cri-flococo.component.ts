import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cri-flococo',
  templateUrl: './cri-flococo.component.html',
  styleUrls: ['./cri-flococo.component.css']
})
export class CriFlococoComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.dataset();
  }

  private dataset() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Cri',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Flococo',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

}
