const readline = require("node:readline");
const moment = require("moment");


const nama = "Muftin";
console.log(nama);

/**
 * Membuat readline interface
 * @returns {readline,createInterface} objeckt readline interface
 */
function buatReadLine(){
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

/**
 * validasi input user dengan format yg sesuai
 * @param {string} tgl input user 
 * @returns {{valid:boolean, data: moment.moment}} mengembalikan hasil true or false dan objeck moment
 */
function validasiTgl(tgl){
  const hasil = moment(tgl, "DD-MM-YYYY", true);

  return {
    valid: hasil.isValid(),
    data: hasil,
  };
}

/**
 * apabila hasilnya true akan mengembalikan hasil dari format npm moment
 * @param {string} tanggalMoment ini objeck moment
 * @returns tanggalMoment.format("DD/MM/YYYY");
 */
function formatTgl(tanggalMoment){
  return tanggalMoment.format("DD/MM/YYYY");
}

/**
 * kalo inputan user hasilnya false akan menampilkan error
 * @return {void}
 */
function tampilPesanEror(){
  throw console.log("ikutin format penulisannya brow!!");
}

/**
 * memperoses input dari user
 * @param {{readline,createInterface}} rl  - readline interface
 * @returns {void}
 */
function processInputTanggal(rl){
  rl.question("Masukan Tanggal lahir (DD-MM-YYYY): ", (tgl) => {
    const hasil = validasiTgl(tgl);
    
    if (!hasil.valid) {
      tampilPesanEror();
      return rl.close();
    }

    const tglFrmt = formatTgl(hasil.data);

    console.log(tglFrmt);
    rl.close();
  });
}

function main() {
  const rl = buatReadLine();

  processInputTanggal(rl);
}

if (require.main === module) {
  main();
}

module.exports = {
  validasiTgl,
  formatTgl,
};
