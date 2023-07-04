//1...The class Movie is stated below. An instance of class Movie represents a film. 
//        This class has the following three properties:

class movie{

  constructor(title,studio,rating){
  this.title=title;
  this.studio=studio;
  this.rating=rating||"PG";
  }
  
  getMovieRatings(data=[],rating='PG'){
   
    return  data.filter((d)=>d.rating === rating)// "PG-rated data filtering from movieutils array"
  
  }
  
  
  }
  let movieutils = new movie();
  
  let movielist=[
  new movie("Ponniyin selvan","Lyca studio","PG"),
  new movie("Baahubali","Ramoji Film City",""),// there is no ratings 
  new movie("Mersal","Thenandal Studio","PG"),
  new movie("Fast and Furious","Universal Studio.","PG13"),
  new movie("Captain America","Marvel Studio","R"),
  // Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
   //the studio “Eon Productions”, and the rating “PG­13”
  new movie("Casino Royale","Eon Productions","PG13")
  ]
  console.log(movieutils.getMovieRatings(movielist,"PG"));//showing the ratings in console which has "PG" Ratings
  
  
  
  
  // 3...Write a “person” class to hold all the details.


  class person{
     
   constructor(name,age,gender,depart,work,location,){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.depart=depart;
    this.work=work;
    this.location=location;

   }


  }

  let personList=[
    new person("vignesh","21","male","mechanical","cnc operator","chennai"),
    new person("ramesh","250","male","civil","vip constructions","chennai"),
    new person("nithiya","20","female","csc","HCL","hosur")
  ]
  
  console.log(personList);




  // 4....write a class to calculate the uber price.

class uberPriceCalculate{

constructor(km){
  this.km=km;
  this.price=this.km*5;
}

  getPrice(){
    return `Charges for the Ride is = ${this.price}`
  }

}


let ride_1=new uberPriceCalculate(50)
console.log(ride_1.getPrice())




