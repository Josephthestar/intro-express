const students = [
    {name: 'Feed Dogs', done: true},
    {name: 'Learn Express', done: false},
    {name: 'Buy Milk', done: false},
    {name: '', done:true },
    
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  }
  