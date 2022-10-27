import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[],args?: string): string[] {
    if(args==='asc'){
      return value.sort((a:any,b:any)=>{
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    }else if (args === 'desc') {
      return value.sort((a: any, b: any) => {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return value;
  }

}