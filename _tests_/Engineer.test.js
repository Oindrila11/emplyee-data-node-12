const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Engineer Name', 123 , 'engineer@gmail.com', 'Engineer', 'github');

test('Create an Engineer object', () => {
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('get method for getName valid value return',()=>{
    expect(engineer.getName()).toEqual(expect.any(String));
});
test('get method for getId valid value return',()=>{
    expect(engineer.getId()).toEqual(expect.any(Number));
});
test('get method for getEmail valid value return',()=>{
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});
test('get method for getRole valid value return',()=>{
    expect(engineer.getRole()).toEqual('Engineer');
});
test('get method for getGithub username valid value return',()=>{
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

