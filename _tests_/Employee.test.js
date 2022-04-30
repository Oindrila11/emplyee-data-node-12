const Employee = require('../lib/Employee.js');


test('creates a employee object' ,() => {
    const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'Employee');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
});

test('get method for getName valid value return',()=>{
    const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'Employee');
    expect(employee.getName()).toEqual(expect.any(String));
});
test('get method for getId valid value return',()=>{
    const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'Employee');
    expect(employee.getId()).toEqual(expect.any(Number));
});
test('get method for getEmail valid value return',()=>{
    const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'Employee');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});
test('get method for getRole valid value return',()=>{
    const employee = new Employee('Employee Name', 331, 'employee@gmail.com', 'Employee');
    expect(employee.getRole()).toEqual('Employee');
});