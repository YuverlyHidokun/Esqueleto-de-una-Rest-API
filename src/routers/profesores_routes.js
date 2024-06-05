import {Router} from 'express'
import { deleteAllProfesores, getAllProfesores, CreateAllProfesores, updateAllProfesores} from "../controllers/profesores_controller.js";

const router = Router()

router.get('/profesores', getAllProfesores)

router.post('/profesores', CreateAllProfesores)

router.put('/profesores/:id',updateAllProfesores)

router.delete('/profesor/:id',deleteAllProfesores)


export default router