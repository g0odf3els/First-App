import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from '../data/enums/priority';

@Pipe({
    name: 'priority',
    standalone: true,
})
export class PriorityPipe implements PipeTransform {
    transform(value: number): string {
        return Priority[value];
    }
}