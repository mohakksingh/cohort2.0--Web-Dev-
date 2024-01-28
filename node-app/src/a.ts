//what is the difference btw interface vs type
//interface= when you have to do it in classes implementation   
//types=we can unions,intersection

type Employee = {
    name: string;
    startDate: Date;
  };
  
type Manager = {
    name: string;
    department: string;
};

type TechLead=Employee& Manager;
