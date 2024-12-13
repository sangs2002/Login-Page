import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      return (
       // item.id.toString().toLowerCase().includes(searchText)|| 
        item.firstName.toLowerCase().includes(searchText) || 
        item.lastName.toLowerCase().includes(searchText) || 
        item.userName.toLowerCase().includes(searchText) || 
        item.email.toLowerCase().includes(searchText)
      );
    });
  }
}
