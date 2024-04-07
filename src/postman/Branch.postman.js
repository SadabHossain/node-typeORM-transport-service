/** Insert or Update Records */
url = `http://localhost:3000/transport/dev/branch/saveOrUpdate`;
type = POST
body = {
    "branchName": "Bhagwangola",
    "phoneNumber": "9932195224",
    "address": "Rambagh, Netaji More, Bhagwangola, West Bengal",
    "pinCode": "742135",
    "district": "Murshidabad",
    "activeStatus": "Y",
    "startDate": "2024-04-05"

}

/** all active branchs  */
url = `http://localhost:3000/transport/dev/branch/list`;
type = POST

/** get Branch Details */
url = `http://localhost:3000/transport/dev/branch/details`
type = POST
body = {
    "id": "2"
}

/** get Branch Disale */
url = `http://localhost:3000/transport/dev/branch/disable`
type = POST
body = {
    "id": "2"
}