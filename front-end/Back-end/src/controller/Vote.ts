import { Request, Response, NextFunction } from 'express';
import VoteSchema from '../model/Vote';
import InVote from '../interface/Vote';

const postVote = async(req: Request, res: Response, next: NextFunction) => {
    const formData = req.body.data
    const jokes_id: number = formData.jokes_id
    const voteFun: number = formData.funny
    const voteNotFun: number = formData.not_funny
    
    let jokesWasVote: InVote | null = await VoteSchema.findOne({jokes_id: jokes_id})

    if(jokesWasVote !== null) {
        const newVoteFun = voteFun + jokesWasVote.funny
        const newVoteNotFun = voteNotFun + jokesWasVote.not_funny

        VoteSchema.findOneAndUpdate({jokes_id: jokes_id}, {funny: newVoteFun, not_funny: newVoteNotFun})
            .then((vote) => res.status(200).json(vote)) 
            .catch(next)
    }else {
        const newVoteDoc = new VoteSchema(formData)
        
        newVoteDoc.save()
            .then((vote: InVote) => res.status(200).json(vote)) 
            .catch(next)
            
    }
}  

const getAllVote = async(req: Request, res: Response, next: NextFunction) => {
    const allVote = await VoteSchema.find({})

    return res.status(200).json(allVote)
}

const deleteAll = (req: Request, res: Response, next: NextFunction) => {
    VoteSchema.deleteMany()
        .then(() => res.json('delete all'))
        .catch(next)
}

export default { getAllVote ,postVote, deleteAll }