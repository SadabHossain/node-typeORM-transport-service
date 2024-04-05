import * as express from 'express';
import { BranchController } from '../controller/BranchController';
const router = express.Router();
const branhController = new BranchController();
router.post('/branch/saveOrUpdate',branhController.insertOrUpdate);
export default router;