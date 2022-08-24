import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { GetFeedbackUseCase } from './use-cases/get-feedback-use-case';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute ({
        type,
        comment,
        screenshot
    });

    return res.status(201).send();
});

routes.get('/feedbacks', async (req, res) => {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const getFeedbackUseCase = new GetFeedbackUseCase(
        prismaFeedbacksRepository
    )

    const feedbacks = await getFeedbackUseCase.execute();

    return res.status(200).send(feedbacks);
});

/*routes.get('/', async (req, res) => {
    console.log('passa aqui')

    return res.status(200).send({oi: 'oi'});
});*/