import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  GetData()
  {
   return this.http.get("http://200.0.1.155:3000/employees/");
  }
  AddData(emp:any)
  {
    return this.http.post("http://200.0.1.155:3000/employees/", emp);
  }
  Delete(no:any)
  {
    return this.http.delete("http://200.0.1.155:3000/employees/"+no);
  }
  getDataByID(no:any)
  {
    return this.http.get("http://200.0.1.155:3000/employees/"+no);
  }
  Update(emp)
  {
    return this.http.put("http://200.0.1.155:3000/employees/"+emp.No,emp)
  }
}
