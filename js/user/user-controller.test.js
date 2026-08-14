const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  
test('agrega un usuario que no estaba en la lista', () => {
let controlador = new UserController();
let usuario = new User(2001, "Paola", "paola@email.com");
expect(controlador.getUsers()).not.toContain(usuario);
controlador.add(usuario);
expect(controlador.getUsers()).toContain(usuario);
});

test('elimina un usuario que no estaba en la lista', () => {
let controlador = new UserController();
let usuarioGuardado = new User(2002, "Luis", "luis@gmail.com");
let usuarioNoGuardado = new User(2003, "Marta", "marta@gmail.com");
controlador.add(usuarioGuardado);
controlador.remove(usuarioNoGuardado);
expect(controlador.getUsers())
.toContain(usuarioGuardado);
expect(controlador.getUsers())
.not.toContain(usuarioNoGuardado);
});

test('encuentra un usuario por su correo', () => {
let controlador = new UserController();
let usuario = new User(2004, "Pedro", "pedro@gmail.com");
controlador.add(usuario);
expect(
controlador.findByEmail("pedro@gmail.com")
).toBe(usuario);
});

test('no encuentra un correo que no existe', () => {
let controlador = new UserController();
expect(
controlador.findByEmail("alex.cibrt@gmail.com")
).toBeUndefined();
});

test('encuentra un usuario por su id', () => {
let controlador = new UserController();
let usuario = new User(2005, "Laura", "laura@gmail.com");
controlador.add(usuario);
expect(controlador.findById(2005))
.toBe(usuario);
});

test('no encuentra un id que no existe', () => {
let controlador = new UserController();
expect(controlador.findById(9999))
.toBeUndefined();
});
