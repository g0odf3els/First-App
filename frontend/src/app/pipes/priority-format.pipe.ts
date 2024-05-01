import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from '../data/enums/priority';

@Pipe({
    name: 'priorityFormat',
    standalone: true,
})
export class PriorityFormatPipe implements PipeTransform {
    transform(value: number): string {
        return Priority[value];
    }
}
