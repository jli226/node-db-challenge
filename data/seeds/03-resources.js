exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Lambda Student",
      description: "a soon to be hired developer"
    },
    {
      id: 2,
      name: "MacBook Pro #1",
      description: "an overly expensive laptop computer"
    },
    {
      id: 3,
      name: "MacBook Pro #2",
      description: "an even more overly expensive laptop computer"
    }
  ]);
};
