let person = {
    'name': 'John',
    'age': 35,
    'city': 'Berlin',
    showPersonDetails: function () {
        console.log('Name:', this.name, 'Age:', this.age, 'City:', this.city);
    }
};

person.showPersonDetails();