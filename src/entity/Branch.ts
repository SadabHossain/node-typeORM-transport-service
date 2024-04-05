import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Branch {
    @PrimaryGeneratedColumn()
    id: Number
    @Column({ type: 'varchar', nullable: true })
    branchName: String;
    @Column({ type: 'varchar', nullable: true })
    phoneNumber: Number;
    @Column({ type: 'nvarchar', nullable: true })
    address: String;
    @Column({ type: 'varchar', nullable: true })
    pinCode: Number;
    @Column({ type: 'varchar', nullable: true })
    district: String;
    @Column({ type: 'enum', enum: ['Y', 'N'], default: 'Y', nullable: true })
    activeStatus: String;
    @Column({ type: 'date', nullable: true })
    startDate: Date;
    @Column({ type: 'date', nullable: true })
    endDate: Date;
    @Column({ type: 'date', nullable: true })
    insertedDate: Date;
    @Column({ type: 'date', nullable: true })
    updatedDate: Date;
    @Column({ type: 'date', nullable: true })
    deletedDate: Date;




}