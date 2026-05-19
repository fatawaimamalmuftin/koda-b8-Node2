const readline = require("node:readline");
const moment = require("moment");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Tanggal lahir (DD-MM-YYYY): ", (tgl) => {
  const hasil = moment(tgl, "DD-MM-YYYY", true);
  if (!hasil.isValid() || isNaN(hasil)) {
    console.log("ikutin format penulisannya brow!!");
    return rl.close();
  }
  console.log(hasil.format("DD/MM/YYYY"));
  rl.close();
});
