class Client {
    name;
    #cpf;
    #salary;

    constructor(name, cpf, salary){
        this.name = name,
        this.#cpf = cpf,
        this.#salary = salary 
        //adc telefone e email
    }

    get cpf(){
        return this.#cpf
    }

    get salary(){
        return this.#salary
    }

    set salary(newSalary){
        this.#salary = newSalary
    }
}

module.exports = { Client }