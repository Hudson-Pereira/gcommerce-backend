import { Role } from "src/auth/models/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  nome: string;
  email: string;
  senha: string;
  isAdmin: boolean;

  // @PrimaryGeneratedColumn()
  // public id: number;

  // @Column({ unique: true })
  // public email: string;

  // @Column({
  //   type: "enum",
  //   enum: Role,
  //   default: Role.User,
  // })
  // public role: Role;
}
