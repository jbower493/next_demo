import prisma from "../../prisma/prismaClient";

async function getAllUsers() {
    const allUsers = await prisma.user.findMany();

    return allUsers;
}

export default getAllUsers;
