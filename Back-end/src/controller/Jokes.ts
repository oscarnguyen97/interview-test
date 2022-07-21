import { Request, Response, NextFunction } from 'express'
import JokesSchema from '../model/Jokes';

const getAllJokes = (req: Request, res: Response, next: NextFunction) => {
    JokesSchema.find()
    .exec()
    .then((jokes) => res.status(200).json(jokes))
    .catch(next);
}

const getJokes = (req: Request, res: Response, next: NextFunction) => {
    const jokes_id = req.params.jokes_id

    JokesSchema.findOne({jokes_id: Number(jokes_id)})
    .exec()
    .then((jokes) => res.status(200).json(jokes))
    .catch(next);
}

export default { getAllJokes, getJokes }