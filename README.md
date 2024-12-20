# Database Relationships
<h3>Topics to be covered :</h3>
<ul>
<li>One to One Relationships</li>
<li>One to Many Relationships</li>
<li>Many to Many Relationships</li>
</ul>

One to One Relationships: In one to one relationship ..let there be two table that are connected to each other so in this case one table consist a primary key that comes out to be foreign key for another table...so here one to one connection is formed..
 
 One to many : we take ex of ig post and quora post ..so here there is single user can create multiple posts 

 Many to Many : in this we take ex of student table and subject table so in this a single student can take multiple subj likewise a single sub can taken by multiple student so this is ex of many to many 

 # One to Many / Approach 1 (one to few)
 Store the child document inside parent
In this we take ex of uber,ola ,swiggy,zomato ..yha pr hm user ka name rakhte h addresses rakhte h to isme ek user jyada se jyada 2,4 addresses hi store krata h
 # One to Many / Approach 2
 Store a reference to the child document inside parent

  ## populate in mongoose
  <img src="/assets/img1.png">
    <img src="/assets/img2.png">

 //output terminal me to full object jayega mongoose me but hm mongodb db dekhenge to waha sirf items ki object id jayegi naki whole object

//populate in mongoose : isse hm jo database me object id data stored hota h uske through hm whole data ko fetch kr skte h

# One to Many (Approach 3 One to squillions)
