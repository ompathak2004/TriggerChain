//procuder pushing events from outbox DB to q
import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";
const client = new PrismaClient();

const TOPIC_NAME = "zap-events";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function outbox() {
  const producer = kafka.producer();
  await producer.connect();
  while (true) {
    const sweeper = await client.zapRunOutbox.findMany({
      where: {},
      take: 10,
    });

    await producer.send({
      topic: TOPIC_NAME,
      messages: sweeper.map((r) => ({
        value: r.zapRunId,
      })),
    });

    await client.zapRunOutbox.deleteMany({
      where: {
        id: {
          in: sweeper.map((c) => c.id),
        },
      },
    });
  }
}
outbox();