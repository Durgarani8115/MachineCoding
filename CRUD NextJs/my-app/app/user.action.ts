'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default  async function getServerResponse(){
        return "Hello from server action"
    }
    export async function createUser(name:string,email:string){
        
            await prisma.user.create({
                data:{
                    name,
                    email
                }
            })
        }