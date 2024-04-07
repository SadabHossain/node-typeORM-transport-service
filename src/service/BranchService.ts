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
                console.log(inputJson.id ? `updated records successfully !` : `inserted records successfully !`);
                return resolve(data);
            } catch (error) {
                return reject(error);
            } finally {

            }
        });
    }

    /** Get list of all active Branches */
    public async getListOfBranches(queryRunner) {
        return new Promise(async (resolve, reject) => {
            try {
                const branchRepository = queryRunner.manager.getRepository(Branch);
                const branches = branchRepository.find({ activeStatus: 'Y', deletedDate: null });
                return resolve(branches);
            } catch (error) {
                return reject(error)
            } finally {

            }
        })
    };

    /** Get active Branche Details  */
    public async getBranchDetails(queryRunner, inputJson) {
        return new Promise(async (resolve, reject) => {
            try {
                const branchRepository = queryRunner.manager.getRepository(Branch);
                const branche = branchRepository.find({ activeStatus: 'Y', deletedDate: null, id: inputJson.id });
                return resolve(branche);
            } catch (error) {
                return reject(error)
            } finally {

            }
        })
    };

     /** Get Branche Deleted  */
     public async branchDisable(queryRunner, inputJson) {
        return new Promise(async (resolve, reject) => {
            try {
                let branchInfo;
                const branchRepository = queryRunner.manager.getRepository(Branch);
                if(inputJson.id){
                    branchInfo = await branchRepository.findOneBy({id:inputJson.id});
                    branchInfo.activeStatus = 'N'
                }
                const barnch = plainToInstance(Branch, { ...branchInfo, deletedDate: new Date() });
                const data = branchRepository.save(barnch);
                return resolve(data);
            } catch (error) {
                return reject(error)
            } finally {

            }
        })
    }
}