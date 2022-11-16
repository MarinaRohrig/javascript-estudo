class MyClass{
    constructor(name, age) {
    this.name=name;
    this.age=age;
    }
    sayHello() {
      console.log(`Hi ${this.name} your age is ${this.age}.`);
      }
   }
   
   class UserProfile extends MyClass{
    username(){ console.log(this.name) }
   }

   
   const profile = new MyClass("Marina",25);
   profile.sayHello();

   const userProfile = new UserProfile("Marina2",26)
   userProfile.sayHello();