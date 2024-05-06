import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(private routeId:ActivatedRoute,private api:ApiService) { }
product : any=""
data: any="";

  ngOnInit(){
    this.api.getproduct().subscribe((res:any)=>{
      let id=this.routeId.snapshot.paramMap.get('id')
      let response=res
      let product =response.filter((e:any)=>e.id==id)
      this.data=product[0]})
    }
  }    
