import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";
const client = new PrismaClient;

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['kafka-28c0a836-om890.h.aivencloud.com:26784']
  })

async function outbox() {
    while(true){
        const sweeper = await client.zapRunOutbox.findMany({
            where : {},
            take : 10
        })
    }
}