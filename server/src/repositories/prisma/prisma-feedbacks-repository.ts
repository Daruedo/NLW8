import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }

    async index() {
        const feedbacks = await prisma.feedback.findMany({
            select: ({
              id: true,
              type: true,
              comment: true
            }),
          })
        
        return feedbacks  
    }
}