import { FeedbacksRepository } from "../repositories/feedbacks-repository";


export class GetFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async execute() {
        const feedbacks = await this.feedbacksRepository.index()

        return feedbacks
    }
}