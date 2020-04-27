
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: 1234567890, make: "Chevrolet", model: "Impala", mileage: 28000, transmissionType: "automatic", titleStatus: "good" },
    { vin: 1234567899, make: "Kia", model: "Sorrento", mileage: 44000, transmissionType: "manual", titleStatus: "salvaged" },
    { vin: 1234567898, make: "Mercedes", model: "C Class", mileage: 33000, transmissionType: "automatic", titleStatus: "good" },
  ])
};
