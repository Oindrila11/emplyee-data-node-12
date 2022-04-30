const Manager = require('../lib/Manager.js');

const manager = new Manager('Manager Name', 111, 'manager@gmail.com', 225, 'Manager');

test('creates a Manager object' ,() => {
   
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
    
});
test('get method to get valid values for getOfficeNumber',() =>{
   
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
test('get method to get valid return for getRole',() =>{
   
    expect(manager.getRole()).toEqual('Manager')
});