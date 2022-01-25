import { Component } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = [
    { id: 'a', name: 'Task A' },
    { id: 'b', name: 'Task B' },
    { id: 'c', name: 'Task C' },
  ];
  focuses = [
    {
      task: 'a',
      start: new Date('2022-01-24T13:00'),
      end: new Date('2022-01-24T13:24:00'),
    },
    {
      task: 'a',
      start: new Date('2022-01-24T13:30'),
      end: new Date('2022-01-24T13:55'),
    },
    {
      task: 'b',
      start: new Date('2022-01-24T14:00'),
      end: new Date('2022-01-24T14:26'),
    },
  ];

  focusesForTask(taskId: string) {
    return this.focuses.filter((focus) => focus.task === taskId);
  }

  focusDurationFormatted(focus: { end: Date; start: Date }) {
    return formatDistance(focus.start, focus.end, {
      includeSeconds: true,
    });
  }
}
