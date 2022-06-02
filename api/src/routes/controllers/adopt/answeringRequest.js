const Adopt = require("../../../models/adopt");
const Animal = require("../../../models/animal");

const answeringRequest = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    let findAndUpdateAdoption = await Adopt.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    let findAndUpdateAnimal;
    let boolean;
    if (status === "approved") boolean = true;
    else boolean = false;

    findAndUpdateAnimal = await Animal.findByIdAndUpdate(
      findAndUpdateAdoption.animal.toString(),
      { adoptedStatus: boolean },
      { new: true }
    );
    if (!findAndUpdateAnimal)
      throw new Error("Couldn't update animal adoption status");
    res.json({ success: true, message: `The request ${id} was answered` });
    /*
    
    if (status === "approved") {
      findAndUpdateAnimal = await Animal.findByIdAndUpdate(
        findAndUpdateAdoption.animal.toString(),
        { adoptedStatus: true },
        { new: true }
      );
      if (!findAndUpdateAnimal)
        throw new Error("Couldn't update animal adoption status");
      res.json({ success: true, message: `The request ${id} was answered` });
    } else {
      findAndUpdateAnimal = await Animal.findByIdAndUpdate(
        findAndUpdateAdoption.animal.toString(),
        { adoptedStatus: false },
        { new: true }
      );
      if (!findAndUpdateAnimal)
        throw new Error("Couldn't update animal adoption status");
      res.json({ success: true, message: `The request ${id} was answered` });
    }
    */
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = { answeringRequest };
