class student

{

  constructor(first_name,last_name,roll_number,Sex,date_of_birth)

  {

    this.first_name=first_name;

   this.last_name=last_name;

   this.roll_number=roll_number;

    this.Sex=Sex;

    this.date_of_birth=new Date(date_of_birth);

  }
 
  get_birth_year()
  {
   return this.date_of_birth.getFullYear();
  }
   get_age()
  {
 return Math.abs(2022-(this.date_of_birth.getFullYear()));
  }
  get_name()
  {
   return this.first_name+this.last_name;
  } 
}

var student1=new student('karamveer',' garathi',25,'male','4-3-1998');
var student2=new student('ved',' jangid',26,'male','10-08-2000');

console.log(student1.get_birth_year());
