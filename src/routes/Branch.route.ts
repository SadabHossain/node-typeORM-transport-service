import * as express from 'express';
import { BranchController } from '../controller/BranchController';
const router = express.Router();
const branhController = new BranchController();
router.post('/branch/saveOrUpdate',branhController.insertOrUpdate);
router.post('/branch/list',branhController.getListOfBranches);
router.post('/branch/details',branhController.getBrancheDetails);
router.post('/branch/disable',branhController.branchDisable);
export default router;