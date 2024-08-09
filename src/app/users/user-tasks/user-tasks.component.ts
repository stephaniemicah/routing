import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
  
  // userId = input.required<string>();
  // message = input.required<string>();
  // private usersService = inject(UsersService);
  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);


}

export const resolveUserName: ResolveFn<string | undefined> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
    return userName;
  // const userId = activatedRoute.data['userId'];
  // return usersService.users.find(u => u.id === userId)?.name;
};
