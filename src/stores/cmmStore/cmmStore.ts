// store.js
import { defineStore } from 'pinia';

export const cmmStore = defineStore({
    id: 'cmm',
    state: () => ({
        users: []
    }),
    actions: {
        fetchUsers() {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => this.setUsers(data))
                .catch(error => console.error('Error fetching users:', error));
        },
        setUsers(users) {
            this.users = users;
        },
        addUser(user) {
            this.users.push(user);
        },
        deleteUser(userId) {
            this.users = this.users.filter(user => user.id !== userId);
        }
    }
});
