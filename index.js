const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1560,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1450,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1480,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1100,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 700,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Numeros de ID impar en consola

console.log(`Las pizzas con números de ID impares son:`);

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) console.log(`   ` + pizza.id + ` : ` + pizza.nombre);
});

//Responder :

console.log(`¿Hay alguna pizza que valga menos de $800?`);

if (
  pizzas.some((pizzavalor) => {
    return pizzavalor.precio < 900;
  })
) {
  console.log(`   Sí, hay pizzas que valen menos de $800.`);
} else {
  console.log(`   No, todas las pizzas cuestan más de $800.`);
}

// Nombre de Pizzas con sus precios

console.log(`TIPOS DE PIZZAS Y PRECIOS:`);

pizzas.forEach((pizzaNombrePrecio) => {
  const mensaje =
    ` - ` + pizzaNombrePrecio.nombre + `: $` + pizzaNombrePrecio.precio;
  console.log(mensaje);
});

//Pizzas y sus ingredientes

pizzas.forEach((tipoDePizza) => {
  console.log(`Los ingredientes de la ${tipoDePizza.nombre} son:`);
  tipoDePizza.ingredientes.forEach((ingredientesdepizzas) => {
    console.log(`  -${ingredientesdepizzas}`);
  });
});
