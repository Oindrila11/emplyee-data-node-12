const Employee = require('../lib/Employee.js');
const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'employee');

test('creates a employee object' ,() => {

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toequal(expect.any(Number));
    expect(employee.email).toEqual(expect.StringWith('@'));
    expect(employee.role).toEqual(expext.any('employee'));
});

test('get method for getName valid value return',()=>{
    expect(employee.getName()).toEqual(expect.any(String));
});
test('get method for getId valid value return',()=>{
    expect(employee.getId()).toEqual(expect.any(Number));
});
test('get method for getEmail valid value return',()=>{
    expect(employee.getEmail()).toEqual(expect.StringWith('@'));
});
test('get method for getRole valid value return',()=>{
    expect(employee.getRole()).toEqual('employee');
});