import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { order } from 'src/app/cart/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  session: number = 0;
  orders: order[];
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem("username")==null) {
      this.session = 0;
      this.router.navigate(['login'])
    } else {
      this.session = 1;
      this.fetchOrders(); 
    }

  }

  fetchOrders() {
    this.dashboardService.fetchOrders().subscribe(
      data => {
        this.orders = data
      },
      error => console.log("Error in fetching orders!" + error)
    )
  } 
}
