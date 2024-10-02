import { Pets } from "../models/pets.model.js";

export class PetsController {
  petWithTutor =async () => await Pets.findByPk(1, {
    include: [{
      model: Tutors,
      as: 'tutorData' 
    }]
  });
}
