import { Component } from '@angular/core';
import { formatDistance } from 'date-fns';
import { Task } from './Task';
import { Focus } from './Focus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [
    { id: 'a', name: 'Task A' },
    { id: 'b', name: 'Task B' },
    { id: 'c', name: 'Task C' },
  ];
  focuses: Focus[] = [
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
  currentTaskId: string | null = null;

  focusesForTask(taskId: string): Focus[] {
    return this.focuses.filter((focus) => focus.task === taskId);
  }

  focusDurationFormatted(focus: Focus): string {
    return formatDistance(focus.start, focus.end, {
      includeSeconds: true,
    });
  }

  startFocus(task: Task): void {
    this.currentTaskId = task.id;
  }

  endFocus(): void {
    this.currentTaskId = null;
  }

  get tasksToShow(): Task[] {
    return this.currentTaskId === null
      ? this.tasks
      : this.tasks.filter((task) => task.id === this.currentTaskId);
  }
}
