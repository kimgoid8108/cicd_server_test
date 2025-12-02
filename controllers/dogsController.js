const dogs = [
  { id: 1, name: "Buddy", age: 3, breed: "Golden Retriever" },
  { id: 2, name: "Max", age: 5, breed: "Bulldog" },
];

exports.getDogs = (req, res) => {
  res.json(dogs);
};

exports.addDog = (req, res) => {
  const newDog = { id: Date.now(), ...req.body };
  dogs.push(newDog);
  res.status(201).json(newDog);
};

exports.deleteDog = (req, res) => {
  const { id } = req.params;
  dogs = dogs.filter((dog) => dog.id !== parseInt(id));
  res.status(204).send();
};

exports.updateDog = (req, res) => {
  const { id } = req.params;
  const index = dogs.findIndex((dog) => dog.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "강아지를 찾을 수 없습니다." });
  }
  dogs[index] = { ...dogs[index], ...req.body };
  res.json(dogs[index]);
};
