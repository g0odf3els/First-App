import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataFormat',
    standalone: true,
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string): string {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const date = new Date(value);

        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = months[date.getMonth()];

        return `${dayOfWeek}, ${dayOfMonth} ${month}`;
    }
}
