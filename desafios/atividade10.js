// lista de compras
 
const hardware = ["Placa mãe", "placa video", "memoria ram", "cooler"];
console.log(hardware[0]);
console.log(hardware[1]);
console.log(hardware[2]);
console.log(hardware[3]);
console.log(hardware);

hardware[3] = ("cpu");
hardware.shift(0);
console.log(hardware);
