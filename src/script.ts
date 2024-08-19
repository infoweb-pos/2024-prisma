import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	let user = await prisma.user.create({
		data: {
			name: "Alice",
			email: "alice@prisma.io",
			nickname: "alice",
			passwword: "123"
		},
	});
	console.log(user);
	user = await prisma.user.create({
		data: {
			name: "Bob",
			email: "bob@prisma.io",
			nickname: "bob",
			posts: {
				create: [
					{
						title: "Hello World",
						published: true,
					},
					{
						title: "My second post",
						content: "This is still a draft",
					},
				],
			},
		},
	});
	console.log(user);

	const users = await prisma.user.findMany();
	console.log(users);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
