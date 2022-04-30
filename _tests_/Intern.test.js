const Intern = require('../lib/Intern.js');


test('creates an Intern object' ,() => {
    const intern = new Intern('Intern Name', 222, 'intern@gmail.com', 'Intern', 'UOFT');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));
});
test('get method to get valid values for getSchool',() =>{
    const intern = new Intern('Intern Name', 222, 'intern@gmail.com', 'Intern', 'UOFT');
    expect(intern.getSchool()).toEqual(expect.any(String));
});
test('get method to get valid return for getRole',() =>{
    const intern = new Intern('Intern Name', 222, 'intern@gmail.com', 'Intern', 'UOFT');
    expect(intern.getRole()).toEqual('Intern')
});