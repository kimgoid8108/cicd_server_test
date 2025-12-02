const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getDogs = async (req, res) => {
  try {
    const dogs = await prisma.dogs.findMany();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
};

exports.addDog = async (req, res) => {
  const { name, breed, age } = req.body;
  try {
    const newDog = await prisma.dogs.create({
      data: { name, breed, age },
    });
    res.status(201).json(newDog);
  } catch (error) {
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
};

exports.deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.dogs.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
};

exports.updateDog = async (req, res) => {
  const { id } = req.params;
  const { name, age, breed } = req.body;
  try {
    const updatedDog = await prisma.dogs.update({
      where: { id: parseInt(id) },
      data: { name, age, breed },
    });
    res.json(updatedDog);
  } catch (error) {
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
};
