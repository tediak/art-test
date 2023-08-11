import express from 'express';
import { Request, Response } from 'express';

import { getData } from 'src/controllers/data';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.params);
});

export default router;