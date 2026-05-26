const { describe, it } = require("node:test");
const assert = require("node:assert");
const moment = require("moment");

const {
  validasiTgl,
  formatTgl,
} = require("./convertTgl");

describe("Testing function validasiTgl", () => {

  it("harus menghasilkan valid true jika format tanggal benar", () => {
    const hasil = validasiTgl("17-12-2001");

    assert.strictEqual(hasil.valid, true);
  });

  it("harus menghasilkan valid false jika format tanggal salah", () => {
    const hasil = validasiTgl("2001-12-17");

    assert.strictEqual(hasil.valid, false);
  });

});

describe("Testing function formatTgl", () => {

  it("harus mengubah format tanggal menjadi DD/MM/YYYY", () => {
    const tanggal = moment("17-12-2001", "DD-MM-YYYY");

    const hasil = formatTgl(tanggal);

    assert.strictEqual(hasil, "17/12/2001");
  });

});