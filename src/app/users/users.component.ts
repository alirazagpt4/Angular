import { Component  , OnInit , ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule  , MatPaginator } from '@angular/material/paginator';
import { MatSortModule  , MatSort} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  standalone:true,
  imports: [CommonModule , MatPaginatorModule , MatTableModule , MatSortModule , MatProgressSpinnerModule , MatInputModule ,MatCard],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email']
  dataSource!: MatTableDataSource<any>;
  loading: boolean = true;
  // users: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService:ApiService , private router:Router){}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next:(res) =>{
            //  console.log('Data from backend:', res); 
            //  this.users = res.Users
            this.dataSource = new MatTableDataSource(res.Users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.loading = false;
      },
      error:(err) =>{
        console.error("Error fetching users : " , err);
        this.loading = false;
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logout(){
    const token = localStorage.removeItem('token');
    this.router.navigate(['/']);

  }


}
