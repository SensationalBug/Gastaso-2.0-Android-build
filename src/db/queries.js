export const tipo_cuenta = `CREATE TABLE tipo_cuenta (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    label TEXT,
    value TEXT
)`;

export const cuentas = `CREATE TABLE cuentas (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    producto TEXT,
    monto_inicial DECIMAL,
    id_tipo_cuenta INTEGER,
    fecha DATE,
    FOREIGN KEY (id_tipo_cuenta) REFERENCES tipo_cuenta(id)
)`;
export const categorias = `CREATE TABLE categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    icon TEXT
)`;
export const tipo_gastos = `CREATE TABLE tipo_gastos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT
)`;
export const gastos = `CREATE TABLE gastos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cuenta INTEGER,
    id_tipo_gasto INTEGER,
    id_categoria INTEGER,
    concepto TEXT,
    monto DECIMAL,
    fecha DATE,
    FOREIGN KEY (id_cuenta) REFERENCES cuentas(id),
    FOREIGN KEY (id_tipo_gasto) REFERENCES tipo_gastos(id),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id)
)`;
