import { plainToInstance } from "class-transformer";
import { Branch } from "../entity/Branch";
export class BranchService {

    /**Insert or update branch records */
    public async insertOrUpdate(queryRunner, inputJson) {
        return new Promise(async (resolve, reject) => {
            try {
                let branchUpdate;
                const branchRepository = queryRunner.manager.getRepository(Branch);
                if (inputJson.id) {
                    branchUpdate = await branchRepository.findOneBy({ id: inputJson.id });
                    branchUpdate.branchName = inputJson.branchName;
                    branchUpdate.phoneNumber = inputJson.phoneNumber;
                    branchUpdate.address = inputJson.address;
                    branchUpdate.pinCode = inputJson.pinCode;
                    branchUpdate.district = inputJson.district;
                    branchUpdate.startDate = inputJson.startDate;
                }
                const branch = plainToInstance(Branch, branchUpdate ? { ...branchUpdate, updatedDate: new Date() } : { ...inputJson, insertedDate: new Date() });
                const data = await branchRepository.save(branch);
                console.log(inputJson.id ?  `updated records successfully !`: `inserted records successfully !`);
                return resolve(data);
            } catch (error) {
                return reject(error);
            } finally {

            }
        });
    }
}