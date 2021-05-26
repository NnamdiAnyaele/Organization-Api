import express, { Request , Response, NextFunction} from 'express';
import {getAllUsers, getUser} from '../models/getUsers';
import {createUser} from '../models/createUser';
import {updateUser} from '../models/updateUser';
import {deleteUser} from '../models/deleteUser'
import {validatePostBody , validatePutBody} from '../validators/requestValidate';
import {auth} from '../middeware/auth'

const router = express.Router();


/* GET all users */
router.get('/',auth, async function(req: Request, res: Response, next: NextFunction) {
  try {
    const pageNumber = Number(req.query.pageNumber!);
    if(typeof pageNumber !== "number") {return res.status(400).send("Invalid page number")}
    let users = await getAllUsers(pageNumber)
    res.status(200).json({data: users});
  } catch (error) {
    res.status(404).send("no user stored on database")
  }
});

router.get('/:id',auth, async function(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id;
    let user = await getUser(userId)
    res.status(200).json({data: user});
  } catch (error) {
    res.status(404).send("user with the given id does not exist")
  }
});

router.post('/',auth, async function(req: Request, res: Response, next: NextFunction) {
  try {
    const body = req.body;
  
    const {error} = validatePostBody(body);
    if(error) {
      return res.status(400).send(error.details[0].message)
    }

    const user = await createUser(body)
    res.status(201).json({data: user})
    
  } catch (error) {
    res.status(500).send("couldn't create user, try again")
  }
});

router.put('/:id',auth, async function(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const body = req.body;

    const {error} = validatePutBody(body);
    if(error) {
      return res.status(400).send(error.details[0].message)
    }

    const user = await updateUser(id, body)
    if(!user) {return res.status(400).send("user does not exist")}
    res.status(201).json({data: user})
    
  } catch (error) {
    res.status(500).send("couldn't create user, try again")
  }
});

router.delete('/:id',auth, async function(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id;
    let user = await deleteUser(userId)
    if (user === "not found") return res.status(400).send("user with given id not found");
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(404).send("user with the given id does not exist")
  }
});

export default router
