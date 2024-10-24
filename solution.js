const tel = {
  marque: "SmartF22",
  prix: 400,
  stock: 200,
  ref: "Smartphone2022",
  VerifierStock: function () {
    if (this.stock > 0) return true;
    else return false;
  },
};

console.log(tel.VerifierStock());
