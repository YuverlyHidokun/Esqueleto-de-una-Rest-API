import {Router} from 'express'
import { getAllEstudiantes, updateAllEstudiante, CreateAllEstudiante,deleteAllEstudiante } from '../controllers/estudiantes_controller.js'

const router = Router()

router.get('/estudiantes', getAllEstudiantes)

router.put('/estudiantes/:id',updateAllEstudiante)

router.post('/estudiantes', CreateAllEstudiante)

router.delete('/estudiante/:id',deleteAllEstudiante)

export default router