import express from 'express';
import Application from '../../domain/application/application';

const userRouter = express.Router();


userRouter.get('/:id', async (req, res) =>{
    const app = Application.getInstance();
    const result = await app.user.getUserById(req.params.id);

    return res.json({name: result});
});



export default userRouter;