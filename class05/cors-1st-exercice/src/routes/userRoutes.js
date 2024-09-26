import { Router } from "express";
import { deleteUser, getUsers } from "../controllers/userController.js";

const router = Router();

router.get('/', getUsers)
// router.delete(`/users`, deleteUser)
router.post('/:id/', (req, res) => {
  const id = req.params.id
  res.send(`This is your id ${id}`)
  
})

export default router