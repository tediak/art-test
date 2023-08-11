import express from 'express';
import { Request, Response } from 'express';

import { allSources, getData } from 'src/controllers/data';

const router = express.Router();

router.get('/', async (req: Request<{}, {}, {}, DataRequestQuery>, res: Response) => {
  const { sources } = req.query;
  const sourcesArray: string[] = sources ? sources.split(',') : allSources; 
  const data = await getData(sourcesArray);
  res.json(data);
});

export default router;