// Day 5 - Exercise 5

interface UserSchema {
    id: number;
    name: string;
}

class User implements UserSchema {
    constructor(public name: string, public id: number) {}
}

const user = new User('Dog', 1);

console.log(user.id);

// Atribuição direta de 'id' não é permitida pois 'id' é uma propriedade somente de leitura
// user.id = 5; // Erro: 'id' é uma propriedade somente de leitura

// Alterando o nome do usuário é permitido
user.name = 'Harold';

console.log(`User:`, user);
