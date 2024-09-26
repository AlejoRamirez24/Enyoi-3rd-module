const getUsers = (req, res) => {
  res.send("Obteniendo todos los usuarios")
}

const deleteUser = (req, res) => {
  req.body
  res.send("Usuario borrado")
}

export { getUsers, deleteUser  }