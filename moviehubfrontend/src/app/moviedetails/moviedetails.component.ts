import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../service/movie.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  id:any
  movie:any
  
  reviewForm=new FormGroup({
    "comment":new FormControl("",Validators.required),
    "rating":new FormControl("",Validators.required)
  })

  constructor(private route:ActivatedRoute,private service:MovieService){
    
    this.id=this.route.snapshot.params["id"]
    this.fetchMovieDetails()
    
  }

  fetchMovieDetails(){
    this.service.movieDetails(this.id).subscribe(res=>this.movie=res)
  }

  addReview(){
    let formData=this.reviewForm.value
    this.service.postReview(this.id,formData).subscribe(res=>this.fetchMovieDetails())
    

  }
}
