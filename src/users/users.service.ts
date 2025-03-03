import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    private users = [
        {
            id: 1,
            name: 'Alexis Gomez',
            phone: '12345678'
        },

        {
            id: 1,
            name: 'Alexis Gomez',
            phone: '12345678'
        },

        
    ]

    getUsers() {
        return this.users;
    }
}
