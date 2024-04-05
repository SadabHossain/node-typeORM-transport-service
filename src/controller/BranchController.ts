import { BranchService } from "../service/BranchService";
import { AppDataSource } from "../data-source";
import { sendResponse } from '../utils/Util'
export class BranchController {

    /** Insert and Updated Branch Records */
    public async insertOrUpdate(req, res, next) {
        console.log(`insert or update request json data `,JSON.stringify(req.body));
        const branchService = new BranchService();
        await branchService.insertOrUpdate(AppDataSource, req.body)
            .then((data) => sendResponse(true, req.body.id ? `Records Updated successfully` : `Records inserted successfully`, data, res))
            .catch((err) => sendResponse(false, `Failure`, err, res))

    }
}